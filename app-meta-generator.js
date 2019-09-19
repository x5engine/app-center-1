const nofetch = require('nofetch')
const fs = require('fs')
const blockstack = require('blockstack')

var appPublishers = [
  { username: 'jehunter5811.id', apps: [216, 1748, 1538, 934] },
  { username: 'antonio.id', apps: [1087] },
  { username: 'kkomaz.id', apps: [955] },
  { username: 'markmhendrickson.id', apps: [1041] },
  { username: 'mabdou.id', apps: [1318] },
  { username: 'dmail.id', apps: [1318] },
  { username: 'kartikspringrole.id.blockstack', apps: [176] },
  { username: 'tautvilas.id.blockstack', apps: [865] },
  { username: 'w3bwizart.id.blockstack', apps: [1832] },
  { username: 'marcojrfurtado.id.blockstack', apps: [1529] },
]

async function fetchProfile(p) {
  return blockstack
    .lookupProfile(p.username)
    .then(profile => {
      return {
        ...p,
        profile,
      }
    })
    .catch(e => {
      return {
        ...p,
        profile: {
          name: p.username,
        },
      }
    })
}

async function fetchManifest(manifestUrl) {
  var manifest
  try {
    response = await nofetch(manifestUrl, { timeout: 50000 })
  } catch (e) {
    response = { status: e }
  }

  if (response.status != 200) {
    manifestUrl = null
  } else {
    try {
      manifest = await response.json()
    } catch (e) {
      manifest = { start_url: undefined }
    }

    if (!manifest.hasOwnProperty('start_url')) {
      manifestUrl = null
    }
  }
  return { manifestUrl, manifest }
}

async function findManifestData(domain) {
  var manifestUrl = domain + 'manifest.json'

  var manifestData = await fetchManifest(manifestUrl)
  if (!manifestData.manifestUrl) {
    manifestUrl = domain + 'manifest.webmanifest'
    manifestData = await fetchManifest(manifestUrl)
  }
  if (!manifestData.manifestUrl) {
    manifestUrl = domain + 'static/manifest.json'
    manifestData = await fetchManifest(manifestUrl)
  }
  if (!manifestData.manifestUrl) {
    manifestUrl = domain + 'manifest_blockstack.json'
    manifestData = await fetchManifest(manifestUrl)
  }
  return manifestData
}

async function getAppMeta(node) {
  if (!node.website.startsWith('https://')) {
    return {
      id: node.id,
      authors: '[]',
      manifestUrl: '',
    }
  }

  var domain = node.website.trim()

  if (domain == 'https://sarchy.co/TrustingTrust/pc/index.html') {
    domain = 'https://sarchy.co/'
  } else if (domain == 'https://blockusign.co/signup.html') {
    domain = 'https://blockusign.co/'
  } else if (domain == 'https://cryptocracy.io/') {
    domain = 'https://dapp.cryptocracy.io/'
  } else if (domain == 'https://getatomichabits.com/home/') {
    domain = 'https://getatomichabits.com/'
  } else if (domain == 'https://timestack.app') {
    domain = 'https://my.timestack.app/'
  } else if (domain == 'https://dotpodcast.co/') {
    domain = 'https://player.dotpodcast.co/'
  } else if (domain == 'https://piara.me') {
    domain = 'https://auth.piara.me/'
  } else if (domain == 'https://crosscheck.paradigma.global/') {
    domain = 'https://dappcrosscheck.paradigma.global/'
  }

  if (!domain.endsWith('/')) {
    domain = domain + '/'
  }

  var manifestData = await findManifestData(domain)
  if (!manifestData.manifestUrl) {
    if (domain.indexOf('www.') >= 0) {
      const domain2 = domain.replace('www.', 'app.')
      manifestData = await findManifestData(domain2)
    }
  }
  if (!manifestData.manifestUrl) {
    if ((domain.match(/\./g) || []).length == 1) {
      const domain2 = domain.replace('://', '://app.')
      manifestData = await findManifestData(domain2)
    }
  }
  if (!manifestData.manifestUrl) {
    if (domain.indexOf('://about.') >= 0) {
      const domain2 = domain.replace('://about.', '://')
      manifestData = await findManifestData(domain2)
    }
  }

  var authors = []
  if (!manifestData.manifestUrl) {
    console.log('*** no manifest found for ' + node.website)
  } else if (
    manifestData.manifest &&
    Array.isArray(manifestData.manifest.did_authors)
  ) {
    authors = await Promise.all(
      manifestData.manifest.did_authors.map(async a => {
        var address
        if (a.startsWith('did:stack:')) {
          address = a.substr(13, 34)
        } else if (a.startsWith('did:btc-addr:')) {
          address = a.substr(13)
        } else {
          if (a.indexOf('.') > 0) {
            addPublisher(a, node.id)
          }
          return Promise.resolve(a)
        }
        console.log('get names for address ' + address)
        return await nofetch(
          `https://core.blockstack.org/v1/addresses/bitcoin/${address}`
        )
          .then(r => r.json())
          .then(async response => {
            if (Array.isArray(response.names)) {
              response.names.forEach(async n => {
                addPublisher(n, node.id)
              })
            }
            if (response.names && response.names.length > 0) {
              return response.names[0]
            } else {
              return a
            }
          })
      })
    )
    console.log(authors + ' ' + domain)
  }

  return {
    id: node.id,
    authors: JSON.stringify(authors),
    manifestUrl: manifestData.manifestUrl || '',
  }
}

console.log('start')
// const response = await fetch("https://api.app.co/api/app-mining-apps")
// const apps = repsonse.json()
const appcoData = require('./appco.json')

Promise.all(
  appcoData.apps.map(async app => {
    return getAppMeta(app)
  })
).then(metaData => {
  console.log(metaData)
  mergeAppPublishers().then(publishers => {
    fs.writeFile(
      'src/data/app-publishers.json',
      JSON.stringify(publishers),
      err => {
        console.log(err)
      }
    )
    fs.writeFile(
      'src/data/app-meta-data.json',
      JSON.stringify(metaData),
      err => {
        console.log(err)
      }
    )
  })
})

function addPublisher(n, appcoid) {
  appPublishers.push({ username: n, apps: [appcoid] })
}

async function mergeAppPublishers() {
  mergedPublishers = {}
  appPublishers.forEach(publisher => {
    if (mergedPublishers.hasOwnProperty(publisher.username)) {
      mergedPublishers[publisher.username].apps = mergedPublishers[
        publisher.username
      ].apps.concat(publisher.apps)
    } else {
      mergedPublishers[publisher.username] = publisher
    }
  })
  return Promise.all(
    Object.values(mergedPublishers).map(publisher => {
      return fetchProfile(publisher)
    })
  )
}
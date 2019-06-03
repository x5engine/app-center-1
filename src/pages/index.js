import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO
          title="Home"
          keywords={[`app center`, `application`, `blockstack`]}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <p>App Mining Apps (May 2019)</p>
            <ul>
              <li>
                <Link to="/appco-foss/">Open Source apps</Link>
              </li>
              <li>
                <Link to="/appco-noss/">Closed Source apps</Link>
              </li>
              <li>
                <Link to="/appco-new/">New apps</Link>
              </li>
              <li>
                <Link to="/appco-out/">Retired apps</Link>
              </li>
              <li>
                <a href="https://docs.blockstack.org/develop/mining_intro.html">
                  read more about the App Mining program
                </a>
              </li>
            </ul>
          </div>
          <div
            style={{
              borderLeft: '#5DBCD2',
              borderLeftStyle: 'dashed',
              paddingLeft: '3rem',
            }}
          >
            <p>Your Apps</p>
            <ul>
              <li>
                <Link to="/app/">
                  <b>Manage apps</b>
                  <br />
                </Link>{' '}
                (requires login with Blockstack)
              </li>
              <li>
                <b>Manage comments</b>
                <br />
                (coming soon)
              </li>
              <li>
                <b>Manage rating</b>
                <br />
                (coming soon)
              </li>
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage

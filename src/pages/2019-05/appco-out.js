import { graphql } from 'gatsby'
import OutAppList from '../../components/outAppList'

export const query = graphql`
  query out201905 {
    lastmonth: allAppminingresultsXlsxApril2019 {
      totalCount
      edges {
        node {
          appcoid: App_ID
          name: App_name
          Final_Score
        }
      }
    }
    thismonth: allAppminingresultsXlsxMay2019 {
      edges {
        node {
          appcoid: App_Id
          name: App_Name
          Final_Score
        }
      }
    }
    allApps {
      edges {
        node {
          ...AppInformation
          ...AppIcon
        }
      }
    }
  }
`

export default OutAppList({ month: 'May 2019' })

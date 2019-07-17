import React from 'react'

import {
  Typography,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
} from '@material-ui/core'
import AppIcon from './appIcon'
import { StaticQuery, navigate } from 'gatsby'

export default ({ link, title, date, description, appcoId, apiComment }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          apps: allApps {
            edges {
              node {
                ...AppInformation
                ...AppIcon
              }
            }
          }
        }
      `}
      render={data => {
        let apps
        let app, actionName, appcoid
        if (apiComment) {
          description = apiComment.comment.toString()
          date = new Date(apiComment.createdAt).toLocaleDateString()
          apps = data.apps.edges.filter(
            e => e.node.website === apiComment.object
          )
          if (apps && apps.length === 1) {
            app = apps[0]
            title = app.node.name
            appcoid = app.node.appcoid
          } else {
            title = `Update for ${apiComment.object}`
          }
          link = apiComment.object
          actionName = 'Try now'
        } else {
          appcoid = parseInt(appcoId)
          apps = data.apps.edges.filter(e => e.node.appcoid === appcoid)
          if (apps && apps.length === 1) {
            app = apps[0]
          }
          actionName = 'Read more'
        }

        return (
          <Card style={{ margin: 4 }}>
            <CardHeader
              title={title}
              subheader={date}
              avatar={<AppIcon app={app} />}
            />
            <CardContent>
              <Typography>{description}</Typography>
            </CardContent>
            {(link || appcoid) && (
              <CardActions>
                {link && (
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => {
                      window.location.href = link
                    }}
                  >
                    {actionName}
                  </Button>
                )}
                {appcoid && (
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => {
                      navigate(`/appco/${appcoid}/comment`)
                    }}
                  >
                    Rate now
                  </Button>
                )}
              </CardActions>
            )}
          </Card>
        )
      }}
    />
  )
}

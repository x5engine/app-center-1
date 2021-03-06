import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'
import { Formik } from 'formik'
import { Button } from '@material-ui/core';

const StyledRoot = styled.div`
  flexgrow: 1;
`
const StyledCell = styled(Grid)`
  text-align: center;
`

const AppDetails = ({appDetails, onSubmitAppDetails}) => {

  const appDetailsForm = ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  }) => {
    const apps = []
    let i, app
    for (i in data.allApps.edges) {
      app = data.allApps.edges[i].node
      apps.push(
        <div key={i}>
          <input
            type="checkbox"
            onChange={handleChange}
            onBlur={handleBlur}
            checked={values[`app-${app.appcoid}`] || false}
            id={app.appcoid}
            name={`app-${app.appcoid}`}
          />
          <label htmlFor={app.appcoid}>{app.name}</label>
        </div>
      )
    }

    return (
      <form onSubmit={handleSubmit}>
        {apps}
        <Button variant="outlined" type="submit" disabled={isSubmitting}>
          Save
        </Button>
      </form>
    )
  }
  return (
    <>
      <h1>Your app(s)</h1>
      <StyledRoot>
        <Formik
          initialValues={myApps}
          validate={values => {
            let errors = {}
            return errors
          }}
          onSubmit={(values, { setSubmitting }) => {
            onSubmitApps(values).finally(()=> {
              setSubmitting(false)
            })
          }}
        >
          {appSelectionForm}
        </Formik>
      </StyledRoot>
      <hr />
    </>
  )
}

export default AppSelector

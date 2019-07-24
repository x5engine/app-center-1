import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Search from './search'
import { Container, Typography, Grid } from '@material-ui/core'
import Img from 'gatsby-image'
import { withStyles } from '@material-ui/styles'

const styles = theme => ({
  header: {
    paddingTop: theme.spacing(1),
    color: theme.palette.common.contrastText,
    backgroundColor: theme.palette.primary.main,
  },
  title: {
    color: theme.palette.common.white,
    textDecoration: 'none',
  },
  titleIcon: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
  },
})

const Header = ({
  siteTitle,
  siteSearchIndex,
  hideSearch,
  fixedIcon,
  classes,
}) => (
  <Container className={classes.header}>
    <Grid container alignContent="center" spacing={2}>
      <Grid item xs={1} align="center">
        <Link to="/" className={classes.titleIcon}>
          <Img fixed={fixedIcon} alt="icon" />
        </Link>
      </Grid>
      <Grid item xs={11} container>
        <Grid item xs={12}>
          <Typography variant="h3">
            <Link to="/" className={classes.title}>
              {siteTitle}
            </Link>
          </Typography>
        </Grid>
        {!hideSearch && (
          <>
            <Grid item xs={12}>
              <Search searchIndex={siteSearchIndex.index} />
            </Grid>
          </>
        )}
      </Grid>
    </Grid>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
  siteSearchIndex: PropTypes.object,
  hideSearch: PropTypes.bool,
  fixedIcon: PropTypes.object,
  classes: PropTypes.object.isRequired,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default withStyles(styles)(Header)

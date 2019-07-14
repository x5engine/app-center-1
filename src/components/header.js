import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Search from './search'
import BlockstackProfile from './blockstackProfile'
import { Container, Typography, Grid } from '@material-ui/core'
import Img from 'gatsby-image'
import { withStyles } from '@material-ui/styles'

const styles = theme => ({
  header: {
    marginTop: theme.spacing(1),
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
  },
})

const Header = ({
  siteTitle,
  siteDescription,
  siteSearchIndex,
  hideSearch,
  fixedIcon,
  classes,
}) => (
  <Container className={classes.header}>
    <Grid container alignItems="center">
      <Grid item xs={1}>
        <Img fixed={fixedIcon} alt="icon" />
      </Grid>
      <Grid item sm={7} xs={11}>
        <Typography variant="h3">
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
            {siteTitle}
          </Link>
        </Typography>
      </Grid>
      <Grid item sm={4} xs={12} alignItems="center">
        <BlockstackProfile />
      </Grid>
      <Grid item xs={1} />
      <Grid item xs={11}>
        <Typography variant="body2">{siteDescription}</Typography>
      </Grid>
      {!hideSearch && (
        <>
          <Grid item xs={1} />
          <Grid item xs={11}>
            <Search searchIndex={siteSearchIndex.index} />
          </Grid>
        </>
      )}
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

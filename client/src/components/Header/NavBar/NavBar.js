import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Payments from '../../Payments';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(3),
    color: 'white',
    textDecoration: 'none',
    fontSize: '24px',
    fontWeight: 'bold'
  },
  credits: {
    marginRight: theme.spacing(3)
  }
}));

const NavBar = ({ auth }) => {
  const classes = useStyles();

  function renderContent() {
    switch (auth) {
      case null:
        return;
      case false:
        return (
          <Button color="inherit" href="/auth/google">
            Se connecter
          </Button>
        );
      default:
        console.log(auth);
        return (
          <Fragment>
            <Typography className={classes.credits}>
              Crédits: {auth.credits}
            </Typography>
            <Payments />
            <Button color="inherit" href="/api/logout">
              Se déconnecter
            </Button>
          </Fragment>
        );
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link
            variant="h2"
            className={classes.title}
            to={auth ? '/dashboard' : '/'}>
            Usurvey
          </Link>
          {renderContent()}
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(NavBar);
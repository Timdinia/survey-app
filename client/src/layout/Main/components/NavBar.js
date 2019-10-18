import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Payments from '../../../components/Payments';
import { Typography, Tooltip } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  credits: {
    marginRight: theme.spacing(2)
  },
  avatar: {
    marginLeft: theme.spacing(2)
  },
  button: {
    marginLeft: theme.spacing(2)
  },
  iconButton: {
    marginRight: theme.spacing(1)
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
            <Tooltip title="Crédits disponibles">
              <Typography className={classes.credits}>
                Crédits: {auth.credits}
              </Typography>
            </Tooltip>
            <Payments />
            <Tooltip title="Se déconnecter">
              <Button
                color="inherit"
                href="/api/logout"
                className={classes.button}>
                <NotificationsIcon className={classes.iconButton} />
                Se déconnecter
              </Button>
            </Tooltip>
            <Tooltip title="Notifications">
              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Tooltip>
            <Avatar className={classes.avatar}>H</Avatar>
          </Fragment>
        );
    }
  }

  return (
    <div>
      <Toolbar>{renderContent()}</Toolbar>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(NavBar);

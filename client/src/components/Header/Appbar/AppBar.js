import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function ButtonAppBar(props) {
    const classes = useStyles();
    console.log('props: ' + props);
    console.log('props.auth: ' + props.auth);
    function renderContent() {
        switch (props.auth) {
            case null:
                // still deciding
                return;
            case false:
                // logged out
                return (
                    <Button color="inherit" href="/auth/google">
                        Se connecter
                    </Button>
                );
            default:
                // logged in
                return (
                    <Button color="inherit" href="/api/logout">
                        Se déconnecter
                    </Button>
                );
        }
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Link
                        variant="h6"
                        className={classes.title}
                        to={props.auth ? '/surveys' : '/'}
                    >
                        Usurvey
                    </Link>
                    {renderContent()}
                </Toolbar>
            </AppBar>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        auth: state.auth,
    };
}

export default connect(mapStateToProps)(ButtonAppBar);

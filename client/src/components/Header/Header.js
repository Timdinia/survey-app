import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from './Appbar/AppBar';

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <AppBar />
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth,
    };
}

export default connect(mapStateToProps)(Header);

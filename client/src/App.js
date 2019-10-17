import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';
import Routes from './Routes';

import './assets/scss/index.scss';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <Router>
        <Routes />
      </Router>
    );
  }
}

export default connect(
  null,
  actions
)(App);

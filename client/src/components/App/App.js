import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import './App.scss';
import Header from '../Header';
import Landing from '../Landing';
import Dashboard from '../Dashboard';
import SurveyNew from '../SurveyNew';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <Fragment>
        <Router>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
        </Router>
      </Fragment>
    );
  }
}

export default connect(
  null,
  actions
)(App);

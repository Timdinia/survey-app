import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import './App.scss';
import Header from '../Header';
import Landing from '../Landing';
import Dashbord from '../Dashbord';
import SurveyNew from '../SurveyNew';

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <React.Fragment>
                <Router>
                    <Header />
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/dashbord" component={Dashbord} />
                    <Route path="/surveys/new" component={SurveyNew} />
                </Router>
            </React.Fragment>
        );
    }
}

export default connect(
    null,
    actions
)(App);

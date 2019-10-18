import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import PublicRoute from './components/PublicRoute';
import MainLayout from './layout/Main';

import { Dashboard, Landing, Surveys, SurveyNew, NotFound } from './views';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <PublicRoute
        exact
        path="/dashboard"
        component={Dashboard}
        layout={MainLayout}
      />
      <PublicRoute
        exact
        path="/surveys"
        component={Surveys}
        layout={MainLayout}
      />
      <PublicRoute
        exact
        path="/surveys/new"
        component={SurveyNew}
        layout={MainLayout}
      />

      <PublicRoute
        component={NotFound}
        exact
        layout={MainLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;

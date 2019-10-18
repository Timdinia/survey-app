import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Grid, Typography } from '@material-ui/core';
import { validate } from './validate';
import { renderTextField } from './renderTextField';

const SurveyForm = props => {
  return (
    <main>
      <form onSubmit={props.handleSubmit(values => console.log(values))}>
        <Typography variant="h6" gutterBottom>
          Merci de saisir tout les champs
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Field
              name="title"
              label="Survey Title"
              type="text"
              placeholder="Title"
              component={renderTextField}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              name="subject"
              label="Subject Line"
              type="text"
              placeholder="Subject"
              component={renderTextField}
            />
          </Grid>
          <Grid item xs={12}>
            <Field
              name="body"
              label="Email Body"
              type="text"
              placeholder="Body"
              component={renderTextField}
            />
          </Grid>
          <Grid item xs={12}>
            <Field
              name="emails"
              label="Emails List"
              type="email"
              placeholder="Emails"
              component={renderTextField}
            />
          </Grid>
        </Grid>
      </form>
    </main>
  );
};

export default reduxForm({
  form: 'surveyForm',
  validate
})(SurveyForm);

import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Grid } from '@material-ui/core';
import { validate } from './validate';
import { renderTextField } from './renderTextField';

const SurveyForm = () => {
  return (
    <main>
      <form>
        <h4>Merci de remplir le formulaire</h4>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Field
              name="title"
              label="Titre"
              type="text"
              placeholder="Titre"
              component={renderTextField}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              name="subject"
              label="Sujet"
              type="text"
              placeholder="Sujet"
              component={renderTextField}
            />
          </Grid>
          <Grid item xs={12}>
            <Field
              name="body"
              label="Corps du sondage (question)"
              type="text"
              placeholder="Corps"
              component={renderTextField}
            />
          </Grid>
          <Grid item xs={12}>
            <Field
              name="recipients"
              label="Destinataires"
              type="email"
              placeholder="Destinataires"
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
  validate,
  destroyOnUnmount: false
})(SurveyForm);

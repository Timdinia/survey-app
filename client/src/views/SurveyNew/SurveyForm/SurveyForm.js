import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Typography } from '@material-ui/core';
import { validate } from './validate';
import { renderTextField } from './renderTextField';

const useStyles = makeStyles(theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginTop: '100px',
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1)
  }
}));

const SurveyForm = props => {
  const classes = useStyles();

  return (
    <main className={classes.layout}>
      <form onSubmit={props.handleSubmit(values => console.log(values))}>
        <Typography variant="h6" gutterBottom>
          New survey
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
          <Button
            className={classes.button}
            type="submit"
            label="submit"
            color="primary"
            fullWidth
            variant="contained">
            Submit
          </Button>
        </Grid>
      </form>
    </main>
  );
};

export default reduxForm({
  form: 'surveyForm',
  validate
})(SurveyForm);

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const SurveyFormReview = ({ formValues }) => {
  const { title, subject, body, recipients } = formValues;

  const classes = useStyles();

  return (
    <React.Fragment>
      <h4>Confirmez le contenu du sondage</h4>
      <div className={classes.container}>
        <label>Titre:</label>
        <div className={classes.content}>{title ? title : ''}</div>
      </div>
      <div className={classes.container}>
        <label>Sujet:</label>
        <div>{subject ? subject : ''}</div>
      </div>
      <div className={classes.container}>
        <label>Corps:</label>
        <div>{body ? body : ''}</div>
      </div>
      <div className={classes.container}>
        <label>Liste d'envoi:</label>
        <div>{recipients ? recipients : ''}</div>
      </div>
    </React.Fragment>
  );
};

SurveyFormReview.defaultProps = {
  formValues: {}
};

SurveyFormReview.propTypes = {
  formValues: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  formValues: state.form.surveyForm.values
});

export default connect(mapStateToProps)(SurveyFormReview);

import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';
import SurveyFormSend from './SurveyFormSend';
import useStyles from './styles';

const steps = ['Création', 'Confirmation', 'Envoi'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <SurveyForm />;
    case 1:
      return <SurveyFormReview />;
    case 2:
      return <SurveyFormSend />;
    default:
      throw new Error('Unknown step');
  }
}

const SurveyNew = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Nouveau sondage
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Sondage envoyé !
                </Typography>
                <Typography variant="subtitle1">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Ratione nemo officia ullam, voluptatem quasi expedita
                  quibusdam, blanditiis dicta laboriosam tempore similique
                  perspiciatis cupiditate cum eius.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Retour
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}>
                    {activeStep === steps.length - 1 ? 'Envoyer' : 'Suivant'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
};

export default SurveyNew;

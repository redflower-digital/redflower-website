import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import {Meet} from "../public/Icons/Meet";
import {ContactLogo} from "../public/Icons/ContactLogo";
import {Work} from "../public/Icons/Work";
import {End} from "../public/Icons/End";
import ContactStep from '../Components/Stepper/ContactStep';
import Visit from './Stepper/Visit';
import Intervention from './Stepper/Intervention';
import JobEnd from './Stepper/JobEnd';
import Bill from './Stepper/Bill';
import stepperStyles from '../styles/Stepper.module.css';


const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient( to top, #ff0000 0%, #ffb199 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient( to top, #ff0000 0%, #ffb199 100%)',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#6b6a6a',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#6b6a6a',
    zIndex: 1,
    fill: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    background: 'linear-gradient(45deg, #f88787 20%, #FF0000 95%)',
    boxShadow:'rgb(192, 5, 5) 0px 2px 5px',
  },
  completed: {
    background: 'linear-gradient(45deg, #f88787 20%, #FF0000 95%)',
    boxShadow:'rgb(192, 5, 5) 0px 2px 5px',
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <ContactLogo />,
    2: <Meet />,
    3: <Work />,
    4: <End />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '950px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  button1: {
    marginRight: theme.spacing(1)
  },
  button: {
    background: 'linear-gradient(45deg, #f88787 20%, #FF0000 95%)',
    boxShadow:'rgb(192, 5, 5) 0px 2px 10px',
    marginRight: theme.spacing(1),
    color: '#fff',
    maxWidth: '150px',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  }
}));

function getSteps() {
  return ['Prise de contact', 'Rendez vous', 'Intervention', 'Fin de chantier'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return(
        <ContactStep />
      );
    case 1:
      return(
        <Visit />
      );
    case 2:
      return(
        <Intervention />
      );
    case 3:
      return(
        <JobEnd />
      );
    default:
      return 'étape inconnue';
  }
}

export default function CustomizedSteppers() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <div className={classes.container} >
              <Button onClick={handleReset} className={classes.button}>
                Première étape
              </Button>
            </div>
            <div className={stepperStyles.submenuContent}>
              <Bill />
            </div>
          </div>
        ) : (
          <div>
            <div className={classes.buttonContainer}>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button1}>
                Précédente
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Facturation' : 'Suivante'}
              </Button>
            </div>
            <div className={stepperStyles.submenuContent}>
              {getStepContent(activeStep)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

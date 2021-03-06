import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Fade from '@material-ui/core/Fade';
import Tooltip from '@material-ui/core/Tooltip';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
  
import Typography from '@material-ui/core/Typography';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Dialog from '@material-ui/core/Dialog';
import logo1 from '../../Resource/Chelp1.png';
import logo2 from '../../Resource/Chelp2.png';
import logo3 from '../../Resource/Chelp3.png';
import Grid from '@material-ui/core/Grid';
import {color} from '../../scenes/mainPages/Correctness';


  const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    card: {
      maxWidth: 580,
      minHeight: 540,

    },

    avatar: {
      backgroundColor: color,
    },
  }));
  
  

  

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <CardActionArea >
            <img src={logo1} alt="logo1" width='587' heigh='300'  />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                This a entry for each sorting algorithm.
                Choose one and click it to enter next Page.
                A progress bar is at the bottom, it shows how much you have learnt.      
              </Typography>                
            </CardContent>
          </CardActionArea>

        );
      case 1:
        return (
          <CardActionArea >
            <img src={logo2} alt="logo2" width='587' heigh='300'  />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Left one is a setting button, click  it to change settings.
                Right one is a help button, click it to see explanations for each component.          
              </Typography>             
            </CardContent>
          </CardActionArea>
        );
      default:
        return 'Unknown step';
    }
  }


 
  export  default function CHelp() {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
 

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };


    const [activeStep, setActiveStep] = React.useState(0);  

    const steps = 3;
    
    const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);     
    };

    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const handleReset = () => {
      setActiveStep(0);
    };

    const card =(
      <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} className = {classes.dialog}>
        <Fade in={open}>
          <Card className={classes.card}>
            <CardHeader
              avatar={
                <IconButton aria-label="close"  onClick={handleClose}>
                <HighlightOffIcon  style={{ color: color, fontSize: 30  }} />
              </IconButton>
              }
            />
              {activeStep === steps - 1 ? (
              <div>
                <CardActionArea  >               
                  <img src={logo3} alt="logo3" width='587' heigh='300'  />
                  <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                      This a choice menu. Menu contains Tutorial, Procedure, Efficiency, Correctness and Exercise.
                      Choose a module and click it.   
                    </Typography>                
                  </CardContent>
                  
                </CardActionArea>
                <CardActions>
                  <Button onClick={handleReset} variant="outlined" style={{ color: color}}>Reset</Button>
                </CardActions>
              </div>
              ) : (
               
                  <div>
                    {getStepContent(activeStep)}                    
                      <CardActions>
                      <Grid
                          container
                          justify="space-between"
                        >
                          <Grid key='0' item>
                          <Button disabled={activeStep === 0} onClick={handleBack} variant="outlined" style={{ color: color}}>Last Tip</Button>
                          </Grid>
                          <Grid key='1' item>
                          <Button variant="outlined" onClick={handleNext} style={{ color: color}}>Next Tip</Button>

                          </Grid>

                        </Grid>
                      </CardActions>
                  </div>
                )}
          </Card> 
        </Fade>
      </Dialog>   
    );

    return(
      <div>
        <Tooltip title="tutorial" placement="bottom" arrow>
          <IconButton aria-label="help"  onClick={handleClickOpen}>
            <HelpOutlineOutlinedIcon />
          </IconButton>
        </Tooltip>
        {card}     
      </div>
    )
  }


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Fade from '@material-ui/core/Fade';
import Tooltip from '@material-ui/core/Tooltip';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';
import logo0 from '../../Resource/inputExp0.png';
import logo1 from '../../Resource/inputExp1.png';
import logo2 from '../../Resource/inputExp2.jpg';
import logo3 from '../../Resource/inputExp3.png';
import logo4 from '../../Resource/inputExp4.jpg';
import {color} from '../../scenes/mainPages/Correctness';

  const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    card: {
      maxWidth: 580,
      minHeight: 550,
    },
    avatar: {
      backgroundColor: color,
    },
    icon:{
        color: "#696969"
    },
    actionArea:{
      maxWidth: 395,
      maxHeight: 580,
    },
    button:{
      display: "flex",
        "& > *": {
            marginLeft: theme.spacing(2),
        },
        "& > * + *": {
            marginLeft: theme.spacing(45),
        },
     },
     resetbutton:{
     
        "& > *": {
           marginLeft: theme.spacing(2),
            marginTop: theme.spacing(2.5),
        },
     }
  }));
  
  

  

  function getStepContent(step) {
    // const classes = useStyles();
    switch (step) {
      case 0:
        return (
          <CardActionArea  width='395px' height='580px'>
            {/* <Typography variant="body2" color="textSecondary" component="p">
                  The algorithm in this page is called "What day is it today?"  
            </Typography> */}
            <img src={logo0} alt="logo0" width='587' heigh='300'  />
            {/* <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                  given a integer from 1-7, output the week name of that day    
              </Typography>                
            </CardContent> */}
          </CardActionArea>

        );
      case 1:
        return (
          <CardActionArea  width='395px' height='580px'>
            <img src={logo1} alt="logo1"  width='587' heigh='300' />
            {/* <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Left one is a setting button, click  it to change settings.
                Right one is a help button, click it to see explanations for each component.          
              </Typography>             
            </CardContent> */}
          </CardActionArea>
        );
      case 2:
      return (
        <CardActionArea  width='395px' height='580px'>
          <img src={logo2} alt="logo2"  width='587' heigh='300' />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              For this page, the algorithm is called "what day is it today?". By inputting a number from 1 to 7, the algorithm
              will output the week name from Sunday to Saturday.          
            </Typography>             
          </CardContent>
        </CardActionArea>
      );
      case 3:
        return (
          <CardActionArea  width='395px' height='580px'>
            <img src={logo3} alt="logo3"   width='587' heigh='300'/>
            
          </CardActionArea>
        );
      default:
        return 'Unknown step';
    }
  }


 
  export  default function Explanation() {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
 

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const [activeStep, setActiveStep] = React.useState(0);  

    const steps = 5;
    
    const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);     
    };

    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const handleReset = () => {
      setActiveStep(0);
    };

    const card = (
      <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
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
                  <div>
                <CardActionArea  width='395px' height='580px'>
                  <img src={logo4} alt="logo4"  width='587' heigh='300' />
                  <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                      For this page, the legal input for this algorithm is the positive interger up to 7.it can be 1, 2, 3, 4, 5, 6, 7.
                      while the illegal input will be any characters expects the positive interger up to 7.     
                    </Typography>             
                  </CardContent>
                </CardActionArea>
                
                 
                 
                
               
              </div>
              <div className = {classes.resetbutton}>
              <Button onClick={handleReset} variant="outlined" style={{ color: color}}>Reset</Button>
               </div>
                </div>
              
              ) : (
                <div>
                  <div>
                    {getStepContent(activeStep)}                    
                    
                      
                        

                     

                  </div>
                  <div className = {classes.button}>
                      
                  <Button disabled={activeStep === 0} onClick={handleBack} variant="outlined" style={{ color: color}}>Last Tip</Button>
                  
                  
                  <Button variant="outlined" onClick={handleNext} style={{ color: color}}>Next Tip</Button>

                  
              </div>
                </div>
                  
                )}
          </Card> 
        </Fade>
      </Dialog>   

      

    );

  
    return(
      <div style={{height:"48px"}}>
        <Tooltip title="tutorial" placement="bottom" arrow>
          <IconButton aria-label="help"  onClick={handleClickOpen}>
            <HelpOutlineOutlinedIcon className = {classes.icon}/>   
          </IconButton>
        </Tooltip>
        {card}
      </div>
    )
  }


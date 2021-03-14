/*
    Author: Yijie Lu
*/
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import Backdrop from '@material-ui/core/Backdrop';


  const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#212121",
    },

    card: {
      maxWidth: 580,
      minHeight: 540,
      borderRadius:"30px",
    },

    avatar: {
      "& > *": {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(62.5),
      },
    },

    button:{
      display: "flex",
        "& > *": {
            marginBottom: theme.spacing(2.5),
            marginLeft: theme.spacing(3),
        },
        "& > * + *": {
            marginLeft: theme.spacing(55),
        },
     },

     resetbutton:{    
        "& > *": {
           marginRight: theme.spacing(61),
            marginTop: theme.spacing(0),
        },
     },
  }));
  
  

  

  function getStepContent(step, props) {
    const{logo1, logo2, logo3, color} = props;
    switch (step) {
      case 0:
        return (
          <CardActionArea style={{width:'580px', height:'403px', marginBottom:"15px"}} >
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
          <CardActionArea style={{width:'580px', height:'403px', marginBottom:"15px"}} >
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


 
  export  default function CHelp(props) {
    const{logo1, logo2, logo3, color} = props;

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
      <Backdrop className={classes.backdrop} open={open} >
        <Card className={classes.card}>
          <div className = {classes.avatar}>
              <IconButton aria-label="close"  onClick={handleClose} >
                <HighlightOffIcon style={{ color: color, opacity: 0.8, fontSize: 40  } } />
              </IconButton>
          </div>
            {activeStep === steps - 1 ? (
            <div>
              <div>
                <CardActionArea  style={{width:'580px', height:'403px', marginBottom:"15px"}}>               
                  <img src={logo3} alt="logo3" width='587' heigh='300'  />
                  <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                      This a choice menu. Menu contains Tutorial, Procedure, Efficiency, Correctness and Exercise.
                      Choose a module and click it.   
                    </Typography>                
                  </CardContent>           
                </CardActionArea>
              </div>
              <div className = {classes.button}>
                <IconButton  onClick={handleReset} style={{ backgroundColor: color, opacity:0.5, }} size='small'><RotateLeftIcon style={{ color: 'white', fontSize:'40px'}}/></IconButton>          
              </div>
            </div>
            ) : (       
              <div>
                <div>
                  {getStepContent(activeStep, props)}                    
                </div>
                <div className = {classes.button}>               
                  <IconButton  disabled={activeStep === 0} onClick={handleBack}  style={{ backgroundColor: color, opacity:0.5, }} size='small'><ChevronLeftIcon style={{ color: 'white', fontSize:'40px'}}/></IconButton>           
                  <IconButton  onClick={handleNext} style={{ backgroundColor: color, opacity:0.5, }} size='small'><ChevronRightIcon style={{ color: 'white', fontSize:'40px'}}/></IconButton>             
                </div>
            </div>
              )}
          </Card> 
        </Backdrop>   
    );

    return(
      <div>
        <Tooltip title="tutorial" placement="bottom" arrow>
          <IconButton aria-label="help"  onClick={handleClickOpen} style={{ backgroundColor: "grey", opacity:0.5, }}>
            <HelpOutlineOutlinedIcon />
          </IconButton>
        </Tooltip>
        {card}     
      </div>
    )
  }


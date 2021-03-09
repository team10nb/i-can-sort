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
import logo0 from '../../Resource/inputExp0.png';
import logo1 from '../../Resource/inputExp1.png';
import logo2 from '../../Resource/inputExp2.jpg';
import logo3 from '../../Resource/inputExp3.png';
import logo4 from '../../Resource/inputExp4.jpg';
import {color} from '../../scenes/mainPages/Correctness';

  const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#212121",
    },
    card: {
      maxWidth: 580,
      minHeight: 550,
      borderRadius:"30px", 
    },
    avatar: {
      "& > *": {
        marginTop: theme.spacing(1),
        marginLeft: theme.spacing(1),
      },
    },
    icon:{
        color: "#696969"
    },
    actionArea:{
      maxWidth: 395,
      maxHeight: 570,
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
     resetButton:{    
      "& > *": {
        marginBottom: theme.spacing(1),
        marginLeft: theme.spacing(3),
    },
     }
  }));
  
  

  

  function getStepContent(step) {
    // const classes = useStyles();
    switch (step) {
      case 0:
        return (
          <CardActionArea  width='395px' height='580px'>
            <img src={logo0} alt="logo0" width='587' heigh='300'  />
          </CardActionArea>

        );
      case 1:
        return (
          <CardActionArea  width='395px' height='580px'>
            <img src={logo1} alt="logo1"  width='587' heigh='300' />

          </CardActionArea>
        );
      case 2:
      return (
        <CardActionArea  width='395px' height='580px'>
          <img src={logo2} alt="logo2"  width='587' heigh='300' />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              By inputting a number from 1 to 7, the algorithm
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
      // <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} classes = {classes.dialog}>
      //   <Fade in={open}>
      <Backdrop className={classes.backdrop} open={open} >
          <Card className={classes.card}>          
            <div className = {classes.avatar}>
                <IconButton aria-label="close"  onClick={handleClose} >
                  <HighlightOffIcon  style={{ color: color, opacity: 0.8, fontSize: 40  } } />
                </IconButton>
            </div> 
              {activeStep === steps - 1 ? (
                <div>
                  <div>
                <CardActionArea  width='395px' height='580px'>
                  <img src={logo4} alt="logo4"  width='587' heigh='300' />
                  <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                      For this page, the input set of this algorithm is positive intergers 1 to 7.&nbsp;Any other are illegal. This algorithm meets correctness since it can generate correct week name for any legal input.     
                    </Typography>             
                  </CardContent>
                </CardActionArea>    
              </div>
              <div className = {classes.resetButton}>
                <IconButton  onClick={handleReset} style={{ backgroundColor: color, opacity:0.5, }} size='small'><RotateLeftIcon style={{ color: 'white', fontSize:'40px'}}/></IconButton>          
              </div>
                </div>              
              ) : (
                <div>
                  <div>
                    {getStepContent(activeStep)}                    
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


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
      marginLeft:"-500px",
      marginTop:"-155px",
      height:"1000px",
      width:"2000px",
    },

    card: {
      maxWidth: 580,
      height: 570,
      borderRadius:"30px",
    },

    // avatar: {
    //   "& > *": {
    //     marginTop: theme.spacing(1),
    //     marginRight: theme.spacing(100),
    //   },
    // },
    icon:{
      color: "#696969"
    },
    actionArea:{
      minWidth: 395,
      minHeight: 570,
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
  
  

  

  function getStepContent(step,props) {
    const {color, logo0, logo1, logo2, logo3, logo4, logoFianl, stepNumber, content0, content1,
            content2, content3, content4, content5} = props;
    if (stepNumber === 5){
        switch (step) {
            case 0:
              return (
                <CardActionArea style={{ width: "580px", height: "415px", marginBottom:"15px" }}>
                    <img src={logo0} alt="logo0" width="587" heigh="300" />
                </CardActionArea>
      
              );
            case 1:
              return (
                <CardActionArea style={{ width: "580px", height: "415px", marginBottom:"15px" }}>
                    <img src={logo1} alt="logo1" width="587" heigh="300" />
                </CardActionArea>
              );
            case 2:
            return (
                <CardActionArea style={{ width: "580px", height: "415px", marginBottom:"15px" }}>
                <img src={logo2} alt="logo2" width="587" heigh="300" />
                    <CardContent>
                      {content2}                         
                    </CardContent>
                </CardActionArea>
            );
            case 3:
              return (
                <CardActionArea style={{ width: "580px", height: "415px", marginBottom:"15px" }}>
                    <img src={logo3} alt="logo3" width="587" heigh="300" />
                </CardActionArea>
              );
            default:
              return 'Unknown step';
          }

    }else if (stepNumber === 3){
        switch (step) {
            case 0:
              return (
                <CardActionArea  style={{ height:'415px', marginBottom:"15px"}}>
                  <img src={logo0} alt="logo0" width='587px'  />
                  <CardContent >              
                      {content0}                           
                  </CardContent>
                </CardActionArea>
      
              );
            case 1:
              return (
                <CardActionArea style={{ width: "580px", height: "415px", marginBottom:"15px" }}>
                  <img src={logo1} alt="logo1"  width='587px' />
                  <CardContent >   
                      {content1}                              
                  </CardContent>
                </CardActionArea>
              );
            default:
              return 'Unknown step';
          }
    }else if (stepNumber === 2){
      switch (step) {
        case 0:
          return (
            <CardActionArea  style={{ height:'415px', marginBottom:"15px"}}>
              <img src={logo0} alt="logo0" width='587px'  />
            </CardActionArea>
  
          );
        default:
          return 'Unknown step';
      }

    }
    
  }


 
  export  default function ExplanationFrame(props) {
    const {color, logo0, logo1, logoFinal, stepNumber,content0,content1,contentFinal,picHeight,contentMarginBottom,contentMarginTop,avatarMarginLeft,avatarMarginTop} = props;

    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
 
    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const [activeStep, setActiveStep] = React.useState(0);  

    const steps = stepNumber;
    
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
            <div style={{marginLeft:avatarMarginLeft, marginTop:avatarMarginTop}}>
                <IconButton aria-label="close"  onClick={handleClose} >
                  <HighlightOffIcon  style={{ color: color, opacity: 0.8, fontSize: 40  } } />
                </IconButton>
            </div> 
              {activeStep === steps - 1 ? (
                <div>
                  <div>
                <CardActionArea  style={{ height:picHeight, marginBottom:"15px"}}>
                  <img src={logoFinal} alt="logoFinal"  width= '587px' />
                  <CardContent style={{marginBottom:contentMarginBottom, marginTop:contentMarginTop}}>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {contentFinal} 
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
                    {getStepContent(activeStep,props)}                    
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


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HomeIcon from '@material-ui/icons/Home';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {color} from '../../mainPages/Correctness';
import InputDef from './Tutorial/Input_Def';
import Input from '../../../components/InputTutorial/InputTutorial';



const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({

    appBar1: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
          },
        height:45,
        backgroundColor:color,       
    },

    appBar2: {      
        top: 'auto',
        bottom: 0,
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
          },
    },

    div:{
        display:"flex",
        alignItems:"center",       
        '& > *': {
          margin: theme.spacing(0),
        },
    },

    // stepContent:{
    //     marginTop:630,
    //     marginLeft:250,
    // },

    icon:{
        marginRight: theme.spacing(2),
        width: 100,
        height: 45,
    },



    chip:{
        position: 'relative',
        marginRight: -50,
        marginLeft: 120,
        minWidth: 400,
        justifyContent:"center",  
        fontWeight: "bold",      
        color: color,
        backgroundColor: "#F8F8F8",
    },

    stepper:{        
        alignItems:"bottom",
        fontSize: 16,
        fontWeight: "bold",        
        color: color,
        backgroundColor: "#F0F0F0",     
    },

    content:{
        display:"flex",
        alignItems:"center",          
        width: 1020,
        height: 560,
    },

    drawer: {
        width: drawerWidth,   
        flexShrink: 0,
        height:620
    },
    
    drawerPaper: {
        width: drawerWidth,    
    },

    drawerContainer: {
        overflow: 'auto',   
    },

    listHeader:{
        height:30,       
        color: color,
    },

    listItem:{
        height:40,
    },

    hightlightItem:{
        height:40,
        backgroundColor: color,
        color: "#F8F8F8",    
        "&:hover": {backgroundColor:color},
    },

    
   
  }));

  function getSteps() {
    return ['Input', 
            'Termination', 
            'Comparison', 
            'Partial Correctness',
            'Total Correctness', 
            'Conclusion' 
    ];
  }

  function getStepContent(activeStep) {
      switch (activeStep) {
        case 0:
            return(
                <Input />
            );
        case 1:
            return(
                <InputDef />
            );
        default:
            break;
      }
  }

  
    export default function CorrectnessTutorial(props) {
    const classes = useStyles();

    

    const [activeStep, setActiveStep] = React.useState(0);

    const maxSteps = getSteps().length;

    const step = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleChange =(index) => {
        setActiveStep(index);
    };
   
    const handleClick = () => {
        //return to procedure main page with the progress
        props.history.push({pathname: '/CorrectnessMainPage'});
    };

    

    return (
        <div>
            <AppBar className={classes.appBar1} >
                <div className ={classes.div}>
                <Button className={classes.icon} onClick={handleClick}>
                    <HomeIcon style={{ fontSize: 30, color: "#FFFFFF"}} />
                </Button>
                <Chip className={classes.chip} label= {step[activeStep]} />  
                </div>                          
            </AppBar>
                {/* <div className = {classes.stepContent}>
                   {getStepContent(activeStep)}    
                </div>    */}
     
                <main className={classes.content}>
                <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                paper: classes.drawerPaper,
                }}
                >
                    <div className={classes.drawerContainer}>
                        <List>
                            <ListItem  className = {classes.listHeader}>                
                            <ListItemText primary= 'Catalogue' />
                            </ListItem>
                        </List>
                        <Divider />
                        <List >
                            <ListItem  className = {classes.listItem}>                          
                            <ListItemText primary= 'Input' />
                            </ListItem>
                            {['Input'].map((text, index) => (
                                
                            index === activeStep 
                                ?<ListItem className = {classes.hightlightItem} button key={text} onClick={() => handleChange(index)}>
                                    <ListItemIcon><ChevronRightIcon/></ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                                :<ListItem className = {classes. listItem} button key={text} onClick={() => handleChange(index)}>
                                    <ListItemIcon><ChevronRightIcon/></ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem> 
                            ))}                  
                        </List>
                        <Divider />
                        <List>
                            <ListItem className = {classes.listItem}>             
                            <ListItemText primary= 'Termination' />
                            </ListItem>
                            {['Termination'].map((text, index) => (
                            index + 1 === activeStep
                                ?<ListItem  className = {classes.hightlightItem} button key={text} onClick={() => handleChange(index + 1)}>
                                    <ListItemIcon><ChevronRightIcon/></ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                                :<ListItem className = {classes. listItem} button key={text} onClick={() => handleChange(index + 1)}>
                                    <ListItemIcon><ChevronRightIcon/></ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem> 
                            ))}
                        </List>

                        <Divider />
                        <List>
                            <ListItem className = {classes.listItem}>                           
                            <ListItemText primary= 'Correctness' />
                            </ListItem>
                            {['Comparison' , 'Partial Correctness', 'Total Correctness', 'Conclusion' ].map((text, index) => (
                            index + 2 === activeStep
                            ?<ListItem  className = {classes.hightlightItem} button key={text} onClick={() => handleChange(index + 2)}>
                                <ListItemIcon><ChevronRightIcon/></ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                            :<ListItem className = {classes. listItem} button key={text} onClick={() => handleChange(index + 2)}
                                ><ListItemIcon><ChevronRightIcon/></ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem> 
                            ))}
                        </List>
                   </div>
                </Drawer>  
                {getStepContent(activeStep)}    
            </main>   
                       
                
            
            <AppBar  className = {classes.appBar2}>
                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    className = {classes.stepper}
                    variant="text"                  
                    activeStep={activeStep}
                    nextButton={
                    <Button size="small" variant="contained" style={{ backgroundColor: color, color: "#FFFFFF"}} onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                        Next                       
                    </Button>
                    }
                    middlebutton = {<MoreHorizIcon color={color} />}
                    backButton={
                    <Button size="small" variant="contained" style={{ backgroundColor: color, color: "#FFFFFF"}} onClick={handleBack} disabled={activeStep === 0}>
                        Back
                    </Button>
                    }
                />
            </AppBar>
        </div>
       
       
    );
}


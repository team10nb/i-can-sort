/*
    Author: Yuting Jiang, Yijie Lu
*/

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
import Bubble from './Prove/Bubble';
import Heap from './Prove/Heap';
import Insertion from './Prove/Insertion';
import Merge from './Prove/Merge';
import Quick from './Prove/Quick';
import Selection from './Prove/Selection'


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
        fontWeight: "600",      
        color: color,
        fontFamily:"Quicksand",
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
        height:620,
        fontFamily: "Arial"
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
        fontSize: "20px"
    },

    listItem:{
        height:50,
    },

    hightlightItem:{
        height:40,
        backgroundColor: color,
        color: "#F8F8F8",    
        "&:hover": {backgroundColor:color},
    },
    listItemText:{
        fontFamily:"Quicksand",
        fontWeight: "600",
      },
      listItemTitle:{
        fontFamily:"Quicksand",
        fontWeight: "600",
        fontSize: "18px"
      },
      listItemCatalogue:{
        fontFamily:"Quicksand",
        fontWeight: "600",
        fontSize: "20px"
      }

    
   
  }));

  function getSteps() {
    return [
        'Bubble Prove' , 
        'Selection Prove',
        'Insertion Prove',
        'Quick Prove',
        'Merge Prove',
        'Heap Prove'
    ];
  }

  function getStepContent(activeStep) {
      switch (activeStep) {
        case 0:
            return(
                <Bubble />
            );
        case 1:
            return(
                <Selection />
            );
        case 2:
            return(
                <Insertion />
            );
        case 3:
            return(
                <Quick />
            );
        case 4:
            return(
                <Merge />
            );
        case 5:
            return(
                <Heap />
            );
        default:
            break;
      }
  }

  
    export default function CorrectnessProve(props) {
    const classes = useStyles();

    const [activeStep, setActiveStep] = React.useState(0);

    const maxSteps = getSteps().length;

    const step = getSteps();

    const progress = localStorage.getItem("CorrectProof")
        ? JSON.parse(localStorage.getItem("CorrectProof"))
        : [false, false, false, false, false, false];

    const finishPage = (page) => {
        progress[page] = true;
        localStorage.setItem("CorrectProof", JSON.stringify(progress));
    }

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        finishPage(activeStep+1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        finishPage(activeStep-1);
    };

    const handleChange =(index) => {
        setActiveStep(index);
        finishPage(index);
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
     
            <main className={classes.content}>
                <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                paper: classes.drawerPaper,
                }}
                {...finishPage(0)}
                >
                    <div className={classes.drawerContainer}>
                        <List>
                            <ListItem  className = {classes.listHeader}>                
                            <ListItemText primary= 'Catalogue' classes={{primary:classes.listItemCatalogue}}/>
                            </ListItem>
                        </List>
                        
                        <List>
                            <ListItem className = {classes.listItem}>             
                            <ListItemText primary= 'Sorting Algorithm Prove' classes={{primary:classes.listItemTitle}}/>
                            </ListItem>                          
                            {['Bubble ' , 'Selection ', 'Insertion ', 'Quick ','Merge ','Heap ' ].map((text, index) => (
                            index === activeStep
                            ?<ListItem  className = {classes.hightlightItem} button key={text} onClick={() => handleChange(index)}>
                                <ListItemIcon><ChevronRightIcon/></ListItemIcon>
                                <ListItemText primary={text} classes={{primary:classes.listItemText}}/>
                            </ListItem>
                            :<ListItem className = {classes. listItem} button key={text} onClick={() => handleChange(index)}
                                ><ListItemIcon><ChevronRightIcon/></ListItemIcon>
                                <ListItemText primary={text} classes={{primary:classes.listItemText}}/>
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


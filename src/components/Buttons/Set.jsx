/*author:Yijie Lu, Yuting Jiang*/
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import ListItemText from '@material-ui/core/ListItemText';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";
import Tooltip from '@material-ui/core/Tooltip';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import GitHubIcon from '@material-ui/icons/GitHub';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
//import {shell} from "electron";


  const useStyles = makeStyles((theme) => ({
    list: {
      width: 400,
    },
    fullList: {
      width: 'auto',
    },
    link:{
      textDecoration: "none", 
      color:"#4ba6ff",
      fontSize: "2em",
      backgroundColor:"white",
      borderWidth:"0px",
      "&:hover": {
        fontWeight:400,
        color:"#1564b2",
        cursor: "pointer",
        // textDecoration: "underline",
      },
    },
    content:{
      color: "#6e767b"
    },
    warning:{
    marginLeft:"15px",
    marginRight:"5px",
    textAlign:'lefter',
    fontSize:"14px",
    fontWeight:"600",
    },
    confirmButton:{
      backgroundColor:"#FF8C00", 
      color:"white",
      opacity:0.8,
      marginLeft:"92px",
      marginTop:"12px",
      "&:hover": {
        backgroundColor:"#FF8C00",
        opacity:1,
        color:"white",
      },
    }
  }));
  
  

  export default function Set() {
    const classes = useStyles();
    //drawer state
    const [state, setState] = React.useState({
      left: false,
    });
    //alert state
    const [open, setOpen] = React.useState(true);
    const handleClick = () => {
      setState(false);
       localStorage.clear(); 
       localStorage.setItem("snack", JSON.stringify(1));     
    };
    //open a link
    const handleLink=()=> {
      let url = "https://github.com/team10nb"
      // var win = window.open(url, '_blank');
      // const electron = window.require("electron")
      window.electron.shell.openExternal(url)
      // win.focus(); 
    }
    
    
    //set event: when click outside drawer, drawer will close 
    const toggleDrawer = (anchor, open) => (event) => {
      if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
      setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
      <div
        className={clsx(classes.list, {
          [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        role="presentation"
        onKeyDown={toggleDrawer(anchor, false)}
      >
      {/* about us:explanation of project */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <PeopleAltIcon  />&nbsp;&nbsp;
          <ListItemText primary='About Us' />   
        </AccordionSummary>
        <AccordionDetails>
          <Paper elevation={0}>
            <Typography variant="subtitle2" className = {classes.content}  gutterBottom>
              We are university students from UNNC, dedicated to help users learn sorting algorithms and correctness.
            </Typography>
          </Paper>        
        </AccordionDetails>
      </Accordion>
      {/* contact us: see github */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <GitHubIcon  />&nbsp;&nbsp;
          <ListItemText primary='Contact Us' />   
        </AccordionSummary>
        <AccordionDetails>
          <Paper elevation={0}>
          <Typography variant="subtitle2" className = {classes.content} gutterBottom>
                You can follow the link to visit our repository:
              </Typography>
              
              <Link component="button" onClick={handleLink}  className = {classes.link} >GitHub Address:&nbsp;&nbsp;I - can - sort</Link>
          </Paper>
              
        </AccordionDetails>
      </Accordion>
      {/* Erase All Current History */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <DeleteIcon  />&nbsp;&nbsp;
          <ListItemText primary='Erase All Current History' />   
        </AccordionSummary>
        <AccordionDetails>
          <Paper elevation={0}>          
            <Collapse in={open}>
              <Alert severity="warning">
                <div className = {classes.warning}>
                  Are you sure you want to erase all history? All study progress will be reset.                   
                </div>  
                <Link to="/ProcedureMainPage" style={{ textDecoration: "none" }}>        
                  <Button variant="contained" size = "small" onClick={handleClick}  className={classes.confirmButton}  >COMFIRM</Button>      
                </Link>                     
              </Alert>
            </Collapse>                         
          </Paper>
        </AccordionDetails>       
      </Accordion>
    </div>
  );


    return (
      <div>
        {/*set button*/}
        <Tooltip title="information" placement="bottom" arrow>
          <IconButton aria-label="setting" onClick={toggleDrawer('left', true)}  > <SettingsOutlinedIcon  /></IconButton>
        </Tooltip>        
          <SwipeableDrawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
            onOpen={toggleDrawer('left', true)}
          >
            {list('left')}
          </SwipeableDrawer>
      </div>
      
    );
  }




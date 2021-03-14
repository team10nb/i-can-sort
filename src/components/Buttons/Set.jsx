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
import Link from '@material-ui/core/Link';
import Tooltip from '@material-ui/core/Tooltip';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CloseIcon from '@material-ui/icons/Close';
import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import GitHubIcon from '@material-ui/icons/GitHub';
import DeleteIcon from '@material-ui/icons/Delete';
import Snackbar from '@material-ui/core/Snackbar';
import Typography from '@material-ui/core/Typography';





  const useStyles = makeStyles((theme) => ({
    list: {
      width: 400,
    },
    fullList: {
      width: 'auto',
    },
    content:{
      color: "#6e767b"
    },
    warning:{
    marginLeft:"23px",
    marginRight:"5px",
    textAlign:'lefter',
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
    //snack state
    const [appear, setAppear] = React.useState(false);
    //confirm's handleclick
    const handleClick = () => {
      //alert close 
      setOpen(false);
      //snackbar appear
      setAppear(true); 
      //reload page, set sleep time so that Snackbar has time to appear
      setTimeout(function () { 
          window.location.reload();
       
       }, 1500);
       //clear local storage
      localStorage.clear();      
    };
    //drawer close
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setAppear(false);
    };

    
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
              We are a software development team of college students, dedicated to the development of algorithm correctness to help users learn.
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
              <Link href="https://github.com/team10nb" variant="body2">GitHub Address:&nbsp;&nbsp;I - can - sort</Link>
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
                  Are you sure you want to erase all history&nbsp;?&nbsp;&nbsp;All study progress will disapear.                   
                </div>                      
                <Button variant="contained" size = "small" onClick = {handleClick} className={classes.confirmButton}  >COMFIRM</Button>                           
              </Alert>
            </Collapse>                         
          </Paper>
          <Snackbar open={appear} autoHideDuration={6000} onClose={handleClose}  >
                <Alert onClose={handleClose} severity="success" style={{marginRight:"642px",width:"290px"}}>
                  Successfully reset history!
                </Alert>
              </Snackbar> 
        </AccordionDetails>       
      </Accordion>
    </div>
  );

   
    return (
      <div>
        {/*set button*/}
        <Tooltip title="information" placement="bottom" arrow>
          <IconButton aria-label="info" onClick={toggleDrawer('left', true)}> <InfoOutlinedIcon /></IconButton>
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

 


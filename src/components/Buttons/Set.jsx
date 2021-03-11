import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Tooltip from '@material-ui/core/Tooltip';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import China from '../../Resource/China.png';
import England from '../../Resource/England.png';
import ShareIcon from '@material-ui/icons/Share';
import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import GitHubIcon from '@material-ui/icons/GitHub';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import DeleteIcon from '@material-ui/icons/Delete';
import Snackbar from '@material-ui/core/Snackbar';
import Typography from '@material-ui/core/Typography';




  const useStyles = makeStyles((theme) => ({
    list: {
      width: 280,
    },
    fullList: {
      width: 'auto',
    },
    content:{
      color: "#6e767b"
    }
    
  }));
  
  

  export default function Set() {
    const classes = useStyles();
  
    const [state, setState] = React.useState({
      left: false,
    });

    // const [open, setOpen] = React.useState(false);

    // const [appear, setAppear] = React.useState(false);

    // const handleClick = () => {
    //   setOpen(false);
    //   localStorage.clear();  
    //   setAppear(true);
    // };

    // const handleClose = (event, reason) => {
    //   if (reason === 'clickaway') {
    //     return;
    //   }

    //   setAppear(false);
    // };

    

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
              <Link href="https://github.com/team10nb" variant="body2">Git Hub Address:&nbsp;&nbsp;I - can - sort</Link>
          </Paper>
              
        </AccordionDetails>
      </Accordion>
      
      {/* <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <ClearAllIcon  />&nbsp;&nbsp;
          <ListItemText primary='Reset' />   
        </AccordionSummary>
        <AccordionDetails>
          <Paper elevation={0}>
              <Typography variant="subtitle2" gutterBottom>
                You can click the below button to erase all current history:
              </Typography>
              <Collapse in={open}>
                <Alert
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick = {handleClick}
                    >
                      confirm
                    </IconButton>
                  }
                >
                  Are you sure you want to erase all history? All study progress will disapear.
                </Alert>
              </Collapse>

              <Snackbar open={appear} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                  Successfully reset history!
                </Alert>
              </Snackbar>

              <IconButton 
                onClick={() => {setOpen(true);}}
              >
                <DeleteIcon style= {{color:"red"}}/>
              </IconButton>
              
          </Paper>
              
        </AccordionDetails>
      </Accordion> */}
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

 


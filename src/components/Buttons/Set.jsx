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
import Tooltip from '@material-ui/core/Tooltip';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InfoIcon from '@material-ui/icons/Info';


{/*
  This function is for designing the set and help button  
*/}


  const useStyles = makeStyles((theme) => ({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  }));
  
  

  export default function Set() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Link to="Setting">
        <IconButton aria-label="setting">
          <SettingsOutlinedIcon />
        </IconButton>
        </Link>
        <IconButton aria-label="help" onClick={() => { alert('help') }}>
          <HelpOutlineOutlinedIcon />
        </IconButton>
      </div>
    );
  }

 


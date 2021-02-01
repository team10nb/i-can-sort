import React from 'react';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import { makeStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import clsx from 'clsx';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import LanguageIcon from '@material-ui/icons/Language';
import InfoIcon from '@material-ui/icons/Info';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Popover from '@material-ui/core/Popover';
import { Dialog } from '@material-ui/core';

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(0),
      },
    },
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  }));

  export default function SetAndHelp() {
    const classes = useStyles();
  
    {/*setting button can pop out a toggleDrawer
       keep closed at usual,click to open it
       toggleDrawer contains plenty of accordions
    */}
    const [state, setState] = React.useState({
    left: false,
  });

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
     
     {/*
      setting music: can change song, sound volume
     */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <QueueMusicIcon /> 
          <ListItemText primary='BackGround Music' />   
        </AccordionSummary>
        <AccordionDetails>
          Music
        </AccordionDetails>
      </Accordion>

      {/*
      setting language: can change language: Chinese, English
     */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <LanguageIcon />
          <ListItemText primary='Prefer Language' />   
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItem button >
              <ListItemIcon> <QueueMusicIcon />  </ListItemIcon>
              <ListItemText primary='Chinese(simple)' />           
            </ListItem>  
            <ListItem button >
              <ListItemIcon> <QueueMusicIcon />  </ListItemIcon>
              <ListItemText primary='English' />           
            </ListItem>
          </List>         
        </AccordionDetails>  
      </Accordion>

      {/*
         checking information: check information of the team of this project
      */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <InfoIcon />
          <ListItemText primary='About Us' />   
        </AccordionSummary>
        <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.     
        </AccordionDetails>
      </Accordion>
    </div>
  );

    {/*
      help button can pop out several dialogs
      the effect is that invisible dialog
    */}
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
      <div className={classes.root}>
        <IconButton aria-label="setting" onClick={toggleDrawer('left', true)}> <SettingsOutlinedIcon /></IconButton>
          <SwipeableDrawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
            onOpen={toggleDrawer('left', true)}
          >
            {list('left')}
          </SwipeableDrawer>

        {/* <FormControlLabel
          control={<Checkbox icon = {<HelpOutlineIcon />} onChange={handleChange}> </Checkbox>}
        /> */}
        <IconButton aria-label="help"  onClick={handleClick}>
          <HelpOutlineOutlinedIcon />
        </IconButton>

       
        <Popover 
           id={id}
           open={open}
           onClose={handleClose}
           color = "disable"
           anchorReference="anchorPosition"
           anchorPosition={{ top: 200, left: 150 }}
           anchorOrigin={{
           vertical: 'top',
           horizontal: 'rihgt',
           }}
          transformOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
        >
        <Accordion >
        <AccordionSummary
          expandIcon={<ArrowForwardIosIcon />}
          aria-controls="panel1a-content"          
        >
          <ListItemText primary='They are sort algorithm entries' />   
        </AccordionSummary>
      </Accordion>
        </Popover>
        <Popover 
           id={id}
           open={open}
           onClose={handleClose}
           color = "disable"
           anchorReference="anchorPosition"
           anchorPosition={{ top: 500, left: 150 }}
           anchorOrigin={{
           vertical: 'top',
           horizontal: 'right',
           }}
          transformOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
        >
        <Accordion>
        <AccordionSummary
          expandIcon={<ArrowForwardIosIcon />}
          aria-controls="panel1a-content"          
        >
          <ListItemText primary='They are set and help button' />   
        </AccordionSummary>
      </Accordion>
        </Popover>
        <Popover 
           id={id}
           open={open}
           onClose={handleClose}
           color = "disable"
           anchorReference="anchorPosition"
           anchorPosition={{ top: 590, left: 150 }}
           anchorOrigin={{
           vertical: 'top',
           horizontal: 'right',
           }}
          transformOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
        >
        <Accordion>
        <AccordionSummary
          expandIcon={<ArrowForwardIosIcon />}
          aria-controls="panel1a-content"          
        >
          <ListItemText primary='They are module entry' />   
        </AccordionSummary>
      </Accordion>
        </Popover>
      </div>
    );
  }
  

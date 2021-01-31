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

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
     
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
          //音乐条   
        </AccordionDetails>
      </Accordion>
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
        <IconButton aria-label="help" onClick={() => { alert('help') }}>
          <HelpOutlineOutlinedIcon />
        </IconButton>
      </div>
    );
  }
  

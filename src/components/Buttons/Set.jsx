/*
    Author: Yijie Lu
*/
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
import China from '../../Resource/China.png';
import England from '../../Resource/England.png';
import Music from '../Music/Music';


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
         {/* <Music /> */}
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
          <ListItemText primary='Language' />   
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItem button >
              <ListItemIcon> <img src = {China} />  </ListItemIcon>
              <ListItemText primary='Chinese(simple)' />           
            </ListItem>  
            <ListItem button >
              <ListItemIcon> <img src = {England} />  </ListItemIcon>
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

   
    return (
      <div>
        {/*set button*/}
        <Tooltip title="setting" placement="bottom" arrow>
          <IconButton aria-label="setting" onClick={toggleDrawer('left', true)}> <SettingsOutlinedIcon /></IconButton>
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

 


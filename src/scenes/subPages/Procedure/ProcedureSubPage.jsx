/*
    Author: Yuting Jiang, Yijie Lu

    The template of procedure subpages. Consists of a menu bar with the theme color and Card components to contain content.
*/

import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';

//Set css
const useStyles = makeStyles((theme) => ({
  tabs:{
    textAlign: 'center',
    height: 60,
  },
  tab:{
    textAlign: 'center',
    height: 60,
    fontSize: 16,
  },
  icon:{
    textAlign: 'left',
    width: 100,
  },
  div:{
    display: 'flex',    
    width: 1020,
    '& > *': {
      margin: theme.spacing(3),
    }
  },
  cardOne:{
    marginTop: 80,
    background: "#F0F0F0",
    width: "35%",
    height: 520
  },
  cardTwo:{
    marginTop: 80,
    background: "#F0F0F0",
    width: "65%",
    height: 520,
    alignItems:"center",
  },
  cardOperation:{
    marginTop: 80,
    background: "#F0F0F0",
    width: "100%",
    height: 520,
    alignItems:"center",
  },

}));

//The subpages are corresponding to menu items
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

//Limit the prop type for TabPanel
TabPanel.propTypes = {
  children: PropTypes.object,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

//Set props for tabs
function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

//Return a menu bar consists of a home button and three tabs
//Each tab is corresponding to a tabpanel
export default function ProcedureSubPage(props) {
  const{color, algorithm, progress, history, intro, operate, Implementation} = props;

  const classes = useStyles();
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: color,
      },
      secondary: {
        main: "#FFFFFF"
      },
      
    },
    
  });

  const [value, setValue] = React.useState(1);

  function finishPage(page){
    progress[page] = true;
    localStorage.setItem(algorithm, JSON.stringify(progress));
  }

  const handleClick = () => {
    //return to procedure main page 
    history.push({pathname: '/ProcedureMainPage'});
  };

  const handleChange = (event, newValue) => {
    //change the menu item, finish current page
    finishPage(newValue-1);
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    //change the tabpanel
    setValue(index);
  };

  return (
   <div >
      <ThemeProvider theme={theme}>
      <AppBar>
        <Tabs

          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          background = "primary"
          
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Button className={classes.icon} onClick={handleClick}>
            <HomeIcon style={{ fontSize: 30, color: "#FFFFFF"}} />
          </Button>

          <Tab label="Introduction" {...a11yProps(1)} className={classes.tab}/>
          <Tab label="Operation" {...a11yProps(2)} className={classes.tab}/>
          <Tab label="Implementation" {...a11yProps(3)} className={classes.tab}/>
        </Tabs>
      </AppBar>

      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0}> 
        </TabPanel>

        <TabPanel value={value} index={1} dir={theme.direction} {...finishPage(0)}>
          <div className = {classes.div}>
            <Card className={classes.cardOne}>
              <CardContent style={{paddingLeft: "24px", paddingTop: "0px", paddingRight:"23px"}}>
                {intro.introMessage}
              </CardContent>
            </Card>
            <Card className={classes.cardTwo} >
              <CardContent >
                {intro.animation}
              </CardContent>
            </Card>
          </div>
        </TabPanel>

        <TabPanel value={value} index={2} dir={theme.direction}>
          <div className = {classes.div}>
            <Card className={classes.cardOperation}>
              <CardContent>
                {operate}
              </CardContent>
            </Card>
          </div>
        </TabPanel>

        <TabPanel value={value} index={3} dir={theme.direction}>
            {Implementation}
        </TabPanel>
        
      </SwipeableViews>
      </ThemeProvider>
    </div>
  );
}

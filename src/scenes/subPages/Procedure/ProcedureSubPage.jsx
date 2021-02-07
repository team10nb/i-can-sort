//The template of procedure subpages.
//Consists of a menu bar with the theme color and Card components to contain content
import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
import { SwitchAnimation } from '../../../components/SwitchAnimation/SwitchAnimation';


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
    '& > *': {
      margin: theme.spacing(3),
    }
  },
  cardOne:{
    background: "#F0F0F0",
    width: "30%",
    height: 520
  },
  cardTwo:{
    background: "#F0F0F0",
    width: "70%",
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
  children: PropTypes.instanceOf(<Tab/>),
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
  const classes = useStyles();
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: props.color,
      },
      //改颜色
      secondary: {
        main: "#FFFFFF"
      },

    },
    
  });

  const [value, setValue] = React.useState(1);

  const handleClick = () => {
    //return to procedure main page with the progress
    props.history.push({pathname: '/ProcedureMainPage', state: props.progress});
  };

  const handleChange = (event, newValue) => {
    //change the menu item
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    //change the tabpanel
    setValue(index);
  };

  return (
   <div style={{width:960, height:700}}>
      <ThemeProvider theme={theme}>
      <AppBar position="static" >
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

        <TabPanel value={value} index={1} dir={theme.direction}>
          <div className = {classes.div}>
            <Card className={classes.cardOne}>
              <CardContent >
                {props.intro.introMessage}
              </CardContent>
            </Card>
            <Card className={classes.cardTwo} >
              <CardContent style={{position:"relative", top:'15%'}}>
              {/* <CardContent > */}
                {props.intro.animation}
              </CardContent>
            </Card>
          </div>
        </TabPanel>

        <TabPanel value={value} index={2} dir={theme.direction}>
          <div className = {classes.div}>
            <Card className={classes.cardOne}>
              <CardContent>
                {/* {props.operate} */}
              </CardContent>
            </Card>
            <Card className={classes.cardTwo}>
              <CardContent>
                {props.operate}
                {/* <SwitchAnimation/> */}
              </CardContent>
            </Card>
          </div>
        </TabPanel>

        <TabPanel value={value} index={3} dir={theme.direction}>
          <div >
        
          <Card >
          <CardContent>
            Implementation page
          </CardContent>
          </Card>
          </div>
        </TabPanel>
      </SwipeableViews>
      </ThemeProvider>
    </div>
  );
}

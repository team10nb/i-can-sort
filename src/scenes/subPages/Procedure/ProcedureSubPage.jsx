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
  }
}));

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

TabPanel.propTypes = {
  children: PropTypes.instanceOf(<Tab/>),
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function ProcedureSubPage(props) {
  const classes = useStyles();
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: props.color,
      },
      secondary: {
        main: "#e0e0e0"
      },
    },
    // direction: 'ltr',
  });

  const [value, setValue] = React.useState(1);

  const handleClick = () => {
    props.history.push({pathname: '/ProcedureMainPage', state: props.process});
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
      <AppBar position="static" color="secondary">
        <Tabs
          // className={classes.tabs}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Button className={classes.icon} onClick={handleClick}>
            <HomeIcon color="primary"/>
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
        <div >
          <Card >
          <CardContent>
            Introduction page
          </CardContent>
          </Card>
          <Card >
          <CardContent>
            Introduction page
          </CardContent>
          </Card>
          </div>
        </TabPanel>

        <TabPanel value={value} index={2} dir={theme.direction}>
        <div >
          <Card >
          <CardContent>
            Introduction page2
          </CardContent>
          </Card>
          <Card >
          <CardContent>
            Introduction page2
          </CardContent>
          </Card>
          </div>
        </TabPanel>

        <TabPanel value={value} index={3} dir={theme.direction}>
          <div >
          {/* <Card >
          <CardContent>
            Introduction page
          </CardContent>
          </Card> */}
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
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomeIcon from '@material-ui/icons/Home';


const iconStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    
    // backgroundColor: props.color,
    justifyContent: 'center',
    '& > svg': {
        margin: theme.spacing(1),
        
    },
  },
}));


const divStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',    
      '& > *': {
        margin: theme.spacing(3),
      },
    },
  }));

const cardOneStyles = makeStyles({
    root: {
      background: "#DDDDDD",
      width: "30%",
      height: 600
    },
  });

const cardTwoStyles = makeStyles({
root: {
    background: "#DDDDDD",
    width: "70%",
    height: 600
},
});



  export default function SubScenes(props) {
    

    const iconClasses = iconStyles();
    const divClasses = divStyles();
    const cardOneClasses = cardOneStyles();
    const cardTwoClasses = cardTwoStyles();
 
  
        return(
            
            <div>
                 
                
                <div class ={iconClasses.root}>
       
                  <AppBar position="static" color= {props.color}>
                    
                    <Tabs >
                      <Tab icon = {<HomeIcon />} />
                      <Tab label="Item One"  />
                      <Tab label="Item Two" />
                      <Tab label="Item Three"  />
                    </Tabs>
                  </AppBar>
                  {/* <TabPanel value={value} index={0}>
                  Item One
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                  Item Two
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                  Item Three
                  </TabPanel> */}
                                        
                
                </div>

                <div className = {divClasses.root}>
                <Card className={cardOneClasses.root}></Card>
                <Card className={cardTwoClasses.root}></Card>
                </div>
                
          
               
            </div>
        );
        
    
}


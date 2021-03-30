/*
    Author: Yuting Jiang, Yijie Lu

    //The template of tutrial subpages. 
*/

import React from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Toolbar from '@material-ui/core/Toolbar';
import {color} from '../../mainPages/Tutorial';

//Set css
const useStyles = makeStyles((theme) => ({
  appBar:{
    justifyContent:"center",
    height: 55,
  },
  icon:{
    textAlign: 'left',
    width: 100,
    height: 55,
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
    color: "white",
  },
  chip:{
    position: 'relative',
    marginRight: -50,
    marginLeft: 205,
    minWidth: 400,
    justifyContent:"center",  
    fontWeight: "600",      
    color: color,
    fontFamily:"Quicksand",
    backgroundColor: "#F8F8F8",
},
}));


//Return a menu bar consists of a home button and three tabs
//Each tab is corresponding to a tabpanel
export default function TutorialSubPage(props) {
  const{color, history, message} = props;

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


  const handleClick = () => {
    //return to tutorial main page 
    history.push({pathname: '/TutorialMainPage'});
  };


  return (

   <div >
      <ThemeProvider theme={theme}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Button className={classes.icon} onClick={handleClick}>
            <HomeIcon style={{ fontSize: 30, color: "#FFFFFF"}} />
          </Button>

            <Chip className={classes.chip} label= {message} />  
        </Toolbar>
      </AppBar>
      </ThemeProvider>
    </div>
  );
}

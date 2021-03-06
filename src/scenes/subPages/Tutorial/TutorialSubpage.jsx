//The template of procedure subpages.
//Consists of a menu bar with the theme color and Card components to contain content
import React from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';


//Set css
const useStyles = makeStyles((theme) => ({
  icon:{
    textAlign: 'left',
    width: 100,
  },

}));



//Return a menu bar consists of a home button and three tabs
//Each tab is corresponding to a tabpanel
export default function TutorialSubPage(props) {
  const{color, algorithm, progress, history, intro, operate} = props;

  const classes = useStyles();
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: color,
      },
      //改颜色
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
      <AppBar>
          <Button className={classes.icon} onClick={handleClick}>
            <HomeIcon style={{ fontSize: 30, color: "#FFFFFF"}} />
          </Button>
      </AppBar>

      
      </ThemeProvider>
    </div>
  );
}

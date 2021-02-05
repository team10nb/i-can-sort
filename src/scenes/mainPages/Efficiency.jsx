// The efficiency main page, consists of algorithm modules, set and help buttons, and the choice menu
import React from "react";
import {Link} from 'react-router-dom';
import SetAndHelp from '../../components/Buttons/SetAndHelp';
import Module from '../../components/Module/Module';
import Button from '@material-ui/core/Button';
import { makeStyles,createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

//Set css
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      marginLeft: theme.spacing(3.3),
    },
  },
  button:{
    width: 150,
  },
  grid: {
    flexGrow: 1,
    width: 900,
    height: 600,
    paddingLeft: 30,
    paddingTop: 30,
  },
  div: {
      textAlign: "center",
      height: 690,
      width: 960,
    }
}));

//Set theme color
const color = '#4caf50';

//Return five button, which are 'Tutorial', 'Procedure', 'Efficiency', 'Correctness', and 'Exercise'
//The Efficiency button is theme color without jump function
function ChoiceMenu(){
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: color,
      },
    },
  });
  
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
      <Link to="/Tutorial" style={{ textDecoration:'none'}} >
      <Button variant="contained" className={classes.button}>
        Tutorial
      </Button>
      </Link>

      <Link to="/ProcedureMainPage" style={{ textDecoration:'none'}} >
      <Button variant="contained" className={classes.button}>
        Procedure
      </Button>
      </Link>

      <Button variant="contained" color="primary" disableElevation className={classes.button}>
        Efficiency
      </Button>

      <Link to="/CorrectnessMainPage" style={{ textDecoration:'none'}} >
      <Button variant="contained" className={classes.button}>
        Correctness
      </Button>
      </Link>

      <Link to="/Exercise" style={{ textDecoration:'none'}} >
      <Button variant="contained" className={classes.button}>
        Exercise
      </Button>
      </Link>
      </ThemeProvider>
    </div>
  );
}

//Return a grid contains 8 modules that represent 8 sorting algorithms，set and help buttons，and the choice menu
//Click the modules to jump to the corresponding algorithm learning page
//The progress bar under each module represents the learning progress of the algorithm
function EfficiencyMainPage(props) {
    const classes = useStyles();
    const [progress, setProgress] = React.useState(10);

    const image = {
        static: "./logo512.png",
        gif: "catch.gif",
        title: "Bubble sort",
        width: "20%",
    };

    const props2 = {
        image: image,
        width: 200,
        height: 200,
        progress: progress,
        color: color,
    };

    return (
      <div className={classes.div}>
        <div className={classes.grid} >
          <Grid container spacing={0} >

          <Grid item xs={6} sm={3} >
          <Link to="/Page">
              <Module {...props2} />
          </Link>
          </Grid>

          <Grid item xs={6} sm={3} >
          <Link to="/Page">
              <Module {...props2} />
          </Link>
          </Grid>

          <Grid item xs={6} sm={3}>
          <Link to="/Page">
              <Module {...props2} />
          </Link>
          </Grid>

          <Grid item xs={6} sm={3}>
          <Link to="/Page">
              <Module {...props2} />
          </Link>
          </Grid>

          <Grid item xs={6} sm={3}>
          <Link to="/Page">
              <Module {...props2} />
          </Link>
          </Grid>

          <Grid item xs={6} sm={3}>
          <Link to="/Page">
              <Module {...props2} />
          </Link>
          </Grid>

          <Grid item xs={6} sm={3}>
          <Link to="/Page">
              <Module {...props2} />
          </Link>
          </Grid>

          <Grid item xs={6} sm={3}>
          <Link to="/Page">
              <Module {...props2} />
          </Link>
          </Grid>

          <Grid item xs={12}>
            <div style={{textAlign:"left"}}>
            <SetAndHelp {...props2}/>
            </div>
          </Grid>

          <Grid item xs={12}>
            <div style={{marginLeft:-8, marginTop: 50}}>
            <ChoiceMenu/>
            </div>
          </Grid>

        </Grid>
        </div>
      </div>
        
    );
}

export {color};
export default EfficiencyMainPage;

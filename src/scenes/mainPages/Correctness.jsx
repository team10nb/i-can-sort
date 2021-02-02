import React from "react";
import {Link, Route} from 'react-router-dom';
import SetAndHelp from '../../components/Buttons/SetAndHelp';
import Module from '../../components/Module/Module';
import Button from '@material-ui/core/Button';
import { makeStyles,createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    // minWidth: 200,
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
  },
}));

const color = '#ff6f00';

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

      <Link to="/ProcedureMainPage" style={{ textDecoration:'none'}}>
      <Button variant="contained" className={classes.button}>
        Procedure
      </Button>
      </Link>

      <Link to="/EfficiencyMainPage" style={{ textDecoration:'none'}}>
      <Button variant="contained" className={classes.button}>
        Efficiency
      </Button>
      </Link>

      <Button variant="contained" color="primary" disableElevation className={classes.button}>
        Correctness
      </Button>

      <Link to="/Exercise" style={{ textDecoration:'none'}}>
      <Button variant="contained" className={classes.button}>
        Exercise
      </Button>
      </Link>
      </ThemeProvider>
    </div>
  );
}


function CorrectnessMainPage(props) {
    const classes = useStyles();
    const progress = props.location.state ? props.location.state : 0;
    
    const image = {
        static: "./logo512.png",
        gif: "catch.gif",
        title: "Bubble sort",
        width: "20%",
    };
    const image2 = {
        static: "./logo512.png",
        gif: "sorting.gif",
        title: "Bubble sort",
        width: "20%",
    };

    const bubbleProps = {
        image: image,
        width: 200,
        height: 200,
        progress: progress,
        color: color,
        preOne: true,
    };
    const props2 = {
        image: image2,
        width: 200,
        height: 200,
        progress: progress,
        color: color,
    };

    return (
      <div style={{textAlign: "center", paddingLeft:"15%"}}>
        <div className={classes.grid} >
          <Grid container spacing={0} >

          <Grid item xs={6} sm={3} >
          <Link to="/Page">
              <Module {...bubbleProps} />
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
export default CorrectnessMainPage;

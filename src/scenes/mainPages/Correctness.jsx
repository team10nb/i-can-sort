// The correctness main page, consists of algorithm modules, set and help buttons, and the choice menu
import React from "react";
import {Link} from 'react-router-dom';
import Set from '../../components/Buttons/Set';
import CHelp from '../../components/Buttons/CHelp';
import Module from '../../components/Module/Module';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

//Set css
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
    paddingLeft: 30,
    paddingTop: 30,
  },
  div: {
      textAlign: "center",
height: 690,
width: 960,

},
  buttonSet:{
    display:"flex",
    '& > *': {
      margin: theme.spacing(0),
    },
  },
}));

//Set theme color
const color = '#ff6f00';

//Return a grid contains 8 modules that represent 8 sorting algorithms，set and help buttons，and the choice menu
//Click the modules to jump to the corresponding algorithm learning page
//The progress bar under each module represents the learning progress of the algorithm
export default function CorrectnessMainPage(props) {
    const classes = useStyles();
     //get progress info from local
     const localPre = localStorage.getItem("pre") ? JSON.parse(localStorage.getItem("pre")) : null;
     const localProgress = localStorage.getItem("progress") ? JSON.parse(localStorage.getItem("progress")) : 0;
 
     //set progress
     const progress = props.location.state ? props.location.state : localProgress;
     localStorage.setItem("progress", JSON.stringify(progress));
 
     const handleClick = (title) => () => {
       //store previous visited algorithm
       localStorage.setItem("pre", JSON.stringify(title));
     }
 
     const handlePre = (title) => {
       //set previous visited algorithm
       const preOne = (title === localPre) ? true : false;
       return preOne;
     }
    
     const images = [
      {
        static: "./logo512.png",
        gif: "catch.gif",
        title: "Bubble sort",
        width: "20%",
      },
      {
        static: "./logo512.png",
        gif: "catch.gif",
        title: "Selection sort",
        width: "20%",
      },
      {
        static: "./logo512.png",
        gif: "catch.gif",
        title: "Insertion sort",
        width: "20%",
      },
      {
        static: "./logo512.png",
        gif: "catch.gif",
        title: "Bub sort",
        width: "20%",
      },

  ];

    const TutorialProps = {
      image: images[0],
      width: 200,
      height: 200,
      onClick: handleClick(images[0].title),
      progress: progress,
      color: color,
      preOne: handlePre(images[0].title),
  };

    const props2 = {
      image: images[3],
      width: 200,
      height: 200,
      onClick: handleClick(images[3].title),
      progress: progress,
      color: color,
      preOne: handlePre(images[3].title),
    };

    return (
      <div className={classes.div}>
        <div className={classes.grid} >
          <Grid container spacing={0} >

          <Grid item xs={6} sm={3} >
          <Link to="/Correctness/Tutorial">
              <Module {...TutorialProps} />
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
          <div className = {classes.buttonSet}>
            <Set /><CHelp {...props2}/>
            </div>
          </Grid>

          <Grid item xs={12}>
            <div style={{marginLeft:-8, marginTop: 50}}>
            <CorrectnessChoiceMenu/>
            </div>
          </Grid>

        </Grid>
        </div>
      </div>
        
    );
}

//Return five button, which are 'Tutorial', 'Procedure', 'Efficiency', 'Correctness', and 'Exercise'
//The Correctness button is theme color without jump function
export function CorrectnessChoiceMenu(){

  const classes = useStyles();

  return (
    <div className={classes.root}>
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

      <Button variant="contained" color="primary" disableElevation className={classes.button} style={{color:"white", backgroundColor: color}}>
        Correctness
      </Button>

      <Link to="/Exercise" style={{ textDecoration:'none'}}>
      <Button variant="contained" className={classes.button}>
        Exercise
      </Button>
      </Link>
    </div>
  );
}

export {color};

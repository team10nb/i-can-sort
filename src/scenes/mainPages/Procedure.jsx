// The procedure main page, consists of algorithm modules, set and help buttons, and the choice menu
import React from "react";
import {Link} from 'react-router-dom';
import Set from '../../components/Buttons/Set';
import PHelp from '../../components/Buttons/PHelp';
import Module from '../../components/Module/Module';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
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
    alignItems: 'center',
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
const color = '#1565c0';

//Return five button, which are 'Tutorial', 'Procedure', 'Efficiency', 'Correctness', and 'Exercise'
//The Procedure button is theme color without jump function
export function ProcedureChoiceMenu(){
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link to="/Tutorial" style={{ textDecoration:'none'}} >
      <Button variant="contained" className={classes.button}>
        Tutorial
      </Button>
      </Link>

      <Button variant="contained" disableElevation className={classes.button} style={{color:"white", backgroundColor: color}}>
        Procedure
      </Button>

      <Link to="/EfficiencyMainPage" style={{ textDecoration:'none'}} >
      <Button variant="contained" className={classes.button}>
        Efficiency
      </Button>
      </Link>

      <Link to="/CorrectnessMainPage" style={{ textDecoration:'none'}}>
      <Button variant="contained" className={classes.button}>
        Correctness
      </Button>
      </Link>

      <Link to="/Exercise" style={{ textDecoration:'none'}}>
      <Button variant="contained" className={classes.button}>
        Exercise
      </Button>
      </Link>
    </div>
  );
}

function setProgress(algorithm){
  const progressArray = localStorage.getItem(algorithm) ? JSON.parse(localStorage.getItem(algorithm)) : 0 ;
  return calculateProgress(progressArray);
}

function calculateProgress(progressArray){
  let value = 0;
  let count = 0;
  for (var i=0; i<progressArray.length; i++){
    if (progressArray[i] == true){
      value += 30;
      count++;
    }
  }
  if(count == progressArray.length)
    value = 100;
  return value;
}

//Return a grid contains 8 modules that represent 8 sorting algorithms，set and help buttons，and the choice menu
//Click the modules to jump to the corresponding algorithm learning page
//The progress bar under each module represents the learning progress of the algorithm
function ProcedureMainPage() {
    const classes = useStyles();

    const localPre = localStorage.getItem("pre") ? JSON.parse(localStorage.getItem("pre")) : null;

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
        gif: "bubble.gif",
        title: "Bubble sort",
        width: "20%",
      },
      {
        static: "./logo512.png",
        gif: "selection.gif",
        title: "Selection sort",
        width: "20%",
      },
      {
        static: "./logo512.png",
        gif: "insertion.gif",
        title: "Insertion sort",
        width: "20%",
      },
      {
        static: "./logo512.png",
        gif: "quick.gif",
        title: "Quick sort",
        width: "20%",
      },
      {
        static: "./logo512.png",
        gif: "merge.gif",
        title: "Merge sort",
        width: "20%",
      },
      {
        static: "./logo512.png",
        gif: "heap.gif",
        title: "Heap sort",
        width: "20%",
      },

  ];

  const bubbleProps = {
      image: images[0],
      width: 200,
      height: 200,
      onClick: handleClick(images[0].title),
      progress: setProgress("bubble"),
      color: color,
      preOne: handlePre(images[0].title),
  };

    const selectionProps = {
      image: images[1],
      width: 200,
      height: 200,
      onClick: handleClick(images[1].title),
      progress: setProgress("selection"),
      color: color,
      preOne: handlePre(images[1].title),
  };

    const insertionProps = {
      image: images[2],
      width: 200,
      height: 200,
      onClick: handleClick(images[2].title),
      progress: setProgress("insertion"),
      color: color,
      preOne: handlePre(images[2].title),
  };

    const quickProps = {
      image: images[3],
      width: 200,
      height: 200,
      onClick: handleClick(images[3].title),
      progress: setProgress("quick"),
      color: color,
      preOne: handlePre(images[3].title),
  };

    const mergeProps = {
      image: images[4],
      width: 200,
      height: 200,
      onClick: handleClick(images[4].title),
      progress: setProgress("merge"),
      color: color,
      preOne: handlePre(images[4].title),
  };

    const heapProps = {
      image: images[5],
      width: 200,
      height: 200,
      onClick: handleClick(images[5].title),
      progress: setProgress("heap"),
      color: color,
      preOne: handlePre(images[5].title),
  };

    const props2 = {
      image: images[4],
      width: 200,
      height: 200,
      // onClick: handleClick(images[3].title),
      progress: 0,
      color: color,
      preOne: false,
  };


    return (
      <div className={classes.div} >
        <div className={classes.grid} >
          <Grid container spacing={0} >

          <Grid item xs={6} sm={3} >
          <Link to="/ProcedureSubpage/Bubble">
              <Module {...bubbleProps} />
          </Link>
          </Grid>

          <Grid item xs={6} sm={3} >
          <Link to="/ProcedureSubpage/Selection"> 
              <Module {...selectionProps} />
          </Link>
          </Grid>

          <Grid item xs={6} sm={3}>
          <Link to="/ProcedureSubpage/Insertion"> 
              <Module {...insertionProps} />
          </Link>
          </Grid>

          <Grid item xs={6} sm={3}>
          <Link to="/ProcedureSubpage/Quick"> 
              <Module {...quickProps} />
          </Link>
          </Grid>

          <Grid item xs={6} sm={3}>
          <Link to="/ProcedureSubpage/Merge"> 
              <Module {...mergeProps} />
          </Link>
          </Grid>

          <Grid item xs={6} sm={3}>
          <Link to="/ProcedureSubpage/Heap"> 
              <Module {...heapProps} />
          </Link>
          </Grid>

{/*           <Grid item xs={6} sm={3}> */}
{/*           <Link to="/ProcedureSubpage/Bubble"> */}
{/*               <Module {...props2} /> */}
{/*           </Link> */}
{/*           </Grid> */}

{/*           <Grid item xs={6} sm={3}> */}
{/*           <Link to="/ProcedureSubpage/Bubble"> */}
{/*               <Module {...props2} /> */}
{/*           </Link> */}
{/*           </Grid> */}

          <Grid item xs={12}>
            <div className = {classes.buttonSet}>
            <Set /><PHelp {...props2}/>
            </div>
          </Grid>

          <Grid item xs={12}>
            <div style={{marginLeft:-8, marginTop: 50}}>
            <ProcedureChoiceMenu/>
            </div>
          </Grid>

        </Grid>
        </div>
      </div>
        
    );
}

export {color};
export default ProcedureMainPage;

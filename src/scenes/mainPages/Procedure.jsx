import React from "react";
import {Link} from 'react-router-dom';
import SetAndHelp from '../../components/Buttons/SetAndHelp';
import Module from '../../components/Module/Module';
import Button from '@material-ui/core/Button';
import { makeStyles,createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

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
  },
}));

const color = '#1565c0';

function ChoiceMenu(){
  const classes = useStyles();
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: color,
      },
    },
  });

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
      <Link to="/Tutorial" style={{ textDecoration:'none'}} >
      <Button variant="contained" className={classes.button}>
        Tutorial
      </Button>
      </Link>

      <Button color="primary" variant="contained" disableElevation className={classes.button}>
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
      </ThemeProvider>
    </div>
  );
}

function ProcedureMainPage(props) {
    const classes = useStyles();

    const localPre = localStorage.getItem("pre") ? JSON.parse(localStorage.getItem("pre")) : null;
    const localProgress = localStorage.getItem("progress") ? JSON.parse(localStorage.getItem("progress")) : 0;
    const progress = props.location.state ? props.location.state : localProgress;
    localStorage.setItem("progress", JSON.stringify(progress));

    const handleClick = (title) => () => {
      localStorage.setItem("pre", JSON.stringify(title));
    }

    const handlePre = (title) => {
      const preOne = (title === localPre) ? true : false;
      return preOne;
    }

    const bubbleImage = {
        static: "./logo512.png",
        gif: "catch.gif",
        title: "Bubble sort",
        width: "20%",
    };

    const image = {
      static: "./logo512.png",
      gif: "catch.gif",
      title: "Bub sort",
      width: "20%",
  };

    const bubbleProps = {
      image: bubbleImage,
      width: 200,
      height: 200,
      onClick: handleClick(bubbleImage.title),
      progress: progress,
      color: color,
      preOne: handlePre(bubbleImage.title),
  };

    const props2 = {
        image: image,
        width: 200,
        height: 200,
        onClick: handleClick(image.title),
        progress: progress,
        color: color,
        preOne: handlePre(image.title),
    };

    return (
      <div style={{textAlign: "center", paddingLeft:"15%"}}>
        <div className={classes.grid} >
          <Grid container spacing={0} >

          <Grid item xs={6} sm={3} >
          <Link to="/ProcedureSubpage/Bubble">
              <Module {...bubbleProps} />
          </Link>
          </Grid>

          <Grid item xs={6} sm={3} >
          <Link to="/ProcedureSubpage/Bubble"> 
              <Module {...props2} />
          </Link>
          </Grid>

          <Grid item xs={6} sm={3}>
          <Link to="/ProcedureSubpage/Bubble"> 
              <Module {...props2} />
          </Link>
          </Grid>

          <Grid item xs={6} sm={3}>
          <Link to="/ProcedureSubpage/Bubble"> 
              <Module {...props2} />
          </Link>
          </Grid>

          <Grid item xs={6} sm={3}>
          <Link to="/ProcedureSubpage/Bubble"> 
              <Module {...props2} />
          </Link>
          </Grid>

          <Grid item xs={6} sm={3}>
          <Link to="/ProcedureSubpage/Bubble"> 
              <Module {...props2} />
          </Link>
          </Grid>

          <Grid item xs={6} sm={3}>
          <Link to="/ProcedureSubpage/Bubble"> 
              <Module {...props2} />
          </Link>
          </Grid>

          <Grid item xs={6} sm={3}>
          <Link to="/ProcedureSubpage/Bubble"> 
              <Module {...props2} />
          </Link>
          </Grid>

          <Grid item xs={12}>
            <div style={{textAlign:"left"}}>
            <SetAndHelp />
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
export default ProcedureMainPage;

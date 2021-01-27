import React from "react";
import {Link} from 'react-router-dom';
import SetAndHelp from '../../components/Buttons/SetAndHelp';
import Module from '../../components/Module/Module';
import Button from '@material-ui/core/Button';
import { makeStyles,createMuiTheme, ThemeProvider} from '@material-ui/core/styles';

function ChoiceMenu(){
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#ff6f00',
      },
    },
  });
  
  const useStyles = makeStyles((theme) => ({
    root: {
      minWidth: 200,
      display: 'flex',
      '& > *': {
        // margin: theme.spacing(2),
        marginRight: theme.spacing(5),
      },
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
      <Link to="/Tutorial" style={{ textDecoration:'none'}} >
      <Button variant="contained" >
        Tutorial
      </Button>
      </Link>

      <Link to="/ProcedureMainPage" style={{ textDecoration:'none'}}>
      <Button variant="contained" >
        Procedure
      </Button>
      </Link>

      <Link to="/EfficiencyMainPage" style={{ textDecoration:'none'}}>
      <Button variant="contained" >
        Efficiency
      </Button>
      </Link>

      <Button variant="contained" color="primary" disableElevation>
        Correctness
      </Button>

      <Link to="/Exercise" style={{ textDecoration:'none'}}>
      <Button variant="contained" >
        Exercise
      </Button>
      </Link>
      </ThemeProvider>
    </div>
  );
}

function CorrectnessMainPage() {
    const [progress, setProgress] = React.useState(10);
    const [progress2, setProgress2] = React.useState(15);

    const handleClick = (setterProgress) => () => {
        // setterProgress((oldProgress) => {
        //     if (oldProgress === 100) {
        //         return 0;
        //     }
        //     const diff = Math.random() * 10;
        //     return Math.min(oldProgress + diff, 100);
        // });
        // console.log(progress);

    };

    
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

    const props = {
        image: image,
        width: 200,
        height: 200,
        onClick: handleClick(setProgress),
        progress: progress,
        color: "#ff6f00",
    };
    const props2 = {
        image: image2,
        width: 200,
        height: 200,
        onClick: handleClick(setProgress2),
        progress: progress2,
    };

    return (
        <div style={{paddingLeft: 120}}>
                <Link to="/Page">
                    <Module {...props} />
                </Link>
                <Link to="/Page">
                    <Module {...props} />
                </Link>
                <Link to="/Page">
                    <Module {...props} />
                </Link>
                <Link to="/Page">
                    <Module {...props} />
                </Link>
                <Link to="/Page">
                    <Module {...props} />
                </Link>
                <Link to="/BubbleSort">
                    <Module {...props} />
                </Link>
                <Link to="/BubbleSort">
                    <Module {...props} />
                </Link>
                <Link to="/BubbleSort">
                    <Module {...props} />
                </Link>

                <div style={{paddingLeft: 30, marginTop: -30}}> 
                    <SetAndHelp/>
                </div>

                <div style={{paddingLeft: 40, marginTop: 30}}>
                    <ChoiceMenu />
                </div>
        </div>
        
    );
}

export default CorrectnessMainPage;

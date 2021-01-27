import React from "react";
import { makeStyles, withStyles, createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

<<<<<<< HEAD
const BorderLinearProgress = withStyles((theme) => ({
    root: {
        boxShadow: "10x 10px 20px #888888",
        height: 10,
        borderTopLeftRadius: 2,
        borderTopRightRadius: 2,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
    },
    colorPrimary: {
        backgroundColor:
            theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
    },
    bar: {
        borderRadius: 2,
        // backgroundColor: "#81c784",
    },
}))(LinearProgress);

export default function ModuleProgress(props) {
    const theme = createMuiTheme({
        palette: {
          primary: {
            main: props.color,
          },
        },
      });
=======


export default function ModuleProgress(props) {

    const {width, color, progress, preOne} = props;
    const presentingWidth = preOne ? (width + 6) : (width);
    // TODO if complete??
    const presentingColor = progress === 100 ? color : color;

    const BorderLinearProgress = withStyles((theme) => ({
        root: {
            height: 10,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 2,
            borderBottomLeftRadius: 2,
        },
        colorPrimary: {
            backgroundColor:
                theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
        },
        bar: {
            borderRadius: 2,
            backgroundColor: presentingColor,
            // backgroundColor: "#1a90ff",
        },
    }))(LinearProgress);
>>>>>>> 68726eb35e132468055542bab0b8a88932e75886

    const useStyles = makeStyles({
        root: {
            flexGrow: 1,
            width: presentingWidth,
            minWidth: 200,
        },
    });
    
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <ThemeProvider theme={theme}>
            <BorderLinearProgress
<<<<<<< HEAD
                variant= "determinate" value= {props.progress} color="primary"
=======
                variant= "determinate" value= {progress}
>>>>>>> 68726eb35e132468055542bab0b8a88932e75886
            />
            </ThemeProvider>
        </div>
    );
}

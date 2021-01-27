import React from "react";
import { makeStyles, withStyles, createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

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

    const useStyles = makeStyles({
        root: {
            flexGrow: 1,
            width: props.width,
            minWidth: 200,
        },
    });
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <ThemeProvider theme={theme}>
            <BorderLinearProgress
                variant= "determinate" value= {props.progress} color="primary"
            />
            </ThemeProvider>
        </div>
    );
}

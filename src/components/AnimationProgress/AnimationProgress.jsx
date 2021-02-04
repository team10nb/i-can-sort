import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";



export default function LinearDeterminate(props) {
    const useStyles = makeStyles({
        root: {
            width: props.width,
        },
        bar: {
            borderRadius: 3,
        }
    });
    
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <LinearProgress variant='determinate' value={props.progress} className={classes.bar}/>
        </div>
    );
}

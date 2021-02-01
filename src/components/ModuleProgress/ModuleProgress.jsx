import React from "react";
import { makeStyles, withStyles} from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";



export default function ModuleProgress(props) {

    const {width, color, progress, preOne} = props;
    const presentingWidth = (width);
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
            <BorderLinearProgress
                variant= "determinate" value= {progress}
            />
        </div>
    );
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";




export default function DiscreteSlider(props) {
    const {width, step, max, handleChange, value} = props;

    const useStyles = makeStyles({
        root: {
            width: width,
        },
    });
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Slider
                value={typeof value === 'number' ? value : 0}
                aria-labelledby='Progress'
                valueLabelDisplay='auto'
                step={step}
                marks
                min={0}
                max={max}
                onChange={handleChange}
            />
        </div>
    );
}

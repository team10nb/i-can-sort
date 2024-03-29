/*
    Author: Shiliang Chen, Ruizi Han

    The progress slider of animation.
    material-ui library is used for UI.
*/

import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

// Define a special slider based on the original one
const PrettoSlider = withStyles({
    root: {
        color: "#52af77",
        height: 4,
        alignContent: "center",
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: "#fff",
        border: "2px solid currentColor",
        marginTop: -8,
        marginLeft: -12,
        "&:focus, &:hover, &$active": {
            boxShadow: "inherit",
        },
    },
    active: {},
    valueLabel: {
        left: "calc(-50% + 4px)",
    },
    track: {
        height: 5,
        borderRadius: 2,
    },
    rail: {
        height: 5,
        borderRadius: 2,
    },
    mark: {
        height: 5,
    },
})(Slider);

export default function AnimationSlider(props) {
    const { step, max, handleChange, value, width } = props;

    const useStyles = makeStyles({
        root: {
            display: "grid",
            alignContent: "center",
            width: width,
            marginTop: "10px",
        },
    });

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <PrettoSlider
                value={typeof value === "number" ? value : 0}
                aria-labelledby="Progress"
                valueLabelDisplay="auto"
                step={step}
                marks
                min={0}
                max={max}
                onChange={handleChange}
            />
        </div>
    );
}

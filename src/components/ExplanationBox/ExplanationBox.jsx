/*
    Author: Ruizi Han, Shiliang Chen

    The outside frame for explanation sentence.
*/

import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const ExplanationBoxes = withStyles({
    root: {
        display: "flex",
        fontFamily: "inherit",
        fontSize: "16px",
        fontWeight: "700",
        letterSpacing: "1px",
        borderRadius: "12px",
        backgroundColor: "white",
        marginTop: "4px",
        marginBottom: "3px",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
    },
})(Paper);

export default function ExplanationBox(props) {
    const { width, height, children } = props;
    
    const useStyles = makeStyles((theme) => ({
        root: {
            display: "grid",
            "& > *": {
                width: theme.spacing(width * 1),
                height: theme.spacing(height * 1),
                border: "3px solid white",
            },
            justifyContent: "center",
            alignContent: "center",
            verticalAlign: "center",
        },
    }));
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ExplanationBoxes variant='outlined'>
                {children}
            </ExplanationBoxes>
        </div>
    );
}

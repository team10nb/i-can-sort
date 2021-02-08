import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";


const ExplainationBox = withStyles({
    root: {
        fontFamily: "inherit",
        fontSize: "0.5em",
        fontWeight: "700",
        paddingTop: "8px",
        letterSpacing: "1px",
        textAlign: "center",
        borderRadius: "12px",
        backgroundColor: "white",
        marginTop: "4px",
        marginBottom: "3px",
    },
})(Paper);

export default function SimplePaper(props) {
    const { width } = props;
    const useStyles = makeStyles((theme) => ({
        root: {
            display: "grid",
            "& > *": {
                width: theme.spacing(width*1),
                height: theme.spacing(3),
                border: "3px solid white",
            },
            justifyContent: "center",
            alignContent: "flex-end",
        },
    }));
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ExplainationBox variant='outlined'>
                {props.children}
            </ExplainationBox>
        </div>
    );
}

/*
    Author: Yuting Jiang

    Algorithms code is on the button. Click to run the algorithm.
    material-ui library is used for UI.
*/

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import backgroundImage from "../../resource/run.png";

export default function AlgorithmButton(props) {
    //Get the content and onClick evernt for AlgorithmButton from props
    const { title, code, paddingLeft, paddingRight, onClick } = props;

    //Set css
    const styles = {
        div: {
            textAlign: "left",
            paddingLeft: paddingLeft,
            paddingRight: paddingRight,
        },
    };

    //Set css
    const useStyles = makeStyles(() => ({
        buttonBase: {
            paddingLeft: 20,
            width: 250,
            height: 270,
            borderRadius: 15,
            justifyContent: "left",
            textAlign: "left",
            "&:hover": {
                backgroundImage: `url(${backgroundImage})`,
            },
        },
    }));
    const classes = useStyles();

    return (
        <div style={styles.div}>
            <ButtonBase className={classes.buttonBase} onClick={onClick}>
                <Typography variant="body2" align="left">
                    <span>{title}</span>
                    <span>{code}</span>
                </Typography>
            </ButtonBase>
        </div>
    );
}

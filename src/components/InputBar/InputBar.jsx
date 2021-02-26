/*
    Author: Yijie Lu, Ruizi Han
*/

import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {
    makeStyles,
    withStyles,
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "730px",
        display: "flex",
        justifyContent: "center",
        alignContent: "flex-end",
        height: 40,
    },
    text: {
        marginRight:"10px",
    },
    focusVisible:{},
    buttonCreate: {
        backgroundColor: "#52af77",
        color: "white",
        marginTop: "0px",
        borderRadius: 10,
        "&:hover, &$focusVisible": { backgroundColor: "#52af77"},
        marginLeft: "10px"
    },
    buttonShuffle: {
        backgroundColor: "#97adac",
        color: "white",
        marginTop: "0px",
        borderRadius: 10,
        "&:hover, &$focusVisible": { backgroundColor: "#97adac"},
        marginLeft: "10px",
    },
}));

const CssTextField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "grey",
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "green",
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "grey",
                borderRadius: 12,
            },
            "&:hover fieldset": {
                borderColor: "grey",
            },
            "&.Mui-focused fieldset": {
                borderColor: "green",
            },
        },
        width: "500px",
    },
})(TextField);

export default function InputBar(props) {
    const {
        defaultArr,
        isValid,
        wrongMsg,
        handleChange,
        checkFormat,
        shuffle,
        inputString
    } = props;

    const classes = useStyles();

    const error = isValid ? false : true;
    const label = isValid ? "Enter positive integers from 1 to 30" : "Invalid Input";
    const helper = isValid ? " " : wrongMsg;

    return (
        <div className={classes.root}>
            <div style={{width: "550px", display:"flex"}}>
            <CssTextField
                error={error}
                label={label}
                type='search'
                helperText={helper}
                variant='outlined'
                onChange={handleChange}
                onFocus={handleChange}
                value={inputString}
                className={classes.text}
                size='small'
            />
                <Button
                    variant='contained'
                    disableElevation
                    onClick={checkFormat}
                    className={classes.buttonCreate}
                >
                    Create
                </Button>
                <Button
                    variant='contained'
                    disableElevation
                    onClick={shuffle}
                    className={classes.buttonShuffle}
                >
                    Shuffle
                </Button>

            </div>
        </div>
    );
}

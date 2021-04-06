/*
    Author: Ruizi Han, Shiliang Chen

    The bar that accept user input.
    material-ui library is used for UI.
*/

import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "730px",
        display: "flex",
        justifyContent: "center",
        alignContent: "flex-end",
        height: 40,
    },
    text: {
        marginRight: "10px",
    },
    focusVisible: {},
    buttonCreate: {
        backgroundColor: "#52af77",
        color: "white",
        marginTop: "0px",
        borderRadius: 10,
        "&:hover, &$focusVisible": { backgroundColor: "#52af77" },
        marginLeft: "10px",
    },
    buttonShuffle: {
        backgroundColor: "#97adac",
        color: "white",
        marginTop: "0px",
        borderRadius: 10,
        "&:hover, &$focusVisible": { backgroundColor: "#97adac" },
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
    },
})(TextField);

export default function InputBar(props) {
    const {
        isValid, // is the input in the right format or not
        wrongMsg, // prompt massage to user
        handleChange,
        handleKeyDown,
        checkFormat,
        shuffle,
        inputString,
        max,
        barLength,
    } = props;

    const classes = useStyles();

    const error = isValid ? false : true;
    const label = isValid
        ? "Enter positive integers from 1 to " + max
        : "Invalid Input";
    const helper = isValid ? " " : wrongMsg;

    return (
        <div className={classes.root}>
            <div style={{ width: "550px", display: "flex" }}>
                <CssTextField
                    error={error}
                    label={label}
                    type="search"
                    helperText={helper}
                    variant="outlined"
                    onChange={handleChange}
                    onFocus={handleChange}
                    value={inputString}
                    className={classes.text}
                    size="small"
                    style={{
                        width: barLength,
                    }}
                    onKeyDown={handleKeyDown}
                />
                <Button
                    variant="contained"
                    disableElevation
                    onClick={checkFormat}
                    className={classes.buttonCreate}
                >
                    Create
                </Button>
                <Button
                    variant="contained"
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

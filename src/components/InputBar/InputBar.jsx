import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {
    makeStyles,
    withStyles,
    ThemeProvider,
} from "@material-ui/core/styles";


const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#52af77",
        },
    },
});

const useStyles = makeStyles((theme) => ({
    root: {
        width: "550px",
        display: "flex",
        justifyContent: "center",
        alignContent: "flex-end",
        height: 40,
    },
    text: {
        margin: "0 10px",
    },
    button: {
        backgroundColor: "#52af77",
        color: "white",
        marginTop: "0px",
        borderRadius: 10,
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
        color,
        defaultArr,
        isValid,
        wrongMsg,
        storeInput,
        checkFormat,
    } = props;

    const classes = useStyles();

    const error = isValid ? "" : "error";
    const label = isValid ? "Enter your own array" : "Invalid Input";
    const helper = isValid ? " " : wrongMsg;

    return (
        <div className={classes.root}>
            <CssTextField
                error={error}
                label={label}
                type='search'
                helperText={helper}
                variant='outlined'
                onChange={storeInput}
                onFocus={storeInput}
                defaultValue={defaultArr}
                className={classes.text}
                size='small'
            />
            <ThemeProvider theme={theme}>
                <Button
                    variant='contained'
                    disableElevation
                    color='primary'
                    onClick={checkFormat}
                    className={classes.button}
                >
                    Create
                </Button>
            </ThemeProvider>
        </div>
    );
}
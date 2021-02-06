import React, { useState } from "react";
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
        height: 35,
    },
    text: {
        // width:'400px',
        margin: "0 10px",
    },
    button: {
        // height:'56px',
        // backgroundColor: "#52af77",
        color: "white",
        marginTop: "2px",
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
                //   onChange={(e) => {storeInput(e);}}
                onChange={storeInput}
                onFocus={storeInput}
                //   style={textStyle}
                defaultValue={defaultArr}
                className={classes.text}
                size='small'
            />
            <ThemeProvider theme={theme}>
                <Button
                    variant='contained'
                    disableElevation
                    color='primary'
                    //   onClick={this.checkFormat.bind(this)}
                    //   onClick={() => {checkFormat();}}
                    onClick={checkFormat}
                    className={classes.button}

                    //   style={buttonStyle}
                >
                    Create
                </Button>
            </ThemeProvider>
        </div>
    );
}

// let InputBarChild = forwardRef(InputBar);

// export default InputBarChild;

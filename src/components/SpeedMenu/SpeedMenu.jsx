/*
    Author: Shiliang Chen, Ruizi Han

    The menu used to change speed.
    material-ui library is used for UI.
*/

import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MuiMenuItem from "@material-ui/core/MenuItem";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

const MenuItem = withStyles({
    root: {
        justifyContent: "center",
        fontSize: "10px",
        fontFamily: "inherit",
        fontWeight: "600",
    },
})(MuiMenuItem);

export default function SpeedMenu(props) {
    const { handleClick, handleClose, anchorEl, speed } = props;

    const useStyles = makeStyles({
        root: {
            display: "inline-block",
            width: "10px",
        },
        menu: {
            width: "80px",
        },
        button: {
            width: "10px",
            paddingLeft: "0px",
            paddingRight: "0px",
            fontSize: "12px",
            fontWeight: "600",
            fontFamily: "inherit",
        },
        customTooltip: {
            // I used the rgba color for the standard "secondary" color
            fontFamily: "inherit",
            fontSize: "1.2em",
            fontWeight: "700",
            paddingTop: "5px",
            paddingBottom: "6px",
            letterSpacing: "1px",
            marginTop: "3px"
        },
    });
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Tooltip
                title='Speed'
                TransitionComponent={Zoom}
                enterDelay={500}
                leaveDelay={200}
                classes={{ tooltip: classes.customTooltip }}
                arrow
            >
                <Button
                    aria-controls='simple-menu'
                    aria-haspopup='true'
                    onClick={handleClick}
                    className={classes.button}
                    style={{ minWidth: "40px" }}
                >
                    {speed}
                </Button>
            </Tooltip>
            <Menu
                id='simple-menu'
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                getContentAnchorEl={null}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                transformOrigin={{ vertical: "top", horizontal: "center" }}
                className={classes.menu}
            >
                <MenuItem value={"1"} onClick={handleClose}>
                    0.25x
                </MenuItem>
                <MenuItem value={"2"} onClick={handleClose}>
                    0.5x
                </MenuItem>
                <MenuItem value={"4"} onClick={handleClose}>
                    1x
                </MenuItem>
                <MenuItem value={"8"} onClick={handleClose}>
                    2x
                </MenuItem>
                <MenuItem value={"16"} onClick={handleClose}>
                    4x
                </MenuItem>
            </Menu>
        </div>
    );
}

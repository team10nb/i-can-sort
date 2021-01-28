import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MuiMenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";

const MenuItem = withStyles({
    root: {
        justifyContent: "center",
    },
})(MuiMenuItem);

export default function SimpleMenu(props) {
    const { handleClick, handleClose, anchorEl, speed } = props;

    return (
        <div style={{ display: "inline-block" }}>
            <Tooltip title='Speed'>
                <Button
                    aria-controls='simple-menu'
                    aria-haspopup='true'
                    onClick={handleClick}
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
                onChange={(event, value) => console.log(value)}
                getContentAnchorEl={null}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                transformOrigin={{ vertical: "top", horizontal: "center" }}
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

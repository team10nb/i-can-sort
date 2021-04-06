/*
    Author: Shiliang Chen, Yuting Jiang

    Click to enter an algorithm learning process.
    material-ui library is used for UI.
*/

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import "@fontsource/roboto";
import "../../fonts/fonts.css";

export default function ModuleButton(props) {
    const { width, height, color, preOne, image, onClick } = props;
    const borderWidth = preOne ? "3px" : "0px";
    const presentHeight = preOne ? height - 3 : height;

    // styles of this module button
    const useStyles = makeStyles((theme) => ({
        root: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0,
            borderColor: color,
            borderStyle: "solid",
            borderWidth: borderWidth,
            borderBottomWidth: "0px",
            marginTop: 5,
            marginBottom: 0,
            display: "flex",
            flexWrap: "wrap",
            minWidth: 200,
            minHeight: 180,
            width: width,
            height: presentHeight,
        },
        image: {
            borderTopLeftRadius: 17,
            borderTopRightRadius: 17,
            position: "relative",
            height: presentHeight,
            width: "100%",
            "&:hover, &$focusVisible": {
                zIndex: 1,
                "& $imageBackdrop": {
                    backgroundColor: "",
                    opacity: 0,
                    transition: "opacity 0.3s",
                },
                "& $imageTitle": {
                    opacity: 0,
                },
            },
        },
        focusVisible: {},
        imageButton: {
            borderTopLeftRadius: 17,
            borderTopRightRadius: 17,
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: theme.palette.common.white,
        },
        imageSrc: {
            borderTopLeftRadius: 17,
            borderTopRightRadius: 17,
            backgroundImage: `url(${image.gif})`,
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
        },
        imageBackdrop: {
            borderTopLeftRadius: 17,
            borderTopRightRadius: 17,
            backgroundImage: `url(${props.image.static})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center 40%",
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: "#d5d5d5",
            opacity: 1,
            // transition: theme.transitions.create("opacity"),
            transition: "opacity 0.3s",
        },
        imageTitle: {
            position: "absolute",
            right: 0,
            bottom: 0,
            paddingBottom: 5,
            paddingRight: 10,
            fontFamily: "QuickSand",
            fontSize: 20,
            color: "white",
            fontWeight: "700",
        },
    }));

    const useRippleStyles = makeStyles(() => ({
        child: {
            backgroundColor: "grey",
        },
    }));

    const classes = useStyles();
    const rippleClasses = useRippleStyles();

    return (
        <div className={classes.root}>
            <ButtonBase
                focusRipple
                TouchRippleProps={{ classes: rippleClasses }}
                key={image.title}
                className={classes.image}
                focusVisibleClassName={classes.focusVisible}
                onClick={onClick}
            >
                {/* background of the button */}
                <span
                    className={classes.imageSrc}
                    style={{
                        backgroundColor: "#d5d5d5",
                    }}
                />

                {/* a layer beyond the background */}
                <span className={classes.imageBackdrop} />

                {/* title */}
                <span className={classes.imageButton}>
                    <Typography
                        component="span"
                        variant="subtitle1"
                        color="inherit"
                        className={classes.imageTitle}
                    >
                        {image.title}
                    </Typography>
                </span>
            </ButtonBase>
        </div>
    );
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import "@fontsource/roboto"

export default function ModuleButton(props) {
    const useStyles = makeStyles((theme) => ({
        root: {
            boxShadow: "2px 8px 30px 2px #888888",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 2,
            borderBottomLeftRadius: 2,
            marginTop: 5,
            marginBottom: 5,
            display: "flex",
            flexWrap: "wrap",
            minWidth: 200,
            minHeight: 200,
            width: props.width,
            height: props.height,
        },
        image: {
            position: "relative",
            height: 200,
            width: "100%",
            // [theme.breakpoints.down("xs")]: {
            //     width: "100% !important", // Overrides inline-style
            //     height: 100,
            // },
            "&:hover, &$focusVisible": {
                zIndex: 1,
                "& $imageBackdrop": {
                    backgroundImage: `url(${props.image.gif})`,
                    backgroundColor: "",
                    opacity: 1,
                },
                "& $imageTitle": {
                    border: "4px solid currentColor",
                    opacity: 0,
                },
            },
        },
        focusVisible: {},
        imageButton: {
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
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
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            backgroundImage: `url(${props.image.static})`,
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
        },
        imageBackdrop: {
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            backgroundImage: `url(${props.image.static})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center 40%",
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: theme.palette.common.grey,
            opacity: 0.4,
            transition: theme.transitions.create("opacity"),
        },
        imageTitle: {
            position: "absolute",
            padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
                theme.spacing(1) + 6
            }px`,
            fontFamily: "Roboto",
            fontSize: 20,
        },
    }));

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ButtonBase
                // focusRipple
                key={props.image.title}
                className={classes.image}
                focusVisibleClassName={classes.focusVisible}
                onClick={props.onClick}
            >
                <span
                    className={classes.imageSrc}
                    style={{
                        // backgroundImage: `url(${props.image.static})`,
                        backgroundColor: 'grey',
                    }}
                />
                <span className={classes.imageBackdrop} />

                <span className={classes.imageButton}>
                    <Typography
                        component='span'
                        variant='subtitle1'
                        color='inherit'
                        className={classes.imageTitle}
                    >
                        {props.image.title}
                    </Typography>
                </span>
            </ButtonBase>
        </div>
    );
}

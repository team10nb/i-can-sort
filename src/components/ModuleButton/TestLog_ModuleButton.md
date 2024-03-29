reason/description里面写为什么test fail了
对**组件代码**做修改和修改的理由写在每个代码块前的注释里（由于没有通过test，而对**原码**做的修改）
有必要的话，贴一下test的代码
第一个version可以不写注释 最后一个version(pass的version)可以不写reason

#### ComponentName: ModuleButton

|Test No.|Date|Pass/Fail|Failed test(s)|Reason/Description|Modified version|
|-------|----|---------|-------------------|----------------|----------------|
|1 | 1.22 | Fail | All | No code has been constructed |version 1|
|2 | 1.22 | Pass |/|Initial version is created|version 2|
|3 | 3.13 | Fail |snapshot|ripple color changed to grey and border radius changed|version 3|


##### Code - version 2
```javascript
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

```


##### Code - version 3
```javascript
    /*
    Author: Shiliang Chen, Yuting Jiang
*/

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import "@fontsource/roboto";

export default function ModuleButton(props) {
    const {width, height, color, preOne, image, onClick} = props;
    const borderWidth = preOne ? "3px" : "0px";
    const presentHeight = preOne ? height - 3 : height;

    // styles of this module button
    const useStyles = makeStyles((theme) => ({
        root: {
            // boxShadow: "2px 8px 30px 2px #888888",
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
            // [theme.breakpoints.down("xs")]: {
            //     width: "100% !important", // Overrides inline-style
            //     height: 100,
            // },
            "&:hover, &$focusVisible": {
                zIndex: 1,
                "& $imageBackdrop": {
                    backgroundImage: `url(${image.gif})`,
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
            // backgroundImage: `url(${props.image.static})`,
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
            // backgroundColor: theme.palette.common.grey,
            backgroundColor: "#d5d5d5",
            opacity: 1,
            transition: theme.transitions.create("opacity"),
        },
        imageTitle: {
            position: "absolute",
            right: 0,
            bottom: 0,
            // padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
            //     theme.spacing(1) + 6
            // }px`,
            paddingBottom: 5,
            paddingRight: 10,
            // fontFamily: "Roboto",
            fontFamily: "Quicksand",
            fontWeight: 1000,
            fontSize: 20,
            color: "white",
        },

    }));

    const useRippleStyles = makeStyles((theme) => ({
        child:{
            backgroundColor: "grey"
        }
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
                        // backgroundImage: `url(${props.image.static})`,
                        backgroundColor: "#d5d5d5",
                    }}
                />

                {/* a layer beyond the background */}
                <span className={classes.imageBackdrop} />

                {/* title */}
                <span className={classes.imageButton}>
                    <Typography
                        component='span'
                        variant='subtitle1'
                        color= 'inherit'
                        className={classes.imageTitle}
                    >
                        {image.title}
                    </Typography>
                </span>

            </ButtonBase>
        </div>
    );
}


```

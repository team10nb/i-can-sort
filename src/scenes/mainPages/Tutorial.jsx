/*
    Author: Yijie Lu
*/
// The tutorial main page, consists of algorithm modules, set and help buttons, and the choice menu
import React from "react";
import { Link } from "react-router-dom";
import Set from "../../components/Buttons/Set";
import Help from "../../components/Buttons/Help";
import Module from "../../components/Module/Module";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import logo1 from "../../Resource/Chelp1.png";
import logo2 from "../../Resource/Thelp2.png";
import logo3 from "../../Resource/Thelp3.png";
import { motion } from "framer-motion";
import img_swap from "../../Resource/swap.png";
import img_loop from "../../Resource/loop.png";
import img_terminology from "../../Resource/terminology.png";
//Set css
const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        "& > *": {
            marginLeft: 89,
        },
        marginLeft: -66,
    },
    button: {
        width: 230,
        fontFamily: "Quicksand",
        fontWeight: 1000,
    },
    grid: {
        flexGrow: 1,
        width: 900,
        height: 600,
        paddingLeft: 30,
        paddingTop: 30,
    },
    div: {
        textAlign: "center",
        height: 690,
        width: 960,
    },
    buttonSet: {
        display: "flex",
        "& > *": {
            margin: theme.spacing(0),
        },
    },
}));

//Set theme color
const color = "#4caf50";

//Return a grid contains 8 modules that represent 8 sorting algorithms，set and help buttons，and the choice menu
//Click the modules to jump to the corresponding algorithm learning page
//The progress bar under each module represents the learning progress of the algorithm
export default function TutorialMainPage() {
    const classes = useStyles();

    const localPre = localStorage.getItem("tutorialPre")
    ? JSON.parse(localStorage.getItem("tutorialPre"))
    : null;

    const localProgress = localStorage.getItem("tutorialProgress")
    ? JSON.parse(localStorage.getItem("tutorialProgress"))
    : [false, false, false];

    const handleClick = (title, index) => () => {
        //store previous visited algorithm and set its progress is finished
        localStorage.setItem("tutorialPre", JSON.stringify(title));
        localProgress[index] = true;
        localStorage.setItem("tutorialProgress", JSON.stringify(localProgress));
    };

    const handleProgress = (index) => {
        //set progess bar
        const progress = localProgress[index] ? 100 : 0;
        return progress;
    };

    const handlePre = (title) => {
        //set previous visited algorithm
        const preOne = title === localPre ? true : false;
        return preOne;
    };

    const images = [
        {
            static: img_swap,
            gif: "catch.gif",
            title: "Swap",
            width: "20%",
        },
        {
            static: img_loop,
            gif: "catch.gif",
            title: "Loop",
            width: "20%",
        },
        {
            static: img_terminology,
            gif: "catch.gif",
            title: "Terminology",
            width: "20%",
        },
    ];

    const swap = {
        image: images[0],
        width: 275,
        height: 280,
        onClick: handleClick(images[0].title, 0),
        progress: handleProgress(0),
        color: color,
        preOne: handlePre(images[0].title),
    };

    const loop = {
        image: images[1],
        width: 275,
        height: 280,
        onClick: handleClick(images[1].title, 1),
        progress: handleProgress(1),
        color: color,
        preOne: handlePre(images[1].title),
    };

    const terminology = {
        image: images[2],
        width: 275,
        height: 280,
        onClick: handleClick(images[2].title, 2),
        progress: handleProgress(2),
        color: color,
        preOne: handlePre(images[2].title),
    };

    const helpProp = {
        logo1: logo1,
        logo2: logo2,
        logo3: logo3,
        color: color,
    };

    return (
        <motion.div
            className={classes.div}
            initial={{ opacity: 0.2, x: "-100vw" }}
            animate={{
                opacity: 1,
                scale: 1,
                x: "0vw",
            }}
            transition={{
                type: "spring",
                stiffness: 250,
                damping: 25,
            }}
            exit={{ opacity: 0.2, scale: 0, x: "-100vw" }}
        >
            <div className={classes.grid}>
                <Grid  container >
                    <Grid item xs={6} sm={3}><div style={{height:25}}></div></Grid> 

                    <Grid container item xs={12}  spacing={0}>
                        <Grid item xs={4} >
                            <Link to="/TutorialSubPage/Swap">
                                <Module {...swap} />
                            </Link>
                        </Grid>

                        <Grid item xs={4} >
                            <Link to="/TutorialSubPage/Loop">
                                <Module {...loop} />
                            </Link>
                        </Grid>

                        <Grid item xs={4} >
                            <Link to="/TutorialSubPage/Terminology">
                                <Module {...terminology} />
                            </Link>
                        </Grid>
                   
                    </Grid>

                    <Grid item xs={6} sm={3}><div style={{height:130}}></div></Grid> 

                    <Grid item xs={12}>
                        <div className={classes.buttonSet}>
                            <Set />
                            <Help {...helpProp} />
                        </div>
                    </Grid>

                    <Grid item xs={12}>
                        <div style={{ marginLeft: -8, marginTop: 50 }}>
                            <TutorialChoiceMenu />
                        </div>
                    </Grid>
                </Grid>
            </div>
        </motion.div>
    );
}

//Return five button, which are 'Tutorial', 'Procedure', 'Efficiency', 'Correctness', and 'Exercise'
//The Efficiency button is theme color without jump function
export function TutorialChoiceMenu() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button
                variant="contained"
                color="primary"
                disableElevation
                className={classes.button}
                style={{ color: "white", backgroundColor: color }}
            >
                Tutorial
            </Button>

            <Link to={{pathname:"/ProcedureMainPage", state:{id:"tutorial"}}} style={{ textDecoration: "none" }}>
                <Button variant="contained" className={classes.button}>
                    Procedure
                </Button>
            </Link>

            <Link to="/CorrectnessMainPage" style={{ textDecoration: "none" }}>
                <Button variant="contained" className={classes.button}>
                    Correctness
                </Button>
            </Link>
        </div>
    );
}

export { color };

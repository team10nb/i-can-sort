/*
    Author: Yuting Jiang, Yijie Lu

    The correctness main page, consists of algorithm modules, set and help buttons, and the choice menu.
*/

import React from "react";
import { Link } from "react-router-dom";
import Set from "../../components/SetAndHelp/Set";
import Help from "../../components/SetAndHelp/Help";
import Module from "../../components/Module/Module";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import logo0 from "../../resource/Chelp1.png";
import logo1 from "../../resource/Chelp2.png";
import logo2 from "../../resource/Chelp3.png";
import { motion } from "framer-motion";
import img_tutorial from "../../resource/tutorial.png";
import img_proof from "../../resource/proof.png";
import gif_tutorial from "../../resource/tutorial.gif";
import gif_proof from "../../resource/proof.gif";

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
        width: 900,
        height: 600,
        
    },
    div: {
        display:"flex",
        alignContent:"center",
        justifyContent:"center",
        textAlign: "center",
        height: 700,
        width: 1050,
        paddingTop: 80,
    },
    buttonSet: {
        display: "flex",
        marginTop: 30,
    },
}));

//Set theme color
const color = "#ff6f00";

//Return a grid contains 8 modules that represent 8 sorting algorithms，set and help buttons，and the choice menu
//Click the modules to jump to the corresponding algorithm learning page
//The progress bar under each module represents the learning progress of the algorithm
export default function CorrectnessMainPage() {
    const classes = useStyles();

    // get progress info from local
    const localPre = localStorage.getItem("CorrectnessPre")
        ? JSON.parse(localStorage.getItem("CorrectnessPre"))
        : null;
    const tutorialProgress = localStorage.getItem("CorrectTutorial")
        ? JSON.parse(localStorage.getItem("CorrectTutorial"))
        : 0;
    const proofProgress = localStorage.getItem("CorrectProof")
        ? JSON.parse(localStorage.getItem("CorrectProof"))
        : 0;

    const handleClick = (title) => () => {
        //store previous visited algorithm
        localStorage.setItem("CorrectnessPre", JSON.stringify(title));
    };

    const handleProgress = (title) => {
        var progress = 0;

        if (title === "Tutorial" && tutorialProgress != 0) {
            for (var i = 0; i < tutorialProgress.length; i++) {
                if (tutorialProgress[i]) progress += 20;
            }
        }

        if (title === "Proof" && proofProgress != 0) {
            progress = 10;
            for (var j = 0; j < proofProgress.length; j++) {
                if (proofProgress[j]) progress += 15;
            }
        }

        return progress;
    };

    const handlePre = (title) => {
        //set previous visited algorithm
        const preOne = title === localPre ? true : false;
        return preOne;
    };

    const images = [
        {
            static: img_tutorial,
            gif: gif_tutorial,
            title: "Tutorial",
            width: "20%",
        },
        {
            static: img_proof,
            gif: gif_proof,
            title: "Proof",
            width: "20%",
        },
    ];

    const tutorialProps = {
        image: images[0],
        width: 425,
        height: 435,
        onClick: handleClick(images[0].title),
        progress: handleProgress(images[0].title),
        color: color,
        preOne: handlePre(images[0].title),
    };

    const proofProps = {
        image: images[1],
        width: 425,
        height: 435,
        onClick: handleClick(images[1].title),
        progress: handleProgress(images[1].title),
        color: color,
        preOne: handlePre(images[1].title),
    };

    const helpProp = {
        logo0: logo0,
        logo1: logo1,
        logo2: logo2,
        color: color,
    };

    return (
        <motion.div
            className={classes.div}
            initial={{ opacity: 0.2, x: "100vw" }}
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
            exit={{ opacity: 0.2, scale: 0, x: "100vw" }}
        >
            <div className={classes.grid}>
                <Grid container>
                    <Grid container item xs={12} spacing={0}>
                        <Grid item xs={6}>
                            <Link to="/Correctness/Tutorial">
                                <Module {...tutorialProps} />
                            </Link>
                        </Grid>

                        <Grid item xs={6}>
                            <Link to="/Correctness/Proof">
                                <Module {...proofProps} />
                            </Link>
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <div className={classes.buttonSet}>
                            <Set />
                            <Help {...helpProp} />
                        </div>
                    </Grid>

                    <Grid item xs={12}>
                        <div style={{ marginLeft: -8, marginTop: 20 }}>
                            <CorrectnessChoiceMenu />
                        </div>
                    </Grid>
                </Grid>
            </div>
        </motion.div>
    );
}

//Return five button, which are 'Tutorial', 'Procedure', 'Efficiency', 'Correctness', and 'Exercise'
//The Correctness button is theme color without jump function
export function CorrectnessChoiceMenu() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Link to="/TutorialMainPage" style={{ textDecoration: "none" }}>
                <Button variant="contained" className={classes.button}>
                    Tutorial
                </Button>
            </Link>

            <Link to="/ProcedureMainPage" style={{ textDecoration: "none" }}>
                <Button variant="contained" className={classes.button}>
                    Procedure
                </Button>
            </Link>

            <Button
                variant="contained"
                color="primary"
                disableElevation
                className={classes.button}
                style={{ color: "white", backgroundColor: color }}
            >
                Correctness
            </Button>
        </div>
    );
}

export { color };

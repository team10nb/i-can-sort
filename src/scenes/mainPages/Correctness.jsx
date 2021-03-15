// The correctness main page, consists of algorithm modules, set and help buttons, and the choice menu
import React from "react";
import { Link } from "react-router-dom";
import Set from "../../components/Buttons/Set";
import Help from "../../components/Buttons/Help";
import Module from "../../components/Module/Module";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import logo1 from "../../Resource/Chelp1.png";
import logo2 from "../../Resource/Chelp2.png";
import logo3 from "../../Resource/Chelp3.png";
import { motion } from "framer-motion";
import img_tutorial from "../../Resource/tutorial.png";
import img_proof from "../../Resource/proof.png";

//Set css
const useStyles = makeStyles((theme) => ({
    root: {
        // minWidth: 200,
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
const color = "#ff6f00";

//Return a grid contains 8 modules that represent 8 sorting algorithms，set and help buttons，and the choice menu
//Click the modules to jump to the corresponding algorithm learning page
//The progress bar under each module represents the learning progress of the algorithm
export default function CorrectnessMainPage(props) {
    const classes = useStyles();
    //get progress info from local
    //  const localPre = localStorage.getItem("pre") ? JSON.parse(localStorage.getItem("pre")) : null;
    //  const localProgress = localStorage.getItem("progress") ? JSON.parse(localStorage.getItem("progress")) : 0;

    //set progress
    //  const progress = props.location.state ? props.location.state : localProgress;
    //  localStorage.setItem("progress", JSON.stringify(progress));

    //  const handleClick = (title) => () => {
    //    //store previous visited algorithm
    //    localStorage.setItem("pre", JSON.stringify(title));
    //  }

    //  const handlePre = (title) => {
    //    //set previous visited algorithm
    //    const preOne = (title === localPre) ? true : false;
    //    return preOne;
    //  }

    const images = [
        {
            static: img_tutorial,
            gif: "catch.gif",
            title: "Tutorial",
            width: "20%",
        },
        {
            static: img_proof,
            gif: "catch.gif",
            title: "Proof",
            width: "20%",
        },
    ];

    //   const TutorialProps = {
    //     image: images[0],
    //     width: 200,
    //     height: 200,
    //     onClick: handleClick(images[0].title),
    //     progress: progress,
    //     color: color,
    //     preOne: handlePre(images[0].title),
    // };

    const props1 = {
        image: images[1],
        width: 425,
        height: 435,
        // onClick: handleClick(images[3].title),
        progress: 0,
        color: color,
        // preOne: false,
    };

    const props2 = {
        image: images[0],
        width: 425,
        height: 435,
        // onClick: handleClick(images[3].title),
        progress: 0,
        color: color,
        // preOne: false,
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
                <Grid container >
                    <Grid container item xs={12}  spacing={0}>
                    <Grid item xs={6} >
                        <Link to="/Correctness/Tutorial">
                            <Module {...props2} />
                        </Link>
                    </Grid>

                    <Grid item xs={6} >
                        <Link to="/Correctness/Prove">
                            <Module {...props2} />
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
                        <div style={{ marginLeft: -8, marginTop: 50 }}>
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

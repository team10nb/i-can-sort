/*
    Author: Yuting Jiang, Yijie Lu

    The procedure main page, consists of algorithm modules, set and help buttons, and the choice menu.
*/

import React from "react";
import { Link } from "react-router-dom";
import Set from "../../components/SetAndHelp/Set";
import Help from "../../components/SetAndHelp/Help";
import Module from "../../components/Module/Module";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FirstInBackdrop from "../../components/FirstInBackdrop/FirstInBackdrop";
import logo0 from "../../resource/Phelp1.png";
import logo1 from "../../resource/Phelp2.png";
import logo2 from "../../resource/Phelp3.png";
import img_bubble from "../../resource/bubble.png";
import img_selection from "../../resource/selection.png";
import img_insertion from "../../resource/insert.png";
import img_quick from "../../resource/quick.png";
import img_merge from "../../resource/merge.png";
import img_heap from "../../resource/heap.png";
import gif_bubble from "../../resource/bubble.gif";
import gif_selection from "../../resource/selection.gif";
import gif_insertion from "../../resource/insertion.gif";
import gif_quick from "../../resource/quick.gif";
import gif_merge from "../../resource/merge.gif";
import gif_heap from "../../resource/heap.gif";
import { motion } from "framer-motion";
import { isUndefined } from "lodash";

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
const color = "#1565c0";

function setProgress(algorithm) {
    const progressArray = localStorage.getItem(algorithm)
        ? JSON.parse(localStorage.getItem(algorithm))
        : 0;
    return calculateProgress(progressArray);
}

function calculateProgress(progressArray) {
    let value = 0;
    let count = 0;
    for (var i = 0; i < progressArray.length; i++) {
        if (progressArray[i] === true) {
            value += 30;
            count++;
        }
    }
    if (count === progressArray.length) value = 100;
    return value;
}

//Return a grid contains six modules that represent six sorting algorithms，set and help buttons，and the choice menu
//Click the modules to jump to the corresponding algorithm learning page
//The progress bar under each module represents the learning progress of the algorithm
export default function ProcedureMainPage(props) {
    const classes = useStyles();

    const localPre = localStorage.getItem("pre")
        ? JSON.parse(localStorage.getItem("pre"))
        : null;

    localStorage.getItem("first")
    ? JSON.parse(localStorage.getItem("first"))
    : localStorage.setItem("first", JSON.stringify(true));

    const firstIn = JSON.parse(localStorage.getItem("first"));
    
    localStorage.getItem("snack")
    ? JSON.parse(localStorage.getItem("snack"))
    : localStorage.setItem("snack", JSON.stringify(0));
    

    const handleClick = (title) => () => {
        //store previous visited algorithm
        localStorage.setItem("pre", JSON.stringify(title));
    };

    const handlePre = (title) => {
        //set previous visited algorithm
        const preOne = title === localPre ? true : false;
        return preOne;
    };

    const images = [
        {
            static: img_bubble,
            gif: gif_bubble,
            title: "Bubble sort",
            width: "20%",
        },
        {
            static: img_selection,
            gif: gif_selection,
            title: "Selection sort",
            width: "20%",
        },
        {
            static: img_insertion,
            gif: gif_insertion,
            title: "Insertion sort",
            width: "20%",
        },
        {
            static: img_quick,
            gif: gif_quick,
            title: "Quick sort",
            width: "20%",
        },
        {
            static: img_merge,
            gif: gif_merge,
            title: "Merge sort",
            width: "20%",
        },
        {
            static: img_heap,
            gif: gif_heap,
            title: "Heap sort",
            width: "20%",
        },
    ];

    const bubbleProps = {
        image: images[0],
        width: 200,
        height: 200,
        onClick: handleClick(images[0].title),
        progress: setProgress("bubble"),
        color: color,
        preOne: handlePre(images[0].title),
    };

    const selectionProps = {
        image: images[1],
        width: 200,
        height: 200,
        onClick: handleClick(images[1].title),
        progress: setProgress("selection"),
        color: color,
        preOne: handlePre(images[1].title),
    };

    const insertionProps = {
        image: images[2],
        width: 200,
        height: 200,
        onClick: handleClick(images[2].title),
        progress: setProgress("insertion"),
        color: color,
        preOne: handlePre(images[2].title),
    };

    const quickProps = {
        image: images[3],
        width: 200,
        height: 200,
        onClick: handleClick(images[3].title),
        progress: setProgress("quick"),
        color: color,
        preOne: handlePre(images[3].title),
    };

    const mergeProps = {
        image: images[4],
        width: 200,
        height: 200,
        onClick: handleClick(images[4].title),
        progress: setProgress("merge"),
        color: color,
        preOne: handlePre(images[4].title),
    };

    const heapProps = {
        image: images[5],
        width: 200,
        height: 200,
        onClick: handleClick(images[5].title),
        progress: setProgress("heap"),
        color: color,
        preOne: handlePre(images[5].title),
    };

    const helpProp = {
        logo0: logo0,
        logo1: logo1,
        logo2: logo2,
        color: color,
    };

    const handleInner = () => {
        if (isUndefined(props.location.state)) {
            return "-100vw";
        } else {
            const lastPage = props.location.state.id;
            const inner = lastPage === "tutorial" ? "100vw" : "-100vw";
            return inner;
        }
    };

    return (
        <div>
            <motion.div
                className={classes.div}
                initial={{ opacity: 0.2, x: handleInner() }}
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
                    <Grid container spacing={0}>
                        <Grid item xs={6} sm={3}>
                            <Link to="/ProcedureSubpage/Bubble">
                                <Module {...bubbleProps} />
                            </Link>
                        </Grid>

                        <Grid item xs={6} sm={3}>
                            <Link to="/ProcedureSubpage/Selection">
                                <Module {...selectionProps} />
                            </Link>
                        </Grid>

                        <Grid item xs={6} sm={3}>
                            <Link to="/ProcedureSubpage/Insertion">
                                <Module {...insertionProps} />
                            </Link>
                        </Grid>

                        <Grid item xs={6} sm={3}>
                            <Link to="/ProcedureSubpage/Quick">
                                <Module {...quickProps} />
                            </Link>
                        </Grid>

                        <Grid item xs={6} sm={3}>
                            <Link to="/ProcedureSubpage/Merge">
                                <Module {...mergeProps} />
                            </Link>
                        </Grid>

                        <Grid item xs={6} sm={3}>
                            <Link to="/ProcedureSubpage/Heap">
                                <Module {...heapProps} />
                            </Link>
                        </Grid>

                        <Grid item xs={12}>
                            <div className={classes.buttonSet}>
                                <Set />
                                <Help {...helpProp} />
                            </div>
                        </Grid>

                        <Grid item xs={12}>
                            <div style={{ marginLeft: -8, marginTop: 20 }}>
                                <ProcedureChoiceMenu />
                            </div>
                        </Grid>
                    </Grid>
                </div>
                {firstIn===true ? <FirstInBackdrop /> : <div />}
            </motion.div>

           
        </div>
    );
}

//Return three button, which are 'Tutorial', 'Procedure', and 'Correctness'
//The Procedure button is theme color without jump function
export function ProcedureChoiceMenu() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Link to="/TutorialMainPage" style={{ textDecoration: "none" }}>
                <Button variant="contained" className={classes.button}>
                    Tutorial
                </Button>
            </Link>

            <Button
                variant="contained"
                disableElevation
                className={classes.button}
                style={{ color: "white", backgroundColor: color }}
            >
                Procedure
            </Button>

            <Link to="/CorrectnessMainPage" style={{ textDecoration: "none" }}>
                <Button variant="contained" className={classes.button}>
                    Correctness
                </Button>
            </Link>
        </div>
    );
}

export { color };

// The procedure main page, consists of algorithm modules, set and help buttons, and the choice menu
import React from "react";
import { Link } from "react-router-dom";
import Set from "../../components/Buttons/Set";
import Help from "../../components/Buttons/Help";
import Module from "../../components/Module/Module";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FirstInBackdrop from "../../components/FirstInBackdrop/FirstInBackdrop";
import logo0 from "../../Resource/Phelp1.png";
import logo1 from "../../Resource/Phelp2.png";
import logo2 from "../../Resource/Phelp3.png";
import img_bubble from "../../Resource/bubble.png";
import img_selection from "../../Resource/selection.png";
import img_insertion from "../../Resource/insert.png";
import img_quick from "../../Resource/quick.png";
import img_merge from "../../Resource/merge.png";
import img_heap from "../../Resource/heap.png";
import { motion } from "framer-motion";
import { isUndefined } from 'lodash';

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
        alignItems: "center",
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

//Return a grid contains 8 modules that represent 8 sorting algorithms，set and help buttons，and the choice menu
//Click the modules to jump to the corresponding algorithm learning page
//The progress bar under each module represents the learning progress of the algorithm
export default function ProcedureMainPage(props) {
    const classes = useStyles();

    const localPre = localStorage.getItem("pre") ? JSON.parse(localStorage.getItem("pre")) : null;

    if (localStorage.getItem("first") == 1) {
        localStorage.setItem("first", JSON.stringify(1));
    } else if (localStorage.getItem("first") == 0) {
        localStorage.setItem("first", JSON.stringify(0));
    } else {
        localStorage.setItem("first", JSON.stringify(1));
    }

    if (localStorage.getItem("snack") == 1) {
        localStorage.setItem("snack", JSON.stringify(1));
    } else if (localStorage.getItem("snack") == 0) {
        localStorage.setItem("snack", JSON.stringify(0));
    } else {
        localStorage.setItem("snack", JSON.stringify(0));
    }

    const firstIn = localStorage.getItem("first")
        ? JSON.parse(localStorage.getItem("first"))
        : null;

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
            gif: "bubble.gif",
            title: "Bubble sort",
            width: "20%",
        },
        {
            static: img_selection,
            gif: "selection.gif",
            title: "Selection sort",
            width: "20%",
        },
        {
            static: img_insertion,
            gif: "insertion.gif",
            title: "Insertion sort",
            width: "20%",
        },
        {
            static: img_quick,
            gif: "quick.gif",
            title: "Quick sort",
            width: "20%",
        },
        {
            static: img_merge,
            gif: "merge.gif",
            title: "Merge sort",
            width: "20%",
        },
        {
            static: img_heap,
            gif: "heap.gif",
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

    const props2 = {
        image: images[4],
        width: 200,
        height: 200,
        // onClick: handleClick(images[3].title),
        progress: 0,
        color: color,
        preOne: false,
    };

    const helpProp = {
        logo0: logo0,
        logo1: logo1,
        logo2: logo2,
        color: color,
    };

    const handleInner = () => {
        if(isUndefined(props.location.state)){
            return "-100vw";
        }else{
            const lastPage = props.location.state.id;
            const inner = lastPage === "tutorial" ? "100vw" : "-100vw";
            return inner;
        }
        
    };

    return (
        <div>
            <motion.div
                className={classes.div}
                // initial={{ opacity: 0.2, x: "-100vw" }}
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

                        {/* <Grid item xs={6} sm={3}>
                        </Grid> */}

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
            </motion.div>
           
            {firstIn == 1 ? <FirstInBackdrop /> : <div />}
        </div>
    );
}


//Return five button, which are 'Tutorial', 'Procedure', 'Efficiency', 'Correctness', and 'Exercise'
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

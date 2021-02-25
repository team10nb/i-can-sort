import React, { useState } from "react";
import {
    makeStyles,
    createMuiTheme,
    ThemeProvider,
} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import InputBox from "../../../../components/InputBox/InputBox";
import ExplainationBox from "../../../../components/ExplainationBox/ExplainationBox";
import { motion } from "framer-motion";
import ErrorIcon from "@material-ui/icons/Error";

// a framer motion transition attributes
const spring = {
    type: "spring", // a framer motion type that simulates spring
    damping: 15, //Strength of opposing force. If set to 0, spring will oscillate indefinitely
    stiffness: 150, //Stiffness of the spring. Higher values will create more sudden movement. Set to 100 by default.
    mass: 0.1, // Mass of the moving object. Higher values will result in more lethargic movement
};

const useStyles = makeStyles((theme) => ({
    div: {
        display: "flex",
        // width: 1020,
        "& > *": {
            margin: theme.spacing(1),
        },
    },
    card: {
        // margintop: 10,
        background: "#F0F0F0",
        width: 550,
        height: 530,
        display: "grid",
        justifyContent: "center",
    },

    InputBox: {
        marginTop: 5,
        background: "#F0F0F0",
        width: 180,
        // height: 520,
        alignItems: "center",
    },
    bars: {
        listStyle: "none",
        padding: 0,
        margin: 0,
        marginBottom: 15,
        position: "relative",
        display: "flex",
        flexWrap: "wrap-reverse",
        justifyContent: "center",
    },
    bar: {
        listStyle: "none",
        padding: 0,
        margin: 0,

        boxShadow: "0px 0px 2px 2px #88888833",
        borderRadius: "10px",
        marginBottom: "10px",
        marginRight: "15px",
        marginLeft: "15px",
        width: "30px",
        height: "140px",
        fontSize: "0.1em",
        justifyContent: "center",
    },
    barNumber: {
        fontSize: "16px",
        marginTop: "-23px",
        textAlign: "center",
        fontWeight: "600",
    },
    switchAnimation: {
        display: "grid",
        justifyContent: "center",
        alignContent: "flex-end",
        marginTop: "100px",
        height: "300px",
        width: "300px",
    },
}));

export default function Input(props) {
    const classes = useStyles();
    const [isCompleteLegal, setIsCompleteLegal] = useState([
        false,
        false,
        false,
    ]);
    const [isCompleteIllegal, setIsCompleteIllegal] = useState([
        false,
        false,
        false,
    ]);
    const [isLegalPlaying, setIsLegalPlaying] = useState(true);
    const legalArrays = [
        [1, 2, 3, 4],
        [6, 3, 1, 7],
        [8, 5, 4, 7],
    ];
    const illegalArrays = [
        ["a", "b", "c", "d"],
        ["e", "f", "g", "h"],
        ["i", "j", "k", "l"],
    ];
    // The bars displayed to visulise the numbers
    const [bars, setBars] = useState(legalArrays[0]);

    const legalTimeoutIds = [];
    const illegalTimeoutIds = [];

    const legalClick = () => {
        setIsLegalPlaying(true);
        setBars(legalArrays[0]);
        setIsCompleteLegal([false, false, false]);

        legalArrays.forEach((item, i) => {
            let timeoutId = setTimeout(
                (item) => {
                    if (i === 0) {
                        setIsCompleteLegal([true, false, false]);
                    } else if (i === 1) {
                        setIsCompleteLegal([true, true, false]);
                    } else if (i === 2) {
                        setIsCompleteLegal([true, true, true]);
                    }
                    setBars(item.sort((a, b) => a - b));
                },
                (i + 1) * 700, //time interval
                item
            );
            legalTimeoutIds.push(timeoutId);
        });
    };

    const illegalClick = () => {
        setIsLegalPlaying(false);
        setBars(illegalArrays[0]);
        setIsCompleteIllegal([false, false, false]);
        illegalArrays.forEach((item, i) => {
            let timeoutId = setTimeout(
                (item) => {
                    if (i === 0) {
                        setIsCompleteIllegal([true, false, false]);
                    } else if (i === 1) {
                        setIsCompleteIllegal([true, true, false]);
                    } else if (i === 2) {
                        setIsCompleteIllegal([true, true, true]);
                    }
                    setBars(item);
                },
                (i + 1) * 700, //time interval
                item
            );
            illegalTimeoutIds.push(timeoutId);
        });
    };

    return (
        <div className={classes.div}>
            <Card className={classes.card}>
                <div className={classes.switchAnimation}>
                    <div className={classes.bars}>
                        {isLegalPlaying ? (
                            bars.map((value, key) => (
                                <motion.li
                                    key={key} // each bar's identification
                                    layout
                                    transition={spring}
                                    style={{
                                        backgroundColor: "#00BFFF",
                                        height: value * 10 + "px",
                                    }}
                                    className={classes.bar}
                                >
                                    <div className={classes.barNumber}>
                                        {value}
                                    </div>
                                </motion.li>
                            ))
                        ) : (
                            <div style={{display: "grid",
                            justifyContent: "center",
                            alignContent: "flex-end"}}>
                                <ErrorIcon style={{ fontSize: 60, color: "red" }} />
                                
                            </div>
                            
                        )}
                    </div>
                    {isLegalPlaying? "" : <span style={{fontWeight:"600", marginBottom:"8px"}}>Error! Could not parse ILLEGAL input</span>}
                    <ExplainationBox width="30" height={3}>
                        {bars.toString()}
                    </ExplainationBox>
                </div>
            </Card>
            <InputBox
                className={classes.InputBox}
                legalArrays={legalArrays}
                illegalArrays={illegalArrays}
                isCompleteIllegal={isCompleteIllegal}
                isCompleteLegal={isCompleteLegal}
                legalClick={legalClick}
                illegalClick={illegalClick}
            />
        </div>
    );
}

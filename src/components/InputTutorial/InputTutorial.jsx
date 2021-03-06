/*
    Author: Yijie Lu, Shiliang Chen
*/

import React, { useState } from "react";
import {
    makeStyles,
} from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import InputTable from "../InputTable/InputTable";
import ExplainationBox from "../ExplainationBox/ExplainationBox";
import Link from '@material-ui/core/Link';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import Typography from '@material-ui/core/Typography';
import { motion } from "framer-motion";
import ErrorIcon from "@material-ui/icons/Error";
import { random } from "lodash";
import { Divider } from "@material-ui/core";
import {color as CorrectnessColor} from '../../scenes/mainPages/Correctness';
import TutorialLink from './TutorialLink';


const spring = {
    type: "spring", // a framer motion type that simulates spring
    damping: 15, //Strength of opposing force. If set to 0, spring will oscillate indefinitely
    stiffness: 150, //Stiffness of the spring. Higher values will create more sudden movement. Set to 100 by default.
    mass: 0.1, // Mass of the moving object. Higher values will result in more lethargic movement
};

const useStyles = makeStyles((theme) => ({
    div: {
        display: "flex",
        width: 740,
        height: 530,
        // marginTop:630,
        marginLeft:20,
        "& > *": {
            margin: theme.spacing(1),
        },
    },
    card: {
        // margintop: 10,
        background: "#F0F0F0",
        width: 550,
        height: 510,
        display: "grid",
        justifyContent: "center",
    },
    InputBox: {
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
        marginBottom: "50px",
        marginLeft: "45px",
        height: "300px",
        width: "350px",
    },
    explanation:{
        display: "flex",
        '& > *': {
            marginTop: theme.spacing(1.3),
          },
        '& > * + *': {     
            marginLeft: theme.spacing(2),
        },
        height:"48px",
       
    },
    links:{
        display: "flex",
        '& > *': {
            marginTop: theme.spacing(1.4),
          },
        '& > * + *': {     
            marginLeft: theme.spacing(2),
        },
        height:"50px"
    },
    text:{
        display: "flex",
        '& > * + *': {     
            marginLeft: theme.spacing(0),
        },
        height:"50px"
    },
}));

export default function InputTutorial(props) {
    const classes = useStyles();

    const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    // The maximum value of pairs
    const PAIR = 3;
    // The maximum value of input number
    const MAXNUMBER = 7;
    // The minimun value of input number
    const MINNUMBER = 1;
    // The maximum length of input array
    const LENGTH = 4;
    // It is used to clean timeouts to pause
    const [timeOutIds, setTimeOutIds] = useState([]);
    // Indicate whether a legal input demonstration complete
    const [isCompleteLegal, setIsCompleteLegal] = useState([
        false,
        false,
        false,
    ]);
    // Indicate whether a illegal input demonstration complete
    const [isCompleteIllegal, setIsCompleteIllegal] = useState([
        false,
        false,
        false,
    ]);
    // Indicate whether 
    const [isLegalPlaying, setIsLegalPlaying] = useState(true);
    // The legal string
    const [legalString, setLegalString] = useState([
        3,
        5,
        1,
    ]);
    // The legal array
    const [legalArray, setLegalArray] = useState([
        3,
        5,
        1,
    ]);
    // The illegal string
    const [illegalString, setIllegalString] = useState([
        'a',
        'e',
        'd',
    ]);
    // The illegal array
    const [illegalArray, setIllegalArray] = useState([
        'a',
        'e',
        'd',
    ]);
    const [weekday, setWeekday] = useState("Sunday");
    const [dayCount, setDayCount] = useState(0);

    // It is used to clean timeouts to pause the animation
    const clearTimeouts = () => {
        timeOutIds.forEach((timeoutId) => clearTimeout(timeoutId));
        setTimeOutIds([]);
    };

    // To shuffle the legal input array
    const legalShuffle = () => {
        clearTimeouts();
        let triple = [];
        for (let j = 0; j < PAIR; j++) {
            triple.push(random(MINNUMBER, MAXNUMBER));
        }
        setLegalArray(triple);
        setLegalString(triple);
        setWeekday(week[0]);
        setDayCount(1);
        setIsCompleteLegal([
            false,
            false,
            false,
        ]);
        setIsLegalPlaying(true);
    };

    // To shuffle illegal input array
    const illegalShuffle = () => {
        clearTimeouts();
        var characters =
            "!@#$%^&*ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz089";
        var charactersLength = characters.length;
        let triple = [];

        for (let j = 0; j < PAIR; j++) {
            triple.push(characters.charAt(
                Math.floor(Math.random() * charactersLength)
            ));
        }

        setIllegalString(triple);
        setIllegalArray(triple);
        setDayCount(0);

        setIsCompleteIllegal([false, false, false]);
        setIsLegalPlaying(false);
    };

    // handler of play button of legal input
    const legalClick = () => {
        clearTimeouts();
        const legalTimeoutIds = [];
        setWeekday(week[0]);
        setDayCount(1);
        setIsLegalPlaying(true);
        setIsCompleteLegal([false, false, false]);

        legalArray.forEach((item, i) => {
            let timeoutId = setTimeout(
                (item) => {
                    if (i === 0) {
                        setIsCompleteLegal([true, false, false]);
                    } else if (i === 1) {
                        setIsCompleteLegal([true, true, false]);
                    } else if (i === 2) {
                        setIsCompleteLegal([true, true, true]);
                    }
                    setWeekday(week[item-1]);
                    setDayCount(item);
                    console.log(item);
                },
                (i + 1) * 1000, //time interval
                item
            );
            legalTimeoutIds.push(timeoutId);
        });

        // Clear timeouts upon completion
        let timeoutId = setTimeout(clearTimeouts, (legalArray.length + 1) * 700);
        legalTimeoutIds.push(timeoutId);
        setTimeOutIds(legalTimeoutIds);
    };

    // handler of play button of illegal input
    const illegalClick = () => {
        clearTimeouts();
        const illegalTimeoutIds = [];
        setDayCount(0);
        setIsLegalPlaying(false);
        setIsCompleteIllegal([false, false, false]);

        illegalString.forEach((item, i) => {
            let timeoutId = setTimeout(
                (item) => {
                    if (i === 0) {
                        setIsCompleteIllegal([true, false, false]);
                    } else if (i === 1) {
                        setIsCompleteIllegal([true, true, false]);
                    } else if (i === 2) {
                        setIsCompleteIllegal([true, true, true]);
                    }
                    setWeekday(week[item-1]);
                    setDayCount(item);
                },
                (i + 1) * 1000, //time interval
                item
            );
            illegalTimeoutIds.push(timeoutId);
        });

        // Clear timeouts upon completion
        let timeoutId = setTimeout(clearTimeouts, (legalArray.length + 1) * 700);
        illegalTimeoutIds.push(timeoutId);
        setTimeOutIds(illegalTimeoutIds);
    };

    return (
        <div className={classes.div}>
            <Card className={classes.card}>
                <div className = {classes.explanation}>
                        <TutorialLink />
                        <div className = {classes.links}>
                        
                            <Typography  className = {classes.text}>
                            What&nbsp;&nbsp;is&nbsp;&nbsp;<Typography style={{color: CorrectnessColor}} >legal&nbsp;&nbsp;input</Typography>&nbsp;?
                            </Typography>
                            <Typography  className = {classes.text}>
                            What&nbsp;&nbsp;is&nbsp;&nbsp;<Typography style={{color: CorrectnessColor}} >illegal&nbsp;&nbsp;input</Typography>&nbsp;?
                            </Typography>
                        </div>  
                </div>
                <Divider style={{marginTop:"-25px"}}/>
                <div className={classes.switchAnimation}>
                <div className={classes.bars} style={{ fontWeight: "300",  fontSize:"20px", marginTop:"-200px"}}>What day is&nbsp;(
                <span
                        style={{ fontWeight: "600",  fontSize:"20px", color:CorrectnessColor}}>
                            {dayCount + 1}</span>) of a week?</div>
                    <div className={classes.bars}>
                        {isLegalPlaying ? (
                        <span
                        style={{ fontWeight: "600",  fontSize:"60px", color:CorrectnessColor}}
                        >
                            {weekday}
                        </span>
                        ) : (
                            <div
                                style={{
                                    display: "grid",
                                    justifyContent: "center",
                                    alignContent: "flex-end",
                                }}
                            >
                                <ErrorIcon
                                    style={{ fontSize: 60, color: "red" }}
                                />
                            </div>
                        )}
                    </div>
                    {isLegalPlaying ? (
                        ""
                    ) : (
                        <span
                            style={{ fontWeight: "600", marginBottom: "20px",marginLeft:"450px",  fontSize:"20px", width:"800px"}}
                        >
                            Could not process illegal input: <span style={{color:CorrectnessColor}}>{dayCount}</span>
                        </span>
                    )}
                    <ExplainationBox width="40" height={3} style={{fontSize:"100px"}}>
                        {isLegalPlaying ? "No." + dayCount + " day of a week is " + weekday : "Error! Only integers 1-7 are legal"}
                    </ExplainationBox>
                </div>
                
                
                
                
            </Card>
            <InputTable
                legalShuffle={legalShuffle}
                illegalShuffle={illegalShuffle}
                inputLegalString={legalString}
                inputIllegalString={illegalString}
                legalArrays={legalArray}
                isCompleteIllegal={isCompleteIllegal}
                isCompleteLegal={isCompleteLegal}
                legalClick={legalClick}
                illegalClick={illegalClick}
            />
        </div>
    );
}

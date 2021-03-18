/*
    Author: Ruizi Han, Shiliang Chen
*/

import { makeStyles } from "@material-ui/core/styles";
import "@fontsource/roboto";
import * as React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ExplanationBox from "../ExplanationBox/ExplanationBox";
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from "@material-ui/core/IconButton";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import "../../fonts/fonts.css"

// a framer motion transition attributes
const spring = {
    type: "spring", // a framer motion type that simulates spring
    damping: 15, //Strength of opposing force. If set to 0, spring will oscillate indefinitely
    stiffness: 150, //Stiffness of the spring. Higher values will create more sudden movement. Set to 100 by default.
    mass: 0.1, // Mass of the moving object. Higher values will result in more lethargic movement
};

// dynamic pseudocode
const Code = (props)=> {
    const {blockNum} = props;
  
    const useStyles = makeStyles((theme) => ({
        background:{
            backgroundColor: "#FEE5D4",
            marginTop: -6,
            fontFamily:"Space Mono",
            lineHeight:"20px",
            fontSize:"10px",
            paddingLeft:"5px",
        },
        noBackground:{
            marginTop: -6,
            fontFamily:"Space Mono",
            lineHeight:"20px",
            fontSize:"10px",
            paddingLeft:"5px",

        }       
    }));
    const classes = useStyles();

    const interminableCode = 
    <div>
        <pre className={blockNum===1 ? classes.background : classes.noBackground}>
{`Algorithm: SwapForever(Arr)`}
        </pre>
        <pre className={classes.noBackground}>
{`  i = 1`}
        </pre>
        <pre className={blockNum===2 ? classes.background : classes.noBackground}>
{`  while i > 0 do`}
        </pre>
        <pre className={blockNum===3 ? classes.background : classes.noBackground}>
{`    swap(Arr[0], Arr[1])`}
        </pre>
        <pre className={blockNum===4 ? classes.background : classes.noBackground}>
{`  end for`}
        </pre>
    </div>
    
    return(
        <div>{interminableCode}</div>
    )
}

export default function Interminable(props){
    const { trace, ExplanationBoxHeight, blockNums } = props;

    // The bars displayed to visulise the numbers
    const [bars, setBars] = useState(trace[0]);
    // The speed of playing the animation
    const [playSpeed, setPlaySpeed] = useState(1);
    // The current step among traces
    const [currentStep, setCurrentStep] = useState(0);
    // It is used to clean timeouts to pause
    const [timeOutIds, setTimeOutIds] = useState([]);
    // The state of the animation, whether is playing
    const [isPlaying, setIsPlaying] = useState(false);
    // It is used to clean interval to pause
    const [intervalIds, setIntervalIds] = useState();

    const useStyles = makeStyles((theme) =>({
        root: {
            '& > * + *': {     
                marginTop: theme.spacing(3),
            },
            width: 380,        
        },
        bars: {
            listStyle: "none",
            padding: 0,
            margin: 0,
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
            marginTop: 36,
            marginBottom: "5px",
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
        cardOne:{
            width: 380, 
            height: 240,
            background: "#F0F0F0",        
        },
        cardTwo:{
            width: 380, 
            height: 240,
            background: "#F0F0F0",        
        },
        title:{
            display:"flex",
            fontFamily: "inherit",
            fontWeight: "700",
            fontSize:"16px",
            justifyContent: "center",
        },
        explanation:{
            fontFamily: "inherit",
            fontSize: "16px",
            fontWeight: "700",
            letterSpacing: "1px",
            textAlign: 'center',
            marginBottom: 12,
        }
    }));

    const classes = useStyles();

    // It is used to clean timeouts to pause the animation
    const clearTimeouts = () => {
        timeOutIds.forEach((timeoutId) => clearTimeout(timeoutId));
        setTimeOutIds([]);
    };

    // change bars after a time interval
    // first loop
    const run = (trace) => {
        // The current bars are the [0] of trace, to make the animation start without delay
        // here we begin the animation from [1] of trace
        // it's also suitable for pause, step forward and backwar
        const subTrace = trace.slice(0);
        const timeoutIds = [];
        // a time interval unit
        const timer = 500 / playSpeed;

        let item = [];
        let step = currentStep;

        // get the corresponding item from trace
        switch(currentStep%4){
            case 0:
                item = trace[1];
                break;
            case 1:
                item = trace[2];
                break;
            case 2:
                item = trace[3];
                break;
            case 3:
                item = trace[0];
                break;
            default:
                break;
        };
        setBars(item);
        setCurrentStep((prevStep) => prevStep + 1);
        step++;

        // Set time interval for one swapping
        let intervalId = setInterval(
            (trace) =>{
                switch(step%4){
                    case 0:
                        item = trace[1];
                        break;
                    case 1:
                        item = trace[2];
                        break;
                    case 2:
                        item = trace[3];
                        break;
                    case 3:
                        item = trace[0];
                        break;
                    default:
                        break;
                };
                setBars(item);
                setCurrentStep((prevStep) => prevStep + 1);
                step++;
            },
            timer,
            subTrace
        );
        setIntervalIds(intervalId);
    };

    // To pause the animation
    const pause = () => {
        setIsPlaying(false);
        clearTimeouts();
        clearInterval(intervalIds);
    };

    // To resume the animation
    const resume = () => {
        setIsPlaying(true);
        run(trace);
    };

    return (            
            <div className = {classes.root}>
                <div className = {classes.title}>Interminable Swap</div>               
                <Card className = {classes.cardOne}>                 
                    <div className={classes.bars}>
                    {bars.map((background) => (
                        <motion.li
                            key={background.key} // each bar's identification
                            layout
                            transition={spring}
                            style={background}
                            className={classes.bar}
                            animate={{
                                backgroundColor: background.backgroundColor,
                                y: background.y,
                            }}
                        >
                            <div className={classes.barNumber}>
                                {background.value}
                            </div>
                            <div
                                style={{
                                    marginTop: background.height-17,
                                    fontSize: "16px",
                                    textAlign: "center",
                                    fontWeight: "600",
                                }}
                            >
                                {background.isPivot ? <ArrowDropUpIcon style={{marginBottom: "-18px"}}/> : ""}
                            </div>
                        </motion.li>
                    ))}
                </div>
                <p className = {classes.explanation}>
                    {"i = 1"}
                </p>
                
                <div style={{
                    marginLeft: 160,
                    marginTop: -12,
                }}>
                    <IconButton
                        // function using depends on isPlaying
                        onClick={() => {
                            isPlaying ? pause() : resume();
                        }}
                        className = {classes.control}
                    >
                        {/* button appearence depends on isPlaying */}
                        {isPlaying ? (
                            <PauseCircleFilledIcon fontSize='large' />
                        ) : (
                            <PlayCircleFilledIcon fontSize='large' />
                        )}
                    </IconButton>
                </div>
            </Card>

            <Card className = {classes.cardTwo}>
                <CardContent>
                    <div style={{lineHeight:"25px"}}>
                        <Code blockNum={blockNums[currentStep===0 ? 0 : currentStep%2+1]}/>
                    </div>
                </CardContent>
            </Card>
            </div>        
    );
};
/*
    Author: Ruizi Han
*/

import { makeStyles, withStyles } from "@material-ui/core/styles";
import "@fontsource/roboto";
import * as React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import AnimationSlider from "../AnimationSlider/AnimationSlider";
import AnimationControl from "../AnimationControl/AnimationControl";
import ExplanationBox from '../ExplanationBox/ExplanationBox';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import {color} from '../../scenes/mainPages/Procedure';
import InputBar from '../InputBar/InputBar';
import {random} from 'lodash';


// a framer motion transition attributes
const spring = {
    type: "spring", // a framer motion type that simulates spring
    damping: 15, //Strength of opposing force. If set to 0, spring will oscillate indefinitely
    stiffness: 150, //Stiffness of the spring. Higher values will create more sudden movement. Set to 100 by default.
    mass: 0.1, // Mass of the moving object. Higher values will result in more lethargic movement
};


export default function ImplementationPseudo(props){
    const { title,
            algorithm,
            sort,
            Code, 
            file } = props;

    // The user input
    const [str, setStr] = useState("4,8,11,13,5");
    // The array gained from processed user input
    const [arr, setArr] = useState([4, 8, 11, 13, 5]);
    // The bool value which represent whether user input is valid or not
    const [isValid, setIsValid] = useState(true);
    // The wrong message 
    const [wrongMsg, setWrongMsg] = useState(" ");
    // The bars trace
    const [trace, setTrace] = useState(sort([4, 8, 11, 13, 5]).trace);
    // The description trace
    const [description, setDescription] = useState(sort([4, 8, 11, 13, 5]).description);
    // The block numbers trace
    const [blockNums, setBlockNums] = useState(sort([4, 8, 11, 13, 5]).blockNums);

    // The bars displayed to visulise the numbers
    const [bars, setBars] = useState(sort([4, 8, 11, 13, 5]).trace[0]);
    // The speed of playing the animation
    const [playSpeed, setPlaySpeed] = useState(1);
    // The current step among traces
    const [currentStep, setCurrentStep] = useState(0);
    // It is used to clean timeouts to pause
    const [timeOutIds, setTimeOutIds] = useState([]);
    // The state of the animation, whether is playing
    const [isPlaying, setIsPlaying] = useState(false);
    // It is used to control the speed menu
    const [anchorEl, setAnchorEl] = useState(null);
    // The state of play button and next step button, whether is disabled
    const [playDisabled, setPlayDisabled] = useState(false);
    // the State of previous step bnutton
    const [backwardDisabled, setBackwardDisabled] = useState(true);

    // The maximum value of input number
    const MAXNUMBER = 20;
    // The minimun value of input number
    const MINNUMBER = 1;
    // The maximum length of input array
    const MAXLENGTH = 8;

    // store user input
    const handleChange = (e) => {
        setStr(e.target.value);
        setIsValid(true);
    };

    // check the format of user input
    const checkFormat = () => {
        let s = str.replace(/\s+/g, "");
        s = removeDot(s);
        setStr(s);

        // user only enter one number
        if (s.match(/^[0-9]*$/)) {
            setIsValid(false);
            setWrongMsg("Please enter more than 1 number.");
        }
        // correct format 
        else if (s.match(/^\d+((,|，)\d+)*$/)) {
            const numString = s.split(/[，,]/);
            const nums = numString.map(num => parseInt(num));
            let outRange = false;
            for (let i = 0; i < nums.length; i++) {
                if (nums[i] > MAXNUMBER) {
                    outRange = true;
                    break;
                } else if (nums[i] < MINNUMBER) {
                    outRange = true;
                    break;
                }
            }
            // check if input numbers are valid
            if (nums.length > MAXLENGTH && outRange) {
                setIsValid(false);
                setWrongMsg(
                    "Please enter no more than "+MAXLENGTH+" numbers that between "+MINNUMBER+"-"+MAXNUMBER+"."
                );
            } else if (nums.length > MAXLENGTH && !outRange) {
                setIsValid(false);
                setWrongMsg("Please enter no more than "+MAXLENGTH+" numbers.");
            } else if (nums.length <= MAXLENGTH && outRange) {
                setIsValid(false);
                setWrongMsg("Please enter numbers that between "+MINNUMBER+"-"+MAXNUMBER+".");
            } else {
                setIsValid(true);
                setWrongMsg(" ");
                setArr(nums);
            }
        } else {
            setIsValid(false);
            setWrongMsg("Please follow the correct format."); 
        }
        return 0;
    };

    // to produce a random array
    const shuffle = () => {
        const length = random(3,MAXLENGTH-4);
        let array = [];
        for (let i = 0; i < length; i++) {
            // const element = array[i];
            array.push(random(1,MAXNUMBER-5));
        }
        setIsValid(true);
        setWrongMsg(" ");
        setArr(array);
        setStr(array.join(","));
    }

    // styles for this page
    const useStyles = makeStyles((theme) =>({
        root: {
            display: "flex",
            width: 1020,
            '& > *': {     
                margin: theme.spacing(3),
            },
        },
        aniRoot: {
            display: "grid",
            justifyContent: "center",
            alignContent: "flex-end",
            height: 430,
            marginTop: "20px",
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
            marginTop: 80,
            width: "45%",
            height: 520,
            background: "#F0F0F0",        
        },
        cardTwo:{
            marginTop: 80,
            width: "55%",
            height: 520,
            background: "#F0F0F0",      
        },
        title:{
            display:"flex",
            fontFamily: "inherit",
            fontWeight: "700",
            fontSize:"20px",
            justifyContent: "center",
            marginTop: -6,
            marginBottom: 10,
        },
        button:{
            marginLeft: 95,
            width: 200,
            position: 'fixed',
            bottom: 60,
        },
        slider:{
            marginLeft: 10
        },
        inputBar:{
            marginLeft: -75,
            marginTop: 30,
        }
    }));

    const classes = useStyles();
    
    // Update traces when user enter new array
    useEffect(() => {
        setTrace(sort(arr).trace);
        setDescription(sort(arr).description);
        setBlockNums(sort(arr).blockNums);
    }, [arr]);

    // Update buttons' disable property when steps are changed
    useEffect(() => {
        currentStep === 0
            ? setBackwardDisabled(true)
            : setBackwardDisabled(false);
        currentStep + 1 === trace.length
            ? setPlayDisabled(true)
            : setPlayDisabled(false);
    }, [currentStep]);

    // Use the latest speed to play the animation
    useEffect(() => {
        // if it is playing, replay
        if (isPlaying) {
            pause();
            resume();
        }
    }, [playSpeed]);

    useEffect(() => {
        handleResetClick();
    }, [trace]);

    // It is used to open the speed menu
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    // It is used to adjust speed, triggered when close the speed menu
    const handleClose = (event) => {
        const value = event.nativeEvent.target.value / 4;
        if (!isNaN(value)) {
            setPlaySpeed(value);
        }
        setAnchorEl(null);
    };

    // Control slider's change
    const handleSliderChange = (event, newValue) => {
        if (isPlaying) {
            pause();
        }
        console.log(newValue);
        const item = trace[newValue];
        setCurrentStep(newValue);
        setBars(item);
    };

    // It is used to clean timeouts to pause the animation
    const clearTimeouts = () => {
        timeOutIds.forEach((timeoutId) => clearTimeout(timeoutId));
        setTimeOutIds([]);
    };

    // Main method, used to generate a time line based on the speed
    // change bars after a time interval
    const run = (trace) => {
        // The current bars are the [0] of trace, to make the animation start without delay
        // here we begin the animation from [1] of trace
        // it's also suitable for pause, step forward and backwar
        const subTrace = trace.slice(1);
        const timeoutIds = [];
        // a time interval unit
        const timer = 1000 / playSpeed;

        // Set a timeout for each item in the trace
        subTrace.forEach((item, i) => {
            let timeoutId = setTimeout(
                (item) => {
                    // update the current step
                    setCurrentStep((prevStep) =>
                        i === trace.length - 1 ? prevStep : prevStep + 1
                    );
                    // update bars to be animated
                    setBars(item);
                    i === subTrace.length - 1
                        ? setIsPlaying(false)
                        : setIsPlaying(true);
                },
                i * timer, //time interval
                item
            );
            timeoutIds.push(timeoutId);
        });

        // Clear timeouts upon completion
        let timeoutId = setTimeout(clearTimeouts, trace.length * timer);
        timeoutIds.push(timeoutId);
        setTimeOutIds(timeoutIds);
    };

    // To pause the animation
    const pause = () => {
        setIsPlaying(false);
        clearTimeouts();
    };

    // To resume the animation
    const resume = () => {
        setIsPlaying(true);
        const newtrace = trace.slice(currentStep);
        run(newtrace);
        const his = localStorage.getItem("history");
        console.log(his);
    };

    // Go to next step and pause
    const stepForward = () => {
        if (currentStep < trace.length - 1) {
            pause();
            const item = trace[currentStep + 1];
            setCurrentStep((prevStep) => prevStep + 1);
            setBars(item);
        }
    };

    // Go to the previous step and pause
    const stepBackward = () => {
        if (currentStep > 0) {
            pause();
            const item = trace[currentStep - 1];
            setCurrentStep((prevStep) => prevStep - 1);
            setBars(item);
        }
    };

    // Reset the animation progress
    const handleResetClick = () => {
        pause();
        setCurrentStep(0);
        setBars(trace[0]);
    };

    // Functions for AnimationControl
    const animationControlProps = {
        handleResetClick,
        stepForward,
        stepBackward,
        pause,
        resume,
        isPlaying,
        playDisabled,
        backwardDisabled,
        handleClick,
        handleClose,
        anchorEl,
        playSpeed,
        trace,
    };

    return (            
            <div className = {classes.root}>
                <Card className = {classes.cardOne}>
                <CardContent>
                    <div className = {classes.title}>{title}</div>

                    <div>
                        <Code blockNum={blockNums[currentStep]}/>
                    </div>
                    <Button className={classes.button} style={{color:"white", backgroundColor:color}} href={file} download={algorithm + ".pdf"}>
                        Export Quick Guide
                    </Button>
                </CardContent>
                </Card>
                <Card className = {classes.cardTwo}> 
                <div className={classes.inputBar}>
                <InputBar
                    inputString={str}
                    handleChange={handleChange}
                    checkFormat={checkFormat}
                    isValid={isValid}
                    wrongMsg={wrongMsg}
                    shuffle={shuffle}
                    max={MAXNUMBER}
                    barLength="270px"
                />   
                </div>         
                    <div className={classes.aniRoot}>
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
                <ExplanationBox width={50} height={6}>
                    {description[currentStep]}
                </ExplanationBox>
                
                <div className={classes.slider}>
                <AnimationSlider
                    width={460}
                    step={1}
                    max={trace.length - 1}
                    handleChange={handleSliderChange}
                    value={currentStep}
                    display="none"                                       
                />
                </div>
                <AnimationControl {...animationControlProps} />
                    </div>                
            </Card>
            </div>  
    );
};

// remove dot(s) of str's right 
function removeDot(s) {
    if (s == null) return "";
    var dot = "，,";
    var str = s;
    if (dot.indexOf(str.charAt(str.length - 1)) !== -1) {
        var i = str.length - 1;
        while (i >= 0 && dot.indexOf(str.charAt(i)) !== -1) {
            i--;
        }
        str = str.substring(0, i + 1);
    }
    return str;
}

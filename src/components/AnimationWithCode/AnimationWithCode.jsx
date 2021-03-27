/*
    Author: Ruizi Han, Yijie Lu

    Framework of animation and pseudocode, support for 2 loop examples and Terminating Bubble Sort in correctness-tutorial-termination.
*/

import "@fontsource/roboto";
import * as React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import AnimationSlider from "../AnimationSlider/AnimationSlider";
import AnimationControl from "../AnimationControl/AnimationControl";
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


// a framer motion transition attributes
const spring = {
    type: "spring", // a framer motion type that simulates spring
    damping: 15, //Strength of opposing force. If set to 0, spring will oscillate indefinitely
    stiffness: 150, //Stiffness of the spring. Higher values will create more sudden movement. Set to 100 by default.
    mass: 0.1, // Mass of the moving object. Higher values will result in more lethargic movement
};

export default function AnimationWithCode(props) {
    const { trace, description, width, blockNums, useStyles, Code, title } = props;

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
    // It is used to control the speed menu
    const [anchorEl, setAnchorEl] = useState(null);
    // The state of play button and next step button, whether is disabled
    const [playDisabled, setPlayDisabled] = useState(false);
    // the State of previous step button
    const [backwardDisabled, setBackwardDisabled] = useState(true);

    const classes = useStyles();

    // Update buttons' disable property when steps are changed
    useEffect(() => {
        currentStep === 0
            ? setBackwardDisabled(true)
            : setBackwardDisabled(false);
        currentStep + 1 === trace.length
            ? setPlayDisabled(true)
            : setPlayDisabled(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentStep]);

    // Use the latest speed to play the animation
    useEffect(() => {
        // if it is playing, replay
        if (isPlaying) {
            pause();
            resume();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [playSpeed]);

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

    const handleResetClick = () => {
        pause();
        setCurrentStep(0);
        setBars(trace[0]);
    };

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
        <div className={classes.root}>
            <div className={classes.title}>{title}</div>
            <Card className={classes.cardOne}>
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
                                    marginTop: background.height - 17,
                                    fontSize: "16px",
                                    textAlign: "center",
                                    fontWeight: "600",
                                }}
                            >
                                {background.isPivot ? <ArrowDropUpIcon style={{ marginBottom: "-18px" }} /> : ""}
                            </div>
                        </motion.li>
                    ))}
                </div>
                <p className={classes.explanation}>
                    {description[currentStep]}
                </p>

                <div className={classes.slider}>
                    <AnimationSlider
                        width={width}
                        step={1}
                        max={trace.length - 1}
                        handleChange={handleSliderChange}
                        value={currentStep}
                        display="none"
                    />
                </div>
                <div className={classes.control}>
                    <AnimationControl {...animationControlProps} />
                </div>
            </Card>

            <Card className={classes.cardTwo}>
                <CardContent>
                    <div style={{ lineHeight: "25px" }}>
                        <Code blockNum={blockNums[currentStep]} />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

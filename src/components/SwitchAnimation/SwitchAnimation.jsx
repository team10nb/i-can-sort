import "@fontsource/roboto";
import * as React from "react";
import Menu from "../Menu/Menu";
import { motion } from "framer-motion";
import Zoom from "@material-ui/core/Zoom";
import { useState, useEffect } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import ReplayIcon from "@material-ui/icons/Replay";
import IconButton from "@material-ui/core/IconButton";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import AnimationSlider from "../AnimationSlider/AnimationSlider";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";

// a framer motion transition attributes
const spring = {
    type: "spring",     // a framer motion type that simulates spring
    damping: 20,        //Strength of opposing force. If set to 0, spring will oscillate indefinitely
    stiffness: 300,     //Stiffness of the spring. Higher values will create more sudden movement. Set to 100 by default.
    mass: 1,            // Mass of the moving object. Higher values will result in more lethargic movement
};

export const SwitchAnimation = () => {
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
    // the State of previous step bnutton
    const [backwardDisabled, setBackwardDisabled] = useState(true);

    const useStyles = makeStyles({
        root: {
            display: "grid",
            justifyContent: "center",
            alignContent: "center"
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
            marginBottom: "10px",
            marginRight: "15px",
            marginLeft: "15px",
            width: "30px",
            height: "140px",
            fontSize: "0.1em",
            justifyContent: "center",
        },
        customTooltip: {
            fontFamily: "inherit",
            fontSize: "0.5em",
            fontWeight: "700",
            paddingTop: "8px",
            paddingBottom: "10px",
            letterSpacing: "1px",
        },
        barNumber: {
            fontSize: "0.8em",
            marginTop: "-20px",
        },
    });

    const classes = useStyles();

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
        const timer = 500 / playSpeed;

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

    return (
        <div className={classes.root}>
            {/* bars */}
            <ul className={classes.bars}>
                {bars.map((background) => (
                    <motion.li
                        key={background.backgroundColor} // each bar's identification
                        layout
                        transition={spring}
                        style={background}
                        className={classes.bar}
                    >
                        <div className={classes.barNumber}>
                            {background.height}
                        </div>
                    </motion.li>
                ))}
            </ul>
            
            <AnimationSlider
                width='270px'
                step={1}
                max={trace.length - 1}
                handleChange={handleSliderChange}
                value={currentStep}
            />

            <div
                style={{
                    position: "relative",
                    left: "50%",
                    transform: "translate(-50%)",
                    width: "240px",
                }}
            >
                {/* reset button */}
                <Tooltip
                    title='Reset'
                    TransitionComponent={Zoom}
                    enterDelay={300}
                    leaveDelay={200}
                    classes={{ tooltip: classes.customTooltip }}
                >
                    <span>
                        <IconButton
                            // pause the animation and reset
                            onClick={() => {
                                pause();
                                setCurrentStep(0);
                                setBars(trace[0]);
                            }}
                            disabled={false}
                        >
                            <ReplayIcon
                                // color may need to follow the theme color
                                style={{ color: "grey" }}
                                fontSize='small'
                            />
                        </IconButton>
                    </span>
                </Tooltip>

                {/* previous step button */}
                <IconButton
                    onClick={() => {
                        stepBackward();
                    }}
                    disabled={backwardDisabled}
                >
                    <SkipPreviousIcon
                        // color may need to follow the theme color
                        style={{ color: "grey" }}
                        fontSize='small'
                    />
                </IconButton>

                {/* play button */}
                <IconButton
                    // function using depends on isPlaying
                    onClick={() => {
                        isPlaying ? pause() : resume();
                    }}
                    disabled={playDisabled}
                >
                    {/* button appearence depends on isPlaying */}
                    {isPlaying ? (
                        <PauseCircleFilledIcon fontSize='large' />
                    ) : (
                        <PlayCircleFilledIcon fontSize='large' />
                    )}
                </IconButton>

                {/* next step button */}
                <IconButton
                    onClick={() => {
                        stepForward();
                    }}
                    disabled={playDisabled}
                >
                    <SkipNextIcon
                        // color may need to follow the theme color
                        style={{ color: "grey" }}
                        fontSize='small'
                    />
                </IconButton>

                {/* the speed choosing menu */}
                <Menu
                    handleClick={handleClick}
                    handleClose={handleClose}
                    anchorEl={anchorEl}
                    speed={playSpeed + "x"}
                />
            </div>
            <br />

            {/* <AnimationProgress
                width='270px' // this value need to be transmitted
                progress={100 * (currentStep / (trace.length - 1))} // length in progress bar for one step
            /> */}
        </div>
    );
};

// sample trace, store each step's bar info
// this value need to be transmitted
const trace = [
    [
        { height: "50px", backgroundColor: "#FF008C" },
        { height: "30px", backgroundColor: "#D309E1" },
        { height: "90px", backgroundColor: "#9C1AFF" },
        { height: "10px", backgroundColor: "#7700FF" },
        { height: "20px", backgroundColor: "#66AA00" },
    ],
    [
        { height: "30px", backgroundColor: "#D309E1" },
        { height: "50px", backgroundColor: "#FF008C" },
        { height: "10px", backgroundColor: "#7700FF" },
        { height: "20px", backgroundColor: "#66AA00" },
        { height: "90px", backgroundColor: "#9C1AFF" },
    ],
    [
        { height: "30px", backgroundColor: "#D309E1" },
        { height: "10px", backgroundColor: "#7700FF" },
        { height: "20px", backgroundColor: "#66AA00" },
        { height: "50px", backgroundColor: "#FF008C" },
        { height: "90px", backgroundColor: "#9C1AFF" },
    ],
    [
        { height: "10px", backgroundColor: "#7700FF" },
        { height: "20px", backgroundColor: "#66AA00" },
        { height: "30px", backgroundColor: "#D309E1" },
        { height: "50px", backgroundColor: "#FF008C" },
        { height: "90px", backgroundColor: "#9C1AFF" },
    ],
    [
        { height: "50px", backgroundColor: "#FF008C" },
        { height: "30px", backgroundColor: "#D309E1" },
        { height: "90px", backgroundColor: "#9C1AFF" },
        { height: "10px", backgroundColor: "#7700FF" },
        { height: "20px", backgroundColor: "#66AA00" },
    ],
    [
        { height: "30px", backgroundColor: "#D309E1" },
        { height: "50px", backgroundColor: "#FF008C" },
        { height: "10px", backgroundColor: "#7700FF" },
        { height: "20px", backgroundColor: "#66AA00" },
        { height: "90px", backgroundColor: "#9C1AFF" },
    ],
    [
        { height: "30px", backgroundColor: "#D309E1" },
        { height: "10px", backgroundColor: "#7700FF" },
        { height: "20px", backgroundColor: "#66AA00" },
        { height: "50px", backgroundColor: "#FF008C" },
        { height: "90px", backgroundColor: "#9C1AFF" },
    ],
    [
        { height: "10px", backgroundColor: "#7700FF" },
        { height: "20px", backgroundColor: "#66AA00" },
        { height: "30px", backgroundColor: "#D309E1" },
        { height: "50px", backgroundColor: "#FF008C" },
        { height: "90px", backgroundColor: "#9C1AFF" },
    ],
];

// 可能可以以以下的形式来做每一个数字的object
// { styles: {height: "50px", backgroundColor: "#D309E1"}, // style, 用来造bar
//   key: 1, // 这个是用来识别是哪个物体的唯一标志
//   value: 50, //数字的大小, 对应高度
//  }

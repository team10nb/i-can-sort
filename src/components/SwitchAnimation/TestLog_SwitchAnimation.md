reason/description里面写为什么test fail了
对**组件代码**做修改和修改的理由写在每个代码块前的注释里（由于没有通过test，而对**原码**做的修改）
有必要的话，贴一下test的代码
第一个version可以不写注释 最后一个version(pass的version)可以不写reason

#### ComponentName: SwitchAnimation

|Test No.|Date|Pass/Fail|Failed test(s)|Reason/Description|Modified version|
|-------|----|---------|-------------------|----------------|----------------|
|1 | 1.27 | Fail | All | No code has been constructed |version 1|
|2 | 1.27 | Pass |/|Initial version is created|version 2|
|3 | 2.4 | Fail |should match snapshot|Change props passing|version 3|
|4 | 2.4 | Pass | /                     |Snapshot updated|version 4|

##### Code - version 2
```javascript
None
```

##### Code - version 3
```javascript
import * as React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { shuffle } from "lodash";

const spring = {
    type: "spring",
    damping: 20, //这个是摇摆次数
    stiffness: 300, //这个是粘滞程度
};

export const SwitchAnimation = () => {
    const [colors, setColors] = useState(initialColors);

    useEffect(() => {
        setTimeout(() => setColors(shuffle(colors)), 1000);
    }, [colors]);

    return (
        <ul>
            {colors.map((background) => (
                <motion.li
                    key={background.backgroundColor}
                    layout
                    transition={spring}
                    style={background}
                />
            ))}
        </ul>
    );
};

const initialColors = [
    { height: "20px", backgroundColor: "#FF008C" },
    { height: "50px", backgroundColor: "#D309E1" },
    { height: "90px", backgroundColor: "#9C1AFF" },
    { height: "140px", backgroundColor: "#7700FF" },
];

// 可能可以以以下的形式来做每一个数字的object
// { styles: {height: "50px", backgroundColor: "#D309E1"}, // style, 用来造bar
//   key: 1, // 这个是用来识别是哪个物体的唯一标志
//   value: 50, //数字的大小, 对应高度
//  }

```

##### Code - version 4
```javascript
import "@fontsource/roboto";
import * as React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import AnimationSlider from "../AnimationSlider/AnimationSlider";
import { makeStyles } from "@material-ui/core/styles";
import AnimationControl from "../AnimationControl/AnimationControl";



// a framer motion transition attributes
const spring = {
    type: "spring",     // a framer motion type that simulates spring
    damping: 15,        //Strength of opposing force. If set to 0, spring will oscillate indefinitely
    stiffness: 150,     //Stiffness of the spring. Higher values will create more sudden movement. Set to 100 by default.
    mass: 0.1,            // Mass of the moving object. Higher values will result in more lethargic movement
};

export const SwitchAnimation = (props) => {
    const {trace, description, width} = props;

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
            alignContent: "flex-end",
            height: 480,
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
        barNumber: {
            fontSize: "16px",
            marginTop: "-23px",
            textAlign: "center",
            fontWeight: "600",
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
        localStorage.setItem("history", "hello");
        
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

    const handleResetClick = () => {
        pause();
        setCurrentStep(0);
        setBars(trace[0]);
    };


    const animationControlProps = { handleResetClick, stepForward, stepBackward, pause, resume, isPlaying, playDisabled, backwardDisabled, handleClick, handleClose, anchorEl, playSpeed, trace};

    return (
        <div className={classes.root}>
            <p>{description[currentStep]}</p>
            <br/><br/>
            {/* bars */}
            <ul className={classes.bars}>
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
                    </motion.li>
                ))}
            </ul>
            
            <AnimationSlider
                width= {width}
                step={1}
                max={trace.length - 1}
                handleChange={handleSliderChange}
                value={currentStep}
            />

            <AnimationControl {...animationControlProps} />

        </div>
    );
};




export default SwitchAnimation;
```



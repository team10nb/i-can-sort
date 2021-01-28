import * as React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import IconButton from "@material-ui/core/IconButton";
import AnimationProgress from "../AnimationProgress/AnimationProgress";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import ReplayIcon from "@material-ui/icons/Replay";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import Menu from "../Menu/Menu";
import Tooltip from "@material-ui/core/Tooltip";

const spring = {
    type: "spring",
    damping: 20, //这个是摇摆次数
    stiffness: 300, //这个是粘滞程度
};
export const SwitchAnimation = () => {
    const [colors, setColors] = useState(trace[1]); // 初始状态不一样开始的时候会自然一点
    const [playSpeed, setPlaySpeed] = useState(1);
    const [currentStep, setCurrentStep] = useState(0);
    const [timeOutIds, setTimeOutIds] = useState([]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    //speed变的时候要重新播放一下, 改变速度
    useEffect(() => {
        if (isPlaying) {
            pause();
            resume();
        }
    }, [playSpeed]);

    // 用来打开倍速菜单
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (event) => {
        const value = event.nativeEvent.target.value / 4;
        if (!isNaN(value)) {
            setPlaySpeed(value);
        }
        setAnchorEl(null);
    };

    const clearTimeouts = () => {
        timeOutIds.forEach((timeoutId) => clearTimeout(timeoutId));
        setTimeOutIds([]);
    };

    const run = (trace) => {
        const timeoutIds = [];
        const timer = 500 / playSpeed;

        // Set a timeout for each item in the trace
        trace.forEach((item, i) => {
            let timeoutId = setTimeout(
                (item, currentStep) => {
                    setCurrentStep((currentStep) =>
                        i === trace.length - 1 ? currentStep : currentStep + 1
                    );
                    setColors(item);
                    i === trace.length - 1
                        ? setIsPlaying(false)
                        : setIsPlaying(true);
                },
                i * timer,
                item,
                currentStep
            );

            timeoutIds.push(timeoutId);
        });

        // Clear timeouts upon completion
        let timeoutId = setTimeout(clearTimeouts, trace.length * timer);
        timeoutIds.push(timeoutId);

        setTimeOutIds(timeoutIds);
    };

    const pause = () => {
        setIsPlaying(false);
        clearTimeouts();
    };

    const resume = () => {
        setIsPlaying(true);
        const newtrace = trace.slice(currentStep);
        run(newtrace);
    };

    const stepForward = () => {
        if (currentStep < trace.length - 1) {
            pause();
            const item = trace[currentStep + 1];
            setCurrentStep((prevStep) => prevStep + 1);
            setColors(item);
        }
    };

    const stepBackward = () => {
        if (currentStep > 0) {
            pause();
            const item = trace[currentStep - 1];
            setCurrentStep((prevStep) => prevStep - 1);
            setColors(item);
        }
    };

    return (
        <div>
            <ul className='bars'>
                {colors.map((background) => (
                    <motion.li
                        key={background.backgroundColor}
                        layout
                        transition={spring}
                        style={background}
                        className='bar'
                    />
                ))}
            </ul>
            <Tooltip title='Replay'>
                <IconButton
                    onClick={() => {
                        setCurrentStep(0);
                        setColors(trace[0]);
                    }}
                    disabled={false}
                >
                    <ReplayIcon style={{ color: "grey" }} fontSize='small' />
                </IconButton>
            </Tooltip>

            <Tooltip title='Previous Step'>
                <IconButton
                    onClick={() => {
                        stepBackward();
                    }}
                    disabled={false}
                >
                    <SkipPreviousIcon
                        style={{ color: "grey" }}
                        fontSize='small'
                    />
                </IconButton>
            </Tooltip>

            <Tooltip title={isPlaying ? "Pause" : "Play"}>
                <IconButton
                    onClick={() => {
                        isPlaying ? pause() : resume();
                    }}
                >
                    {isPlaying ? (
                        <PauseCircleFilledIcon fontSize='large' />
                    ) : (
                        <PlayCircleFilledIcon fontSize='large' />
                    )}
                </IconButton>
            </Tooltip>
            <Tooltip title='Next Step'>
                <IconButton
                    onClick={() => {
                        stepForward();
                    }}
                    disabled={false}
                >
                    <SkipNextIcon style={{ color: "grey" }} fontSize='small' />
                </IconButton>
            </Tooltip>
            
                <Menu
                    handleClick={handleClick}
                    handleClose={handleClose}
                    anchorEl={anchorEl}
                    speed={playSpeed + "x"}
                />
            
            <br />
            <Tooltip title='Progress'>
                <AnimationProgress
                    width='270px'
                    progress={(100 * currentStep) / (trace.length - 1)}
                />
            </Tooltip>
        </div>
    );
};

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

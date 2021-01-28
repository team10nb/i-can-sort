import * as React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { set, shuffle } from "lodash";

const spring = {
    type: "spring",
    damping: 20, //这个是摇摆次数
    stiffness: 300, //这个是粘滞程度
};

export const SwitchAnimation = () => {
    const [colors, setColors] = useState(trace[0]);
    const [playSpeed, setPlaySpeed] = useState(1);
    const [currentStep, setCurrentStep] = useState(0);
    const [timeOutIds, setTimeOutIds] = useState([]);
    const [isPlaying, setIsPlaying] = useState(false);

    // useEffect(() => {
    //     setTimeout(() => setColors(shuffle(colors)), 1000);
    // }, [colors]);

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
                timer / 3 + i * timer,
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
        console.log(currentStep);
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
            <button
                onClick={() => {
                    setCurrentStep(0);
                    setColors(trace[0]);
                }}
            >
                Reset
            </button>
            <button
                onClick={() => {
                    isPlaying ? pause() : resume();
                }}
            >
                {isPlaying ? "pause" : "play"}
            </button>
            <button
                onClick={() => {
                    stepBackward();
                }}
            >
                Last step
            </button>
            <button
                onClick={() => {
                    stepForward();
                }}
            >
                Next step
            </button>
        </div>
    );
};

const initialColors = [
    { height: "20px", backgroundColor: "#FF008C" },
    { height: "50px", backgroundColor: "#D309E1" },
    { height: "90px", backgroundColor: "#9C1AFF" },
    { height: "140px", backgroundColor: "#7700FF" },
];

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

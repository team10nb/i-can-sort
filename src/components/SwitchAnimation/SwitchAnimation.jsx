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

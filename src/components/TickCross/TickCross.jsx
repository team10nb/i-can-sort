import * as React from "react";
import { useEffect, useState } from "react";
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform,
  useMotionValue
} from "framer-motion";

export function Cross(props) {
    const {isComplete, color} = props;


  return (
    <svg className="progress-icon" width ="30%" height = "20%" viewBox="0 0 50 50">
        <motion.path
          fill="none"
          strokeWidth="5"
          stroke="red"
          strokeDasharray="0 1"
          d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
          style={{
            rotate: 90,
            translateX: 5,
            translateY: 5,
            scaleX: -1 // Reverse direction of line animation
          }}
          initial={false}
          animate={{ pathLength: isComplete ? 1 : 0 }}
          transition={{
            default: { duration: 0.5, ease: "easeInOut" },
          }}
        />
        <motion.path
            fill="none"
            strokeWidth="5"
            stroke='red'
            d="M17,17 L33,33"
            initial={false}
          strokeDasharray="0 1"
          animate={{pathLength: isComplete ? 1 : 0}}
          transition={{
            default: { duration: 0.5, ease: "easeInOut" },
          }}
          />
          <motion.path
            fill="none"
            strokeWidth="5"
            stroke="red"
            d="M33,17 L17,33"
            initial={false}
          strokeDasharray="0 1"
          animate={{pathLength: isComplete ? 1 : 0}}
          transition={{
            default: { duration: 0.3, ease: "easeInOut" },
          }}
          />
      </svg>
  );
};

export function Tick(props) {
  const {isComplete, color} = props;


  return (
      <svg className="progress-icon" width ="30%" height = "20%" viewBox="0 0 50 50">
        <motion.path
          fill="none"
          strokeWidth="5"
          stroke="green"
          strokeDasharray="0 1"
          d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
          style={{
            rotate: 90,
            translateX: 5,
            translateY: 5,
            scaleX: -1 // Reverse direction of line animation
          }}
          initial={false}
          animate={{ pathLength: isComplete ? 1 : 0 }}
          transition={{
            default: { duration: 0.5, ease: "easeInOut" },
          }}
        />
        <motion.path
          fill="none"
          strokeWidth="5"
          stroke="green"
          d="M14,26 L 22,33 L 35,16"
          initial={false}
          animate={{pathLength: isComplete ? 1 : 0}}
          transition={{
            default: { duration: 0.3, ease: "easeInOut" },
          }}

        />
      </svg>
  );
};

export default Tick;

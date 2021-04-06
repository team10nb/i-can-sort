### **Developer**

Ruizi Han

Reference: MATERIAL-UI (https://material-ui.com)

### **Introduction**

Animation component which contains a control bar, a slider, a description box and pseudocode which can be highlighted.

### **Import**

```html
import "@fontsource/roboto";
import * as React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import AnimationSlider from "../AnimationSlider/AnimationSlider";
import AnimationControl from "../AnimationControl/AnimationControl";
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
```

### **Props**

| Name             | Type   | Default | Description                                                   |
| ---------------- | ------ | ------- | ------------------------------------------------------------- |
| trace         | object | null    | Indicate the sorting process                             |
| description         | [string] | []    | Contain array of descriptions                             |
| width | number | 0       | The width of the slider          |
| blockNums | [number] | [] | The array of highlighted pseudocode block number |
| useStyles | style | {} | The css of this component |
| Code | Code |  | Pseudocode blocks |
| title | string | "" | The title |

### **Demo**

```jsx
import { useStyles } from "../../scenes/subpages/Tutorial/Loop/LoopExample/Style";
import { makeStyles } from "@material-ui/core/styles";


const Code = (props) => {
    const { blockNum } = props;

    const useStyles = makeStyles((theme) => ({
        background: {
            backgroundColor: "#FEE5D4",
            borderRadius: 5,
            marginTop: -6,
            letterSpacing: 0.5,
            fontFamily: "Space Mono",
            lineHeight: "22px",
            fontSize: "12px",
            paddingLeft: "5px",
        },
        noBackground: {
            marginTop: -6,
            letterSpacing: 0.5,
            fontFamily: "Space Mono",
            lineHeight: "22px",
            fontSize: "12px",
            paddingLeft: "5px",
        },
    }));
    
    const classes = useStyles();

    const terminableCode =
        <div>
            <pre className={blockNum === 1 ? classes.background : classes.noBackground}>
                {`Algorithm: SwapFourTimes(Arr)`}
            </pre>
            <pre className={classes.noBackground}>
                {`  i = 0`}
            </pre>
            <pre className={blockNum === 2 ? classes.background : classes.noBackground}>
                {`  for i from 0 to 3 do`}
            </pre>
            <pre className={blockNum === 3 ? classes.background : classes.noBackground}>
                {`    swap(Arr[0], Arr[1])`}
            </pre>
            <pre className={blockNum === 4 ? classes.background : classes.noBackground}>
                {`  end for`}
            </pre>
        </div>

    return (
        <div>{terminableCode}</div>
    )
}

const trace = [];
const traceUnit1 =
        [
            { value: 5, height: 50, backgroundColor: "#00BFFF", key: 0, y: 0 },
            { value: 8, height: 80, backgroundColor: "#00BFFF", key: 1, y: 0 },
        ];

    const traceUnit2 =
        [
            { value: 5, height: 50, backgroundColor: "#FFD700", key: 0, y: 0 },
            { value: 8, height: 80, backgroundColor: "#FFD700", key: 1, y: 0 },
        ];
    
    const traceUnit3 =
        [
            { value: 8, height: 80, backgroundColor: "#00BFFF", key: 1, y: 0 },
            { value: 5, height: 50, backgroundColor: "#00BFFF", key: 0, y: 0 },
        ];

    const traceUnit4 =
        [
            { value: 8, height: 80, backgroundColor: "#FFD700", key: 1, y: 0 },
            { value: 5, height: 50, backgroundColor: "#FFD700", key: 0, y: 0 },
        ];
    trace.push(traceUnit1, traceUnit2, traceUnit3, traceUnit4, traceUnit1, traceUnit2, traceUnit3, traceUnit4, traceUnit1, traceUnit1);

    const blockNums = [1, 2, 3, 2, 3, 2, 3, 2, 3, 4];

    const description = [
        "i = 0",
        "i = 0",
        "i = 0",
        "i = 1",
        "i = 1",
        "i = 2",
        "i = 2",
        "i = 3",
        "i = 3",
        "i = 4, jump out of the loop",
    ];

<AnimationWithCode
    trace={trace}
    description={description}
    width={320}
    blockNums={blockNums}
    useStyles={useStyles}
    Code={Code}
    title="Demo"
/>
```
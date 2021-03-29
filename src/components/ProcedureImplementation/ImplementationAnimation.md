### **Developer**

Ruizi Han, Shiliang Chen

Reference: MATERIAL-UI (https://material-ui.com)

### **Introduction**

Animation component which contains a control bar, a slider, a description box and pseudocode which can be highlighted with an input bar. 

### **Import**

```html
import { makeStyles } from "@material-ui/core/styles";
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
import { color } from '../../scenes/mainPages/Procedure';
import InputBar from '../InputBar/InputBar';
import { random } from 'lodash';
```

### **Props**

| Name      | Type     | Default | Description                          |
| --------- | -------- | ------- | ------------------------------------ |
| title     | String   | ""      | The title                            |
| algorithm | String   | ""      | Algorithms' name                     |
| sort      | function |         | The algorithm that used in component |
| Code      | Code     |         | Pseudocode blocks                    |
| file      | pdf file |         | The pdf file                         |

### **Demo**

```jsx
import { makeStyles } from "@material-ui/core/styles";
import "../../fonts/fonts.css";

const useStyles = makeStyles((theme) => ({
    algo:{
        marginTop: -4,
        letterSpacing: -0.5,
        fontSize: 15,
        fontFamily: "Space Mono",
    },
    background:{
        backgroundColor: "#cfd9e7",
        borderRadius: 5,
        marginTop: -6,
        letterSpacing: 0.5,
        fontFamily:"Space Mono",
        lineHeight:"22px",
        fontSize:"12px",
        paddingLeft:"5px",
    },
    noBackground:{
        marginTop: -6,
        letterSpacing: 0.5,
        fontFamily:"Space Mono",
        lineHeight:"22px",
        fontSize:"12px",
        paddingLeft:"5px",
    },  
}));

const Bubble = (props)=> {
    const {blockNum} = props;
    const classes = useStyles();

    const bubbleCode = 
    <div>
        <pre className={classes.algo}>
{`Algorithm: BubbleSort(Arr)
Input: an array of integers Arr.
Output: The result of sorting Arr.`}
        </pre>
        <pre className={blockNum===1 ? classes.background : classes.noBackground}>
{`length = Arr.length`}
        </pre>
        <pre className={blockNum===2 ? classes.background : classes.noBackground}>
{`for i from 0 to length-1 do`}
        </pre>
        <pre className={blockNum===3 ? classes.background : classes.noBackground}>
{`  for j from 0 to length-1-i do`}
        </pre>
        <pre className={blockNum===4 ? classes.background : classes.noBackground}>
{`    if Arr[j] > Arr[j+1] then`}
        </pre>
        <pre className={blockNum===5 ? classes.background : classes.noBackground}>
{`      swap(Arr[j], Arr[j+1])`}
        </pre>
        <pre className={blockNum===6 ? classes.background : classes.noBackground}>
{`    end if`}
        </pre>
        <pre className={blockNum===7 ? classes.background : classes.noBackground}>
{`  end for`}
        </pre>
        <pre className={blockNum===8 ? classes.background : classes.noBackground}>
{`end for`}
        </pre>
        <pre className={blockNum===9 ? classes.background : classes.noBackground}>
{`return Arr`}
        </pre>
    </div>
    
    return(
        bubbleCode
    );
}

const BubbleImplementation = () => {
    const Code = Bubble;
    const title = "Bubble Sort";
    const algorithm = "bubble";
    const sort = BubbleSort;

    const props = {
        title,
        algorithm,
        sort,
        Code,
        file: BubbleFile,
    };

    return <ImplementationAnimation {...props} />;
};
```

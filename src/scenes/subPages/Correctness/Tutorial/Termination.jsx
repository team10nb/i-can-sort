/*
    Author: Ruizi Han, Yijie Lu
*/

import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import TerminableCode from '../../../../components/TerminationExample/TerminableCode';
import InterminableCode from '../../../../components/TerminationExample/InterminableCode';
import BubbleSort from '../../../../components/SwitchAnimation/SortingAlgorithms/BubbleSort/BubbleSort';

const useStyles = makeStyles((theme) => ({

    root:{
        display: "flex",
        '& > * + *': {     
            marginLeft: theme.spacing(2),
        },
    },
}));

// slider width
const width = 320; 
// explaination box height
const explainationBoxHeight = 3;

// algorithm can terminate example
const TerminablePart = () => {
    // example array
    const arr = [2, 6, 9, 10, 3];
    // pseudocode highlight block numbers
    const blockNums = [1, 4, 3, 4, 3, 4, 3, 4, 5, 7, 4, 3, 4, 3, 4, 5, 7, 4, 3, 4, 5, 7, 4, 3, 7, 7, 8];

    const {trace, description} = BubbleSort(arr);
    
    const props = {
        trace,
        width,
        blockNums
    };
    
    return(<TerminableCode {...props}/>);
}

// algorithm cannot terminate example
const InterminablePart = () => {
    // pseudocode highlight block numbers
    const blockNums = [1, 3, 2];
    // loop trace
    const trace = [
        [
            {value: 5, height: 50, backgroundColor: "#00BFFF", key: 0, y: 0},
            {value: 10, height: 100, backgroundColor: "#00BFFF", key: 1, y: 0}
        ],[
            {value: 5, height: 50, backgroundColor: "#FFD700", key: 0, y: 0},
            {value: 10, height: 100, backgroundColor: "#FFD700", key: 1, y: 0}
        ],[
            {value: 10, height: 100, backgroundColor: "#00BFFF", key: 1, y: 0},
            {value: 5, height: 50, backgroundColor: "#00BFFF", key: 0, y: 0}
        ],[
            {value: 10, height: 100, backgroundColor: "#FFD700", key: 1, y: 0},
            {value: 5, height: 50, backgroundColor: "#FFD700", key: 0, y: 0}
        ]
    ];
    
    const props = {
        trace,
        explainationBoxHeight,
        blockNums
    };

    return(<InterminableCode {...props}/>);
}

export default function Termination() {
    const classes = useStyles();

    return(
        <div className = {classes.root}>
            <TerminablePart/>
            <InterminablePart/>
        </div>
    );
}

/*
    Author: Ruizi Han, Yijie Lu
*/

import React from 'react';
import {
    makeStyles,
} from "@material-ui/core/styles";
import SwitchAnimation from '../../../../components/SwitchAnimation/SwitchAnimation';
import SwitchSort from '../../../../components/SwitchSort/SwitchSort';
import TerminableCode from '../../../../components/TerminationExample/TerminableCode';
import InterminableCode from '../../../../components/TerminationExample/InterminableCode';
import BubbleSort from '../../../../components/SwitchAnimation/SortingAlgorithms/BubbleSort/BubbleSort';

const useStyles = makeStyles((theme) => ({

    root:{
        display: "flex",
        // '& > *': {
        //     marginTop: theme.spacing(4),
        //   },
        '& > * + *': {     
            marginLeft: theme.spacing(2),
        },
    },
}));

const width = 320; 
const explainationBoxHeight = 3;

const TerminablePart = () => {
    const arr = [2, 6, 9, 10, 3];
    const blockNums = [1, 4, 3, 4, 3, 4, 3, 4, 5, 7, 4, 3, 4, 3, 4, 5, 7, 4, 3, 4, 5, 7, 4, 3, 7, 7, 8];

    const {trace, description} = BubbleSort(arr);
    
    const props = {
        trace,
        description,
        width,
        explainationBoxHeight,
        blockNums
    };
    
    return(<TerminableCode {...props}/>);
}


const InterminablePart = () => {
    // const arr = [4, 6];
    const blockNums = [1, 2, 3, 2];

    // const {trace, description} = BubbleSort(arr);


    const trace = [
        [
            {value: 4, height: 40, backgroundColor: "#00BFFF", key: 0, y: 0},
            {value: 6, height: 60, backgroundColor: "#00BFFF", key: 1, y: 0}
        ],[
            {value: 4, height: 40, backgroundColor: "#FFD700", key: 0, y: 0},
            {value: 6, height: 60, backgroundColor: "#FFD700", key: 1, y: 0}
        ],[
            {value: 6, height: 60, backgroundColor: "#00BFFF", key: 1, y: 0},
            {value: 4, height: 40, backgroundColor: "#00BFFF", key: 0, y: 0}
        ],[
            {value: 6, height: 60, backgroundColor: "#FFD700", key: 1, y: 0},
            {value: 4, height: 40, backgroundColor: "#FFD700", key: 0, y: 0}
        ]
    ];

    const description = ["ddcdws"];
    
    const props = {
        trace,
        description,
        width,
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

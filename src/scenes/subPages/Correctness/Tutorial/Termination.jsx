/*
    Author: Ruizi Han, Yijie Lu
*/

import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { TerminableCode } from '../../../../components/TerminationExample/TerminableCode';
import InterminableCode from '../../../../components/TerminationExample/InterminableCode';
import TipFrame from '../../../../components/TipFrame/TipFrame';
import { color } from '../../../mainPages/Correctness';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));

// algorithm cannot terminate example
const InterminablePart = () => {
    // pseudocode highlight block numbers
    const blockNums = [1, 3, 2];
    // loop trace
    const trace = [
        [
            { value: 5, height: 50, backgroundColor: "#00BFFF", key: 0, y: 0 },
            { value: 8, height: 80, backgroundColor: "#00BFFF", key: 1, y: 0 }
        ], [
            { value: 5, height: 50, backgroundColor: "#FFD700", key: 0, y: 0 },
            { value: 8, height: 80, backgroundColor: "#FFD700", key: 1, y: 0 }
        ], [
            { value: 8, height: 80, backgroundColor: "#00BFFF", key: 1, y: 0 },
            { value: 5, height: 50, backgroundColor: "#00BFFF", key: 0, y: 0 }
        ], [
            { value: 8, height: 80, backgroundColor: "#FFD700", key: 1, y: 0 },
            { value: 5, height: 50, backgroundColor: "#FFD700", key: 0, y: 0 }
        ]
    ];

    const props = {
        trace,
        explainationBoxHeight: 3,
        blockNums
    };

    return (<InterminableCode {...props} />);
}

export default function Termination() {
    const classes = useStyles();

    const message = <p>Termination is an important concept in <font style={{ fontWeight: 'bold' }}>algorithm correctness</font>. Here are two examples, which may help you understand <font style={{ fontWeight: 'bold' }}>what is termination.</font></p>

    const size = {
        left: 240,
        top: 45,
        bottom: 45,
    };

    return (
        <div>
            <TipFrame
                message={message}
                size={size}
                btnColor={color}
            />
            <div className={classes.root}>
                <TerminableCode />
                <InterminablePart />
            </div>
        </div>
    );
}

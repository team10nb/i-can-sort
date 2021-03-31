/*
    Author: Ruizi Han

    Example animation and code of Terminating Bubble Sort.
*/

import { makeStyles } from "@material-ui/core/styles";
import * as React from "react";
import AnimationWithCode from '../../../../../components/AnimationWithCode/AnimationWithCode';
const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginTop: theme.spacing(3),
        },
        width: 380,
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
        marginTop: 50,
        marginBottom: "-5px",
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
    cardOne: {
        width: 380,
        height: 240,
        background: "#F0F0F0"
    },
    cardTwo: {
        width: 380,
        height: 240,
        background: "#F0F0F0",
    },
    slider: {
        marginLeft: 28,
        marginTop: 10,
    },
    title: {
        display: "flex",
        fontFamily: "inherit",
        fontWeight: "700",
        fontSize: "16px",
        justifyContent: "center",
        marginBottom: -5,
    },
    explanation: {
        fontFamily: "inherit",
        fontSize: "16px",
        fontWeight: "700",
        letterSpacing: "1px",
        textAlign: 'center',
        marginBottom: -8,
    },
    control: {
        marginTop: -10,
    }
}));

// dynamic pseudocode
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

// algorithm can terminate example
const TerminableCode = () => {

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

    const props = {
        trace,
        description,
        width: 320,
        blockNums,
        useStyles,
        Code,
        title: "Terminating Swap",
    };

    return (<AnimationWithCode {...props} />);
}

export {
    TerminableCode
};

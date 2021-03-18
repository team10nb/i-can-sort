/*
    Author: Ruizi Han
*/

import { makeStyles } from "@material-ui/core/styles";
import * as React from "react";
import AnimationCode from '../AnimationCode/AnimationCode';
import BubbleSort from '../SwitchAnimation/SortingAlgorithms/BubbleSort/BubbleSort';

const useStyles = makeStyles((theme) =>({
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
        marginTop: 32,
        marginBottom: "5px",
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
    cardOne:{
        width: 380, 
        height: 240,
        background: "#F0F0F0",        
    },
    cardTwo:{
        width: 380, 
        height: 240,
        background: "#F0F0F0",        
    },
    slider:{
        marginLeft: 28,
        marginBottom: 0,
    },
    title:{
        display:"flex",
        fontFamily: "inherit",
        fontWeight: "700",
        fontSize:"16px",
        justifyContent: "center",
    },
    box:{
        marginTop:-60,
    }
}));

// dynamic pseudocode
const Code = (props)=> {
    const {blockNum} = props;
  
    const useStyles = makeStyles((theme) => ({
        background:{
            backgroundColor: "#FEE5D4",
            marginTop: -6,
            fontFamily:"Space Mono",
            lineHeight:"22px",
            fontSize:"10px",
            paddingLeft:"5px",

        },
        noBackground:{
            marginTop: -6,
            fontFamily:"Space Mono",
            lineHeight:"22px",
            fontSize:"10px",
            paddingLeft:"5px",
        }
        
    }));
    const classes = useStyles();

    const terminableCode = 
    <div>
        <pre className={blockNum===1 ? classes.background : classes.noBackground}>
{`Algorithm: BubbleSort(Arr, length){`}
        </pre>
        <pre className={classes.noBackground}>
{`Input: an array of integers Arr`}
        </pre>
        <pre className={classes.noBackground}>
{`       the array's size length`}
        </pre>
        <pre className={classes.noBackground}>
{`  i, j;`}
        </pre>
        <pre className={blockNum===2 ? classes.background : classes.noBackground}>
{`  for(i from 0 to length-1){`}
        </pre>
        <pre className={blockNum===3 ? classes.background : classes.noBackground}>
{`     for(j from 0 to length-1-i){`}
        </pre>
        <pre className={blockNum===4 ? classes.background : classes.noBackground}>
{`       if(array[j] > array[j+1])`}
        </pre>
        <pre className={blockNum===5 ? classes.background : classes.noBackground}>
{`         swap(array[j], array[j+1])`}
        </pre>
        <pre className={blockNum===6 ? classes.background : classes.noBackground}>
{`    }`}
        </pre>
        <pre className={blockNum===7 ? classes.background : classes.noBackground}>
{`  }`}
        </pre>
        <pre className={blockNum===8 ? classes.background : classes.noBackground}>
{`}`}
        </pre>
    </div>
    
    return(
        <div>{terminableCode}</div>
    )
}

// algorithm can terminate example
const TerminableCode = () => {
    // example array
    const arr = [2, 6, 9, 10, 3];
    const {trace, description, blockNums} = BubbleSort(arr);
    
    const props = {
        trace,
        description: "",
        width: 320,
        blockNums,
        useStyles,
        Code,
        title: "Terminable Bubble Sort",
    };
    
    return(<AnimationCode {...props}/>);
}

export {
    TerminableCode
};

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
            letterSpacing: 0.5,
            fontFamily:"Space Mono",
            lineHeight:"22px",
            fontSize:"12px",
            paddingLeft:"5px",
            // fontWeight: 550,
        },
        noBackground:{
            marginTop: -6,
            letterSpacing: 0.5,
            fontFamily:"Space Mono",
            lineHeight:"22px",
            fontSize:"12px",
            paddingLeft:"5px",
            // fontWeight: 550,
        }, 
    }));
    const classes = useStyles();


    
    const terminableCode = 
    <div>
        <pre className={blockNum===1 ? classes.background : classes.noBackground}>
{`Algorithm: BubbleSort(Arr)`}
        </pre>
        <pre className={classes.noBackground}>
{`  length = Arr.length`}
        </pre>
        <pre className={blockNum===2 ? classes.background : classes.noBackground}>
{`  for i from 0 to length-1 do`}
        </pre>
        <pre className={blockNum===3 ? classes.background : classes.noBackground}>
{`    for j from 0 to length-1-i do`}
        </pre>
        <pre className={blockNum===4 ? classes.background : classes.noBackground}>
{`      if Arr[j] > Arr[j+1] then`}
        </pre>
        <pre className={blockNum===5 ? classes.background : classes.noBackground}>
{`        swap((Arr[j], Arr[j+1])`}
        </pre>
        <pre className={blockNum===6 ? classes.background : classes.noBackground}>
{`      end if`}
        </pre>
        <pre className={blockNum===7 ? classes.background : classes.noBackground}>
{`    end for`}
        </pre>
        <pre className={blockNum===8 ? classes.background : classes.noBackground}>
{`  end for`}
        </pre>
        <pre className={blockNum===9 ? classes.background : classes.noBackground}>
{`return Arr`}
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

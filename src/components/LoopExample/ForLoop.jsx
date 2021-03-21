/*
    Author: Ruizi Han
*/

import { makeStyles } from "@material-ui/core/styles";
import * as React from "react";
import AnimationCode from '../AnimationCode/AnimationCode';
import { useStyles } from './Style';



// dynamic pseudocode
const Code = (props)=> {
    const {blockNum} = props;
  
    

    const useStyles = makeStyles((theme) => ({
        background:{
            backgroundColor: "#c8e6c9",
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
    const classes = useStyles();

    const forCode = 
    <div>
        <pre className={blockNum===1 ? classes.background : classes.noBackground}>
{`Algorithm: WhileLoop()`}
        </pre>
        <pre className={classes.noBackground}>
{`  i = 0`}
        </pre>
        <pre className={classes.noBackground}>
{`  a = 0`}
        </pre>
        <pre className={classes.noBackground}>
{`  b = 2`}
        </pre>
        <pre className={blockNum===2 ? classes.background : classes.noBackground}>
{`  for i = 0 to 3 do`}
        </pre>
        <pre className={blockNum===3 ? classes.background : classes.noBackground}>
{`     a = a + b;`}
        </pre>
        <pre className={blockNum===4 ? classes.background : classes.noBackground}>
{`  end for`}
        </pre>
    </div>
    
    return(
        <div>{forCode}</div>
    )
}

const width = 320;
export default function ForLoop() {
    var traceUnit = [];
    var descriptionUnit = '';

    var trace = [
        [
            {value: 'i=0', height: 0, backgroundColor: "#FFD700", key: 0, y: 0},
            {value: 'a=0', height: 0, backgroundColor: "#00BFFF", key: 1, y: 0},
            {value: 'b=2', height: 20, backgroundColor: "#00BFFF", key: 2, y: 0}
        ]
    ];
    var description = ['Begin for loop'];
    var blockNums = [1];

    for(var i = 1; i < 5; i++){
        traceUnit = [
            {value: 'i='+(i-1), height: (i-1)*10, backgroundColor: "#FFD700", key: 0, y: 0},
            {value: 'a='+(i-1)*2, height: (i-1)*20, backgroundColor: "#00BFFF", key: 1, y: 0},
            {value: 'b=2', height: 20, backgroundColor: "#00BFFF", key: 2, y: 0}
        ];
        trace.push(traceUnit);
        traceUnit = [
            {value: 'i='+(i-1), height: (i-1)*10, backgroundColor: "#FFD700", key: 0, y: 0},
            {value: 'a='+i*2, height: i*20, backgroundColor: "#00BFFF", key: 1, y: 0},
            {value: 'b=2', height: 20, backgroundColor: "#00BFFF", key: 2, y: 0}
        ];
        trace.push(traceUnit);
        traceUnit = [
            {value: 'i='+i, height: i*10, backgroundColor: "#FFD700", key: 0, y: 0},
            {value: 'a='+i*2, height: i*20, backgroundColor: "#00BFFF", key: 1, y: 0},
            {value: 'b=2', height: 20, backgroundColor: "#00BFFF", key: 2, y: 0}
        ];
        trace.push(traceUnit);

        blockNums.push(2, 3, 2);


        descriptionUnit = 'i = ' + (i-1) + ', haven\'t exceeded 3';
        description.push(descriptionUnit, 'do a = a + b', 'i increase by 1');

        if(i == 4){
            trace.push(traceUnit);
            blockNums.push(4);
            description.push('i = 4, jump out of the loop');
        }

    }

    
    const props = {
        trace,
        description,
        width,
        blockNums,
        useStyles,
        Code,
        title: "For Loop",
    };
    
    return(<AnimationCode {...props}/>);
}
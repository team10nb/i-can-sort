/*
    Author: Ruizi Han
*/

import { makeStyles } from "@material-ui/core/styles";
import * as React from "react";
import AnimationCode from '../AnimationCode/AnimationCode';

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
        height: 240
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
}));

// dynamic pseudocode
const Code = (props)=> {
    const {blockNum} = props;
  
    const useStyles = makeStyles((theme) => ({
        background:{
            backgroundColor: "#c7dbc3 ",
            marginTop: -6,
        },
        noBackground:{
            marginTop: -6,
        }
        
    }));
    const classes = useStyles();

    const forCode = 
    <div>
        <pre className={blockNum===1 ? classes.background : classes.noBackground}>
{`function for_loop () {`}
        </pre>
        <pre className={classes.noBackground}>
{`  var i;`}
        </pre>
        <pre className={classes.noBackground}>
{`  var a = 0;`}
        </pre>
        <pre className={classes.noBackground}>
{`  var b = 2;`}
        </pre>
        <pre className={blockNum===2 ? classes.background : classes.noBackground}>
{`  for(i from 0 to 3){`}
        </pre>
        <pre className={blockNum===3 ? classes.background : classes.noBackground}>
{`     a = a + b;`}
        </pre>
        <pre className={classes.noBackground}>
{`  }`}
        </pre>
        <pre className={classes.noBackground}>
{`}`}
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
            {value: 'a=0', height: 0, backgroundColor: "#00BFFF", key: 0, y: 0},
            {value: 'b=2', height: 20, backgroundColor: "#00BFFF", key: 1, y: 0}
        ]
    ];
    var description = ['Begin for loop'];
    var blockNums = [1];

    for(var i = 1; i < 5; i++){
        traceUnit = [
            {value: 'a='+i*2, height: i*20, backgroundColor: "#00BFFF", key: 0, y: 0},
            {value: 'b=2', height: 20, backgroundColor: "#00BFFF", key: 1, y: 0}
        ];
        trace.push(traceUnit, traceUnit);
        // trace.push(traceUnit);
        blockNums.push(3, 2);
        // blockNums.push(2);

        descriptionUnit = 'i = ' + (i-1) + ', do a = a + b';
        description.push(descriptionUnit);
        if(i == 4){
            descriptionUnit = 'i increase by 1 and become 5, jump out the loop'
        }else{
            descriptionUnit = 'i increase by 1';
        }
        description.push(descriptionUnit);

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
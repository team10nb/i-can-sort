import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import React, { useState, useEffect } from "react";
import SwitchAnimation from "../SwitchAnimation/SwitchAnimation";
import BubbleSort from "../SwitchAnimation/SortingAlgorithms/BubbleSort/BubbleSort";


const blockNums = [1,2,3,1,2];

const CodeBox = withStyles({
    root: {
        display: "flex",
        fontFamily: "inherit",
        fontSize: "1em",
        // fontWeight: "700",
        letterSpacing: "1px",
        borderRadius: "12px",
        // alignItems:"center",
        // justifyContent:"center",
    },

    back:{
        backgroundColor: "blue",
    }
})(Card);



const useStyles = makeStyles((theme) => ({
    root: {
        // display: "grid",
        // "& > *": {
        //     width: theme.spacing(width*1),
        //     height: theme.spacing(height*1),
        //     border: "3px solid white",
        // },
        justifyContent: "center",
        alignContent: "center",
        verticalAlign: "center",
        display: "flex",
        fontFamily: "inherit",
        fontSize: "1em",
        fontWeight: "700",
        letterSpacing: "1px",
        borderRadius: "12px",
        backgroundColor: "white",
        marginTop: "4px",
        marginBottom: "3px",
        marginLeft: "3px",
        // alignItems:"center",
        // justifyContent:"center",
    },
    back:{
        backgroundColor: "yellow",
    },
    noback:{

    }
}));

function Code(props) {
    const {blockNum} = props;
    const classes = useStyles();



    const terminableCode = <div>
    <pre className={blockNum===1 ? classes.back : classes.noback}>  
    {`procedure Bubble(n:integer);
var temp,i,j:integer;
change:boolean;`}</pre>
<pre className={blockNum===2 ? classes.back : classes.noback}>{`begin
   for i:=1 to n-1 do`}</pre>
   <pre className={blockNum===3 ? classes.back : classes.noback}>{`
   begin
     change:=false;
     for j:=n-1 downto i do
       if a[j]>a[j+1] then`}</pre>
       <pre className={blockNum===4 ? classes.back : classes.noback}>{`
       begin
         change:=true;
         temp:=a[j]; a[j]:=a[j+1]; a[j+1]:=temp;
       end;
       if not(change) then exit;
   end;
end;
    `}
    </pre></div>

    return(
        <CodeBox elevation={3}>{terminableCode}</CodeBox>

    )

}

// let current = 0;

// const getCurrent = (currentStep) => {
//     current = currentStep;
//     console.log(current);
// }

let blockNum = 0;

const setBlockNum = (currentStep) => {
    
    blockNum = currentStep;
    console.log(blockNum);
}


export default function Test() {
    // const [blockNum, setBlockNum] = useState(0);

    // useEffect(() => {
    //     setBlockNum(current);
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [current]);
    console.log(blockNum);


    // The user input
    const [str, setStr] = useState("2,1,6,10,9,12,8,3");
    // The array gained from processed user input
    const [arr, setArr] = useState([2, 1, 6, 10, 9, 12, 8, 3]);
    let trace = "";
    trace = BubbleSort(arr);


    return (
        <div
            style={{
                display: "grid",
                justifyContent: "center",
                alignContent: "flex-end",
                height: 500,
            }}
        >
            <div style={{
                height: 40,
                width:900,
                display: "flex"
            }}>
                <div style={{
                height: 40,
                width: 90,
                fontSize:"26px",
                fontWeight:"500",
                // transform: "rotate(90deg)",
                // marginTop:"35px",
                // marginLeft:"-55px",
                }}>
                {"Bubbble"}
                </div>
            </div>
            <SwitchAnimation {...trace} width={900} explainationBoxHeight={3} setBlock={setBlockNum}/>
            <div><Code key={blockNum} blockNum={blockNums[blockNum]}/></div>

        </div>
    );
}

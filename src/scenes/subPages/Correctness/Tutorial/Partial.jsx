import React from 'react';
import { useState } from 'react';
import AlgorithmButton from '../../../../components/CorrectnessExample/AlgorithmButton';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {color} from '../../../mainPages/Correctness';

const styles = {
    table:{
        display: 'block', 
        border:1, 
        // borderStyle:'solid', 
    },
    thead:{
        float: 'left',
    },
    tbody:{
        display: 'inline-block',
    },
    th:{
        fontSize: 14,
        display: 'block',
        width: 65,
        height:30,
        textAlign:'center',
    },
    tr:{
        height:60,
        display: 'inline-block',
        border:1, 
        borderRightStyle:'solid', 
    },
    td:{
        fontSize: 14,
        display: 'block',
        textAlign:'center',
        width: 60,
        height:30,
        border:1, 
        // borderRightStyle:'solid', 
    },
}
const title_interminate = <h3>Interminate</h3>;
const code_interminate = 
<pre>  
{`
factorial1 (int n){
  int result = 1;
  for (int i=1; ; i++)
  {
    result = result * i;
  }
  return result;
}
`}
</pre>
const exp_interminate = "Cannot terminate, no output.";
const output_interminate = "";


const title_interminateAndIncorrect = <h3>Terminate and Incorrect</h3>;
const code_interminateAndIncorrect = 
<pre>  
{`
factorial2 (int n){
  int result = 1;
  for (int i=1; i<=n; i++)
  {
     result = result + i;
  }
  return result;
}
`}
</pre>
const exp_interminateAndIncorrect = "Wrong result.";
const output_interminateAndIncorrect = "29";


const title_interminateAndCorrect = <h3>Terminate and Correct</h3>;
const code_interminateAndCorrect = 
<pre>  
{`
factorial3 (int n){
  int result = 1;
  for (int i=1; i<=n; i++)
  {
    result = result * i;
  }
  return result;
}
`}
</pre>
const exp_interminateAndCorrect = "Correct";
const output_interminateAndCorrect = "5040";


function ExampleTable(props){
    function tables() {
        let table=[];
        let i = 1;
        for(var index=0; index<props.numbers.length; index++){
            i = index + 1;
            if(i>10) {i = "...";}
            table.push(
                <tr style = {styles.tr}>
                <td style = {styles.td}>{props.numbers[index]}</td>
                <td style = {styles.td}>{i}</td>
                </tr>
            ); 
        }
        return table;
    }

    return(
        <table style={styles.table}>
            <thead style = {styles.thead}>
            <tr style = {styles.tr}>
                <th style = {styles.th}>result</th>
                <th style = {styles.th}>i</th>
            </tr>
            </thead>
            <tbody style = {styles.tbody}>
            {tables()}
            </tbody>
        </table>
    );
}


export default function Partial() {
    const [table,setTable] = useState([]);
    const [exp,setExp] = useState("");
    const [output,setOutput] = useState("");

    function runAlogrithm(current, list, exp, output){
        var times=0;
        var timer=setInterval(()=>{
        if(times >= list.length-1){
            setExp(exp);
            setOutput(output);
            clearInterval(timer);
        }
        current.push(list[times]);
        const newTable = current.slice();
        setTable(newTable);
        times++;
        },300);
    }

    const handleClick = (index) => () => {
        setExp("");
        setOutput("");
        var current = [];
        switch (index) {
            case 0:
                var list = [1,1,2,6,24,120,720,5040,40320,362880,'...'];
                runAlogrithm(current, list, exp_interminate, output_interminate);
                break;
            case 1:
                var list = [1,2,4,7,11,16,22,29];
                runAlogrithm(current, list, exp_interminateAndIncorrect, output_interminateAndIncorrect);
                break;
            case 2:
                var list = [1,1,2,6,24,120,720,5040];
                runAlogrithm(current, list, exp_interminateAndCorrect, output_interminateAndCorrect);
                break;
            default:
                break;
        }
      };


    return( 
        <div>
            {/* <h1 style = {{paddingBottom:30}}>Let's take 7! as an example.</h1> */}
            <Card style={{backgroundColor:'#EFEFEF'}}>
            <CardContent>
                <h1>Input: n = 7</h1>
                <div style = {{height:150}}>
                    <h1 style = {{color:color, display: 'inline-block'}}>Process: </h1>
                    <Card style = {{height:60, backgroundColor:'#EFEFEF'}}>
                    <ExampleTable numbers={table} style = {{paddingLeft:20}}/>
                    </Card>
                    <h1 style = {{color: color}}>Explanation: {exp}</h1>
                </div>
                <h1>Output: {output}</h1>
            </CardContent>
            </Card>

            <div style = {{paddingTop:20}}>
                <div style={{display:'inline-block'}}>
                <AlgorithmButton paddingLeft={0} paddingRight={0} title = {title_interminate} code = {code_interminate} onClick={handleClick(0)} isHover={true}/>
                </div>
                <div style={{display:'inline-block'}}>
                <AlgorithmButton paddingLeft={0} paddingRight={35} title = {title_interminateAndIncorrect} code = {code_interminateAndIncorrect} onClick={handleClick(1)}/>
                </div>
                <div style={{display:'inline-block'}}>
                <AlgorithmButton paddingLeft={0} paddingRight={0} title = {title_interminateAndCorrect} code = {code_interminateAndCorrect} onClick={handleClick(2)}/>
                </div>
            </div>
        </div>
    );
}

 
  
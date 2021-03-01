/*
    Author: Yuting Jiang
*/

import React from 'react';
import { useState } from 'react';
import AlgorithmButton from '../../../../components/CorrectnessExample/AlgorithmButton';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {color} from '../../../mainPages/Correctness';
import Button from '@material-ui/core/Button';
import { green, red } from '@material-ui/core/colors';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

const styles = {
    table:{
        display: 'block', 
    },
    thead:{
        float: 'left',
    },
    tbody:{
        display: 'inline-block',
    },
    th:{
        fontSize: 16,
        display: 'block',
        width: 60,
        height:30,
        textAlign:'center',
        textTransform: 'lowercase',
    },
    tr:{
        height:60,
        display: 'inline-block',
        border:1, 
        // borderRightStyle:'solid', 
    },
    td:{
        fontSize: 16,
        display: 'block',
        textAlign:'center',
        width: 57,
        height:30,
    },
}

const title_interminate = 
<h3>Example1<br />
    <Button 
        variant="outlined" 
        disabled 
        startIcon={<CheckIcon style={{ color: green[500] }} />}
        style = {{height: 27, color: green[500]}}
    >
        Partial
    </Button>
    <Button 
        variant="outlined" 
        disabled 
        startIcon={<CloseIcon style={{ color: red[700] }} />}
        style = {{height: 27, color: red[700]}}
    >
        Total
    </Button>
</h3>

const code_interminate = 
<pre>  
{`
factorial1 (int n){
  int result = 1;
`}
<code style = {{color: red[700]}}>  for (int i=1; ; i++)</code>
{`
  {
    result = result * i;
  }
  return result;
}
`}
</pre>
const props_interminate = {
    list: [1,1,2,6,24,120,720,5040,40320,362880,'...'],
    exp: "The algorihm cannot terminate, no output.",
    output: "",
}


const title_terminateAndIncorrect = 
<h3>Example2<br />
    <Button 
        variant="outlined" 
        disabled 
        startIcon={<CloseIcon style={{ color: red[700] }} />}
        style = {{height: 27, color: red[700]}}
    >
        Partial
    </Button>
    <Button 
        variant="outlined" 
        disabled 
        startIcon={<CloseIcon style={{ color: red[700] }} />}
        style = {{height: 27, color: red[700]}}
    >
        Total
    </Button>
</h3>;
const code_terminateAndIncorrect = 
<pre>  
{`
factorial2 (int n){
  int result = 1;
  for (int i=1; i<=n; i++)
  {
`}
<code style={{color: red[700]}}>    result = result + i;</code>
{`
  }
  return result;
}
`}
</pre>
const props_terminateAndIncorrect = {
    list: [1,2,4,7,11,16,22,29],
    exp: "Wrong result. The output is not as expected.",
    output: "29",
}


const title_terminateAndCorrect = 
<h3>Example3<br />
    <Button 
        variant="outlined" 
        disabled 
        startIcon={<CheckIcon style={{ color: green[500] }} />}
        style = {{height: 27, color: green[500]}}
    >
        Partial
    </Button>
    <Button 
        variant="outlined" 
        disabled 
        startIcon={<CheckIcon style={{ color: green[500] }} />}
        style = {{height: 27, color: green[500]}}
    >
        Total
    </Button>
</h3>;
const code_terminateAndCorrect = 
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
const props_terminateAndCorrect = {
    list: [1,1,2,6,24,120,720,5040],
    exp: "The algorithm termitates and output is correct.",
    output: "5040",
}  

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
    const [timer,setTimer] = useState();

    const handleClick = (props) => () => {
        clearInterval(timer);
        setExp("");
        setOutput("");
        setTable([]);

        const {list, exp, output} = props;
        var current = [];
        var times=0;

        var newTimer =setInterval(()=>{
        if(times >= list.length-1){
            setExp(exp);
            setOutput(output);
            clearInterval(newTimer);
        }
        current.push(list[times]);
        const newTable = current.slice();
        setTable(newTable);
        times++;
        },300);

        setTimer(newTimer);
    }


    return( 
        <div>
            {/* <h1 style = {{paddingBottom:30}}>Let's take 7! as an example.</h1> */}
            <Card style={{width:785, backgroundColor:'#EFEFEF'}}>
            <CardContent>
                <h1>Input: n = 7</h1>
                <div style = {{height:140}}>
                    <h1 style = {{display: 'inline-block',paddingBottom:10}}>Algorithm: factorial(7) </h1><br />
                    <Button variant='outlined' disabled style={{height:60, backgroundColor:'#EFEFEF', color:color}}>
                    <ExampleTable numbers={table} style = {{paddingLeft:20}}/>
                    </Button>
                    <h1 style = {{color: color}}> {exp}</h1>
                </div>
                <h1>Expected Output: 5040</h1>
                <h1>Actual Output: {output}</h1>
            </CardContent>
            </Card>

            <div style = {{paddingTop:20}}>
                <div style={{display:'inline-block'}}>
                <AlgorithmButton 
                    paddingLeft={0} 
                    paddingRight={0} 
                    title = {title_interminate} 
                    code = {code_interminate} 
                    onClick={handleClick(props_interminate)}
                />
                </div>
                <div style={{display:'inline-block'}}>
                <AlgorithmButton 
                    paddingLeft={10} 
                    paddingRight={10} 
                    title = {title_terminateAndIncorrect} 
                    code = {code_terminateAndIncorrect} 
                    onClick={handleClick(props_terminateAndIncorrect)}
                />
                </div>
                <div style={{display:'inline-block'}}>
                <AlgorithmButton 
                    paddingLeft={0} 
                    paddingRight={0} 
                    title = {title_terminateAndCorrect} 
                    code = {code_terminateAndCorrect} 
                    onClick={handleClick(props_terminateAndCorrect)}
                />
                </div>
            </div>
        </div>
    );
}

 
  
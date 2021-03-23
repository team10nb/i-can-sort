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
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { isUndefined } from 'lodash';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import BackDrop from '../../../../components/BackDrop/BackDrop';
import '../../../../fonts/fonts.css';

const useStyles = makeStyles((theme) => ({
    // button:{
    //     borderWidth: 1.5,
    //     borderColor: '#808080',
    //     color: '#808080',
    //     borderRadius: 11,
    //     "&:hover, &$focusVisible": {backgroundColor: '#EFEFEF'},
    //     marginLeft: "10px",
    //     height: 40,
    //     width: 80,
    // },
}))

const CssTextField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "grey",
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: color,
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "grey",
                borderRadius: 12,
            },
            "&:hover fieldset": {
                borderColor: "grey",
            },
            "&.Mui-focused fieldset": {
                borderColor: color,
            },
        },
        width: "500px",
    },
})(TextField);

const title_interminate = 
<h3>Example1<br />
    <Button 
        variant="outlined" 
        disabled 
        startIcon={<CheckIcon style={{ color: green[500] }} />}
        style = {{height: 27, width:100, color: green[500], marginTop: 6, marginRight:5}}
    >
        Partial
    </Button>
    <Button 
        variant="outlined" 
        disabled 
        startIcon={<CloseIcon style={{ color: red[700] }} />}
        style = {{height: 27, width:100, color: red[700], marginTop: 6, marginRight:5}}
    >
        Total
    </Button>
</h3>

const code_interminate = 
<pre style={{fontFamily: "Space Mono", fontWeight:"400", marginTop:-20}}>  
{`
factorial (int n){
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
    exp: "The algorihm cannot terminate, no output.",
    output: 1,
}


const title_terminateAndIncorrect = 
<h3>Example2<br />
    <Button 
        variant="outlined" 
        disabled 
        startIcon={<CloseIcon style={{ color: red[700] }} />}
        style = {{height: 27, width:100, color: red[700], marginTop: 6, marginRight:5}}
    >
        Partial
    </Button>
    <Button 
        variant="outlined" 
        disabled 
        startIcon={<CloseIcon style={{ color: red[700] }} />}
        style = {{height: 27, width:100, color: red[700], marginTop: 6, marginRight:5}}
    >
        Total
    </Button>
</h3>;
const code_terminateAndIncorrect = 
<pre style={{fontFamily: "Space Mono", fontWeight:"400", marginTop:-25}}>  
{`
factorial (int n){
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
    exp: "Wrong result. The output is not as expected.",
    output: 2,
}


const title_terminateAndCorrect = 
<h3>Example3<br />
    <Button 
        variant="outlined" 
        disabled 
        startIcon={<CheckIcon style={{ color: green[500] }} />}
        style = {{height: 27, width:100, color: green[500], marginTop: 6, marginRight:5}}
    >
        Partial
    </Button>
    <Button 
        variant="outlined" 
        disabled 
        startIcon={<CheckIcon style={{ color: green[500] }} />}
        style = {{height: 27, width:100, color: green[500], marginTop: 6, marginRight:5}}
    >
        Total
    </Button>
</h3>;
const code_terminateAndCorrect = 
<pre style={{fontFamily: "Space Mono", fontWeight:"400", marginTop:-20}}>  
{`
factorial (int n){
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
    exp: "The algorithm termitates and output is correct.",
    output: 3,
}  

const message = <p>Suppose now we have <font style={{fontWeight:'bold'}}>three</font> different examples to implement an algorithm <font style={{fontWeight:'bold'}}>factorial(n)</font>, which is used to calculate the factorial of 1 to 20.</p>

const size = {
      left:240, 
      top:45, 
      bottom:45,
};

export default function Partial() {
    const classes = useStyles();

    const [exp,setExp] = useState("");
    const [output,setOutput] = useState(null);
    const [input, setInput] = useState("7");
    const [expOutput, setExpOutput] = useState("5040");
    const [wrongMsg, setWrongMsg] = useState(" ");
    const [error, setError] = useState(false);

    const confirm = (props) => {
        setExp("");
        setOutput("");
        //input is undefined
        if(isUndefined(input)){
            setInput("empty");
            setExpOutput("");
            setError(true);
            setWrongMsg("Please enter a positive integer from 1 to 20.");
            return;
        }

        //input is null
        if(input === ""){
            setInput("empty");
            setExpOutput("");
            setError(true);
            setWrongMsg("Please enter a positive integer from 1 to 20.");
        }
    
        //valid input
        if (input.match(/^[0-9]*$/) && input>0 && input<21){
            const {exp, output} = props;
            setExpOutput(factorial(input));
            setError(false);
            setWrongMsg("");
            runAlgorithm(exp, output);
        }
        else{
            setInput("empty");
            setExpOutput("");
            setError(true);
            setWrongMsg("Please enter a positive integer from 1 to 20.");
            setExp("");
            setOutput("");
        }
    };

    const handleClick = (props) => () => {
        // const {exp, output} = props;
        confirm(props);
        // runAlgorithm(exp, output);
    };

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const runAlgorithm = (exp, index) => {
        if(isUndefined(input) || input==="empty"){
            setExp("Please enter input first.");
            return;
        }
        switch(index) {
            case 1:
                setExp(exp);
                setOutput("");
                break;
            case 2:
                setExp(exp);
                setOutput(factorial_add(input));
                break;
            case 3:
                setExp(exp);
                setOutput(expOutput);
                break;
            default:
                break;
        }
    };

    return( 
        <div>
            <BackDrop 
                message={message} 
                size={size}
                btnColor={color}
            />
            <div style={{paddingLeft:6, paddingTop:10}}>
            <Card style={{height: 280, width:770, backgroundColor:'#EFEFEF', paddingTop:6}}>
                <div style={{paddingLeft: 20}}>

                <h1 style={{height:35}}>Algorithm: factorial(n) </h1>

                <h1 style={{ height:55}}>Input: &nbsp;
                <CssTextField 
                    size="small" 
                    label="Enter a positive integer from 1 to 20" 
                    InputProps={{
                        startAdornment: <InputAdornment position="start">n = </InputAdornment>,
                    }}
                    placeholder={input}
                    variant="outlined"
                    style={{display: 'inline-block'}}
                    onChange={handleChange}
                    helperText={wrongMsg}
                    style = {{width:300}}
                    error = {error}
                />
                </h1>

                <h1>Expected Output: {expOutput}</h1>

                <div style={{height:40, display:"flex", verticalAlign: "middle"}}>
                <h1 style={{color: color, fontFamily: "Space Mono", fontWeight: 400}}>-------Click below example algorithms to see the output-------</h1>
                </div>

                <h1>Actual Output: {output}</h1>

                <h1 style = {{color: red[700]}}> {exp}</h1>

                </div>
            </Card>
            </div>
            <div style = {{paddingTop:10}}>
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

 
function removeDot(s) {
    if (s == null) return "";
    var dot = "，,";
    var str = s;
    if (dot.indexOf(str.charAt(str.length - 1)) !== -1) {
        var i = str.length - 1;
        while (i >= 0 && dot.indexOf(str.charAt(i)) !== -1) {
            i--;
        }
        str = str.substring(0, i + 1);
    }
    return str;
}

function factorial(number){
    var result = 1;
    for (var i=1; i<=number; i++){
        result = result * i;
    }
    return result;
}

function factorial_add(number){
    if(number==="")
        return;
    var result = 1;
    for (var i=1; i<=number; i++){
        result = result + i;
    }
    return result;
}

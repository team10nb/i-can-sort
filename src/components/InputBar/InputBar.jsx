import React, {useState, useRef, useImperativeHandle, forwardRef} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

export default function InputBar(props, ref) {
  const { color, defaultArr } = props;

  const [str, setStr] = useState('');
  const [arr, setArr] = useState([]);
  const [isValid, setIsValid] = useState(true);
  const [wrongMsg, setWrongMsg] = useState('');



//   const componentDidMount = ()=>{
//     this.props.onRef(this);
//   }

    // const childRef = useRef(null);
    // useImperativeHandle(ref, () => { 
    //     // return arr;
    //     return {
    //         //clickSwitch是子组件暴露的函数
    //         getArr() {
             
    //             return childRef.current.arr;
    //         }
    //     }
    
    // })


  const storeInput = (e)=>{
    const eValue = trim(e.target.value);
    
    if(e.target.value && eValue){     
        setStr(eValue);
        setIsValid(true);
    }
  }
  

//   用正则表达式保证数据
    const checkFormat = () =>{  
        // console.log(str);
        const s = str;  
        // 只有一个数字 
        if(s.match(/^[0-9]*$/)){
            setIsValid(false);

            setWrongMsg('Please enter more than 1 number.');      // 只有一个数字
        }
        // 数字,数字,数字
        else if(s.match(/^\d+((,|，)\d+)*$/)){
            setIsValid(true);
            setWrongMsg('');      // 只有一个数字
            setArr(s.split(/[，,]/));
        }
        else{
            setIsValid(false);
            setWrongMsg('Please follow the correct format.');     // 格式不对
        }
        return 0;
    }

  
    const error = isValid ? '':'error';
    const label = isValid ? 'Enter your own array':'Invalid Input';
    const helper = isValid ? ' ':wrongMsg;

    let textStyle={
      width:'400px',
      margin:'0 10px',
    }

    let buttonStyle={
      height:'56px',
    }


    return (
      <div>
        <TextField
          error={error}
          label={label}
          type="search"
          helperText={helper}
          variant="outlined"
          onChange={(e) => {storeInput(e);}}
          onFocus={(e) => {storeInput(e);}}
          style={textStyle}
          defaultValue={defaultArr}
        //   ref={childRef}
        />
        
        <Button 
          variant="contained" 
          color="primary" 
          disableElevation
        //   onClick={this.checkFormat.bind(this)}
          onClick={() => {checkFormat();}}
        
          style={buttonStyle}
          >
            Create
        </Button>
    </div>
    );
}

// let InputBarChild = forwardRef(InputBar);

// export default InputBarChild;


//供使用者调用，去除两边空格
function trim(s){  
    return trimRight(trimLeft(s));  
}  


//去掉左边的空白  
function trimLeft(s){  
    if(s == null) {  
        return "";  
    }  
    var whitespace = " \t\n\r";  
    var str = s;  
    if(whitespace.indexOf(str.charAt(0)) !== -1) {  
        var j=0, i = str.length;  
        while(j < i && whitespace.indexOf(str.charAt(j)) !== -1){  
            j++;  
        }  
        str = str.substring(j, i);  
    }  
    return str;  
}  

//去掉右边的空白  
function trimRight(s){  
    if(s == null) return "";  
    var whitespace = " \t\n\r";  
    var str = s;  
    if(whitespace.indexOf(str.charAt(str.length-1)) !== -1){  
        var i = str.length - 1;  
        while (i >= 0 && whitespace.indexOf(str.charAt(i)) !== -1){  
            i--;  
        }  
        str = str.substring(0, i+1);  
    }  
    return str;  
}

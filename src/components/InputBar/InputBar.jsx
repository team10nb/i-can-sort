import React from 'react';
import 'antd/dist/antd.css';
// import './InputBar.css';
import {Input} from 'antd';




export default class InputBar extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            arr: [],
            isValid: false,
            wrongType: -1
        };
    }

    
    handleNumbers = (e)=>{
        console.log(e);
        if(e && trim(e)){           
            this.checkFormat(trim(e));
        }else{
            this.setState({
                isValid: false,
                wrongType: 1    // 输入框为空
            });
        }
        return e;
    }

    //用正则表达式保证数据
    checkFormat(s){    
        // 只有一个数字 
        if(s.match(/^[0-9]*$/)){
            this.setState({
                isValid: false,
                wrongType: 2       // 只有一个数字
            });
            // console.log(s);
            // return "Please enter 2 or more numbers.";
        }
        // 数字,数字,数字
        else if(s.match(/^\d+((,|，)\d+)*$/)){
            this.setState({
                isValid: true,
                wrongType: -1,
                arr: s.split(/[，,]/)
            });
            // console.log(this.state.arr+'hhhh');
            // return 0;
        }
        else{
            this.setState({
                isValid:false,
                wrongType: 3        // 格式不对
            });
            // return "Please follow the correct format.";
        }
        return 0;
    }


    
    // 搜索框
    render(){
        const placeholder = this.props.placeholder;
        const defaultValue = this.props.defaultValue;       
        let {Search} = Input;
        return (
            <div>
                <Search id="text"
                    placeholder={placeholder}
                    allowClear="true"
                    // enterButton="Create"
                    // size="large"
                    // position = "center"
                    style = {{ width: 800}}
                    onSearch={e=>this.handleNumbers(e)}
                    defaultValue = {defaultValue ? defaultValue:''}     // 可以选择性设置框内默认值
                />
            </div>            
        );
    }
}

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





import React from 'react';

class Bar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            color: this.props.color,
            num: this.props.num,
        };
    }

    render(){
        const color = this.state.color;
        const num = this.state.num;
        // height和num之间可能要做一些换算之类的，先这样写了
        const height = num;
        
        let barStyle = {
            height: height + 'px', 
            width: '30px',
            background: color,
            // background: 'red',
            borderWidth: '10px',
            borderRadius: '8px',
        };

        const fontStyle = {
            margin: '0px auto',
            padding: '0px',
            textAlign: 'center',
            fontSize: '20px',
            fontColor: 'black',
            letterSpacing: '0px',
        }

        
        return (
            <div style = {barStyle}>
                <p style = {fontStyle}>{num}</p>
            </div>
        )
    }
}


export default Bar;
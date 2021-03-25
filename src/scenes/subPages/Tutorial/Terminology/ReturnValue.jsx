/*
    Author: Yani Huang
*/
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';



export default function ReturnValue(props) {
    const styles ={
        root:{
            display: "flex",
            '& > *': 
            {     
                marginRight: 10,
            },
            backgroundColor:"#EFEFEF", 
            height:"500px",
            width:"750px",
            marginLeft:"15px",

        },
        title:{
            fontSize: 20,
            textAlign: 'center',
        },
        subtitle:{
            fontSize: 15,
            fontWeight: "bold",
        },
        div:{
            fontSize: 15,
            lineHeight: '2em',
            fontWeight: "400",
        },   
        sample:{
            marginLeft:"240px",
            textAlign:'left',
            fontSize: 15,
            lineHeight: '2em',
            fontWeight: "400",
        },
    } 
 
    return(
        <div>
          <Card style={styles.root}>
            <CardContent>
            <h1 style={styles.title}>- Return Value -</h1>
            <br></br>
            <div style={styles.div}>Standard Pseudocode use <font style={{fontWeight:'bold'}}>return [expression]</font> to present the output of an algorithm. See the example below:</div>
            <br></br>
            <div style={styles.sample}>Algorithm: Return_A<br></br>Input: an integer A<br></br>Output: An integer A</div>
            <br></br>
            <div style={styles.sample}>A = 0 <br></br> B = 2 <br></br> A = A + B <br></br> return A</div>
            <br></br>
            <div style={styles.div}>The example above will return an integer A, which should be 2.</div>

            </CardContent>
         </Card>
        </div>
    );
}

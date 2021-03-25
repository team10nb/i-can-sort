/*
    Author: Yani Huang
*/
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';



export default function Method(props) {
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
            marginLeft: '20px',
        },
        div:{
            fontSize: 14,
            lineHeight: '2em',
            fontWeight: "400",
            marginLeft: '20px',
        },   
        sample:{
            fontSize: 12,
            lineHeight: '2em',
            fontWeight: "400",
        },
        sample2:{
            marginLeft:"90px",
            fontSize: 12,
            lineHeight: '2em',
            fontWeight: "400",
        },
        ExampleCard:{
            paddingLeft:"15px",
            paddingTop:"0px",
            marginLeft:"210px",
            width:'300px',
            backgroundColor:"#FFFFFF", 
        },
    } 
 
    return(
        <div>
          <Card style={styles.root}>
            <CardContent>
            <h1 style={styles.title}>Method</h1>
            <div style={styles.subtitle}>
            Method Declaration
            </div>
            <br></br>
            <div style={styles.div}>Standard Pseudocode should start with a <font style={{fontWeight:'bold'}}>method declaration</font> to explain the name, input and output of the Algorithm. See the sample below:</div>
            <br></br>
            <Card style={styles.ExampleCard}>
                <CardContent>
                    <div style={styles.sample}>
                        Algorithm: algorithm_name<br></br>Input: [explanation of input]<br></br>Output: [explanation of output]
                    </div>
                </CardContent>
            </Card>
           
            <br></br>
            <br></br>
            <Divider variant="middle" />
            <br></br>
            <br></br>
            <div style={styles.subtitle}>
            Method Call
            </div>
            <br></br>
            <div style={styles.div}>
               A <font style={{fontWeight:'bold'}}>Method Call</font> is required While using other methods in Pseudocode. Commen syntax of a method call is Algorithm method (arg [, arg…]). See example below:
            </div>
            <br></br>
            <Card style={styles.ExampleCard}>
                <CardContent>
                <div style={styles.sample2}>swap(a,b)</div>
                </CardContent>
            </Card>
            </CardContent>
         </Card>
        </div>
    );
}
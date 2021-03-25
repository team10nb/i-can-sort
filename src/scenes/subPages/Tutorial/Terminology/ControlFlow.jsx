/*
    Author: Yani Huang
*/
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


export default function Expressions(props) {
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
            fontSize: 15,
            lineHeight: '2em',
            fontWeight: "400",
            marginLeft: '20px',
        },   
        sample:{
            // marginLeft:"0px",
            // textAlign:'left',
            // fontSize: 15,
            // lineHeight: '2em',
            // fontWeight: "350",
            fontSize: 14,
            lineHeight: '2em',
            fontWeight: "400",
        },
        ExampleCard:{
            paddingLeft:"5px",
            paddingTop:"5px",
            marginLeft:"270px",
            width:'200px',
            backgroundColor:"#FFFFFF", 
        },
    } 
 
    return(
        <div>
          <Card style={styles.root}>
            <CardContent>
            <h1 style={styles.title}>IF-THEN-ELSE</h1>
            <br></br>
            <div style={styles.div}>Binary choice on a given Boolean condition is indicated by the use of four keywords: IF, THEN, ELSE, and ENDIF. The general form is:</div>
            <br></br>
            <br></br>
            <Card style={styles.ExampleCard}>
                <CardContent>
                    <div style={styles.sample}>
                        IF condition THEN<br></br>sequence 1<br></br>ELSE<br></br>sequence 2<br></br>END IF
                    </div>
                </CardContent>
            </Card>
            
            <br></br>
            <br></br>
            <div style={styles.div}>The ELSE keyword and "sequence 2" are optional. If the condition is true, sequence 1 is performed, otherwise sequence 2 is performed.</div>
            </CardContent>
         </Card>
        </div>
    );
}


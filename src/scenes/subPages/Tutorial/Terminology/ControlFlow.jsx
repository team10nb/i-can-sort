import React from 'react';
import Card from '@material-ui/core/Card';
import TerminologyBackDrop from '../../../../components/TutorialTerminology/TerminologyBackDrop';
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
            marginLeft:"22px",
            marginRight:"20px",

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
            marginLeft:"250px",
            textAlign:'left',
            fontSize: 15,
            lineHeight: '2em',
            fontWeight: "350",
        },
    } 
 
    return(
        <div>
          <Card style={styles.root}>
            <CardContent>
            <h1 style={styles.title}>- Control Flow -</h1>
            <div style={styles.subtitle}>
            IF-THEN-ELSE
            </div>
            <div style={styles.div}>Binary choice on a given Boolean condition is indicated by the use of four keywords: IF, THEN, ELSE, and ENDIF. The general form is:</div>
            <br></br>
            <div style={styles.sample}>IF condition THEN<br></br>sequence 1<br></br>ELSE<br></br>sequence 2<br></br>END IF</div>
            <br></br>
            <div style={styles.div}>The ELSE keyword and "sequence 2" are optional. If the condition is true, sequence 1 is performed, otherwise sequence 2 is performed.</div>
            </CardContent>
         </Card>
        </div>
    );
}


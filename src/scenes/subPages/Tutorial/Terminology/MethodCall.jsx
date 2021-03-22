import React from 'react';
import Card from '@material-ui/core/Card';
import TerminologyBackDrop from '../../../../components/TutorialTerminology/TerminologyBackDrop';
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
            <h1 style={styles.title}>- Method -</h1>
            <div style={styles.subtitle}>
            Method Declaration
            </div>
            <br></br>
            <div style={styles.div}>Standard Pseudocode should start with a <font style={{fontWeight:'bold'}}>method declaration</font> to explain the name, input and output of the Algorithm. See the sample below:</div>
            <br></br>
            <div style={styles.sample}>Algorithm: algorithm_name<br></br>Input: [explanation of input]<br></br>Output: [explanation of output]</div>
            <br></br>
            <Divider variant="middle" />
            <br></br>
            <div style={styles.subtitle}>
            Method Call
            </div>
            <br></br>
            <div style={styles.div}>
               A <font style={{fontWeight:'bold'}}>Method Call</font> is required While using other methods in Pseudocode. Commen syntax of a method call is Algorithm method (arg [, arg…]). See example below:
            </div>
            <br></br>
            <div style={styles.sample}>swap(a,b)</div>
            </CardContent>
         </Card>
        </div>
    );
}

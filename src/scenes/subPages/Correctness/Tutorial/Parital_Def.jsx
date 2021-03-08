import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import img_partial from "../../../../Resource/partial.png";

export default function Total_Def(props) {
    const styles ={
        root:{
            display: "flex",
            '& > *': 
            {     
                marginRight: 20,
            },
        },
        title:{
            fontSize: 26,
        },
        div:{
            fontSize: 18,
            lineHeight: '2em',
        },
        card1:{
            backgroundColor:"#EFEFEF", 
            height:550, 
            width:"65%"
        },
        card2:{
            backgroundColor:"#EFEFEF", 
            height:550, 
            width:"35%"
        },
    } 
    return(
        <div style={styles.root}>

        <Card style={styles.card1}>
            <CardContent>
            <h1 style={styles.title}>Correctness</h1>
            <div style={styles.div}>An algorithm for a computational problem is correct, if for every legal input instance, the required output is produced.</div>

            <br /><br />
            <h1 style={styles.title}>Parital correctness</h1>
            <div style={styles.div}>
            For every legal input, if the algorithm terminates, then it produces an expected output.
            On the other hand, if the algorthm failed to terminate, it is still partially correct.
            </div>
            </CardContent>
        </Card>
        
        <Card style={styles.card2}>
            <CardContent>
            <img src={img_partial}></img>
            </CardContent>
        </Card>
      
        </div>
    );
}

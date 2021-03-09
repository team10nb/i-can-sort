import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import img_total from "../../../../Resource/total.png";


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
            <h1 style={styles.title}>Total correctness</h1>
            <div style={styles.div}>
            For every legal input, the algorithm indeed terminates and it produces an expected output.
            In other words, if the algorthm failed to terminate, it does not meet the requirement of total correctness.
            </div>

            </CardContent>
        </Card>
        
        <Card style={styles.card2}>
            <CardContent>
            <img src={img_total}></img>
            </CardContent>
        </Card>
      
        </div>
    );
}

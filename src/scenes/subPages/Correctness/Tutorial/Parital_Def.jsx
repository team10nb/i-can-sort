import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import img_partial from "../../../../Resource/partial.png";
import Divider from '@material-ui/core/Divider';

export default function Total_Def(props) {
    const styles ={
        root:{
            display: "flex",
            '& > *': 
            {     
                marginRight: 10,
            },
            backgroundColor:"#EFEFEF", 
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
            width:"55%"
        },
        card2:{
            backgroundColor:"#EFEFEF", 
            height:550, 
            width:"45%"
        },
    } 
    return(

        <Card style={styles.root}>

           <CardContent style={styles.card1}>
            <h1 style={styles.title}>Correctness</h1>
            <div style={styles.div}>An algorithm for a computational problem is correct, if for every legal input instance, the required output is produced.</div>

            <br /><br />
            <h1 style={styles.title}>Parital correctness</h1>
            <div style={styles.div}>
            For every legal input, if the algorithm terminates, then it produces an expected output.
            On the other hand, if the algorthm failed to terminate, it is still partially correct.
            </div>
            </CardContent>

            <CardContent>
            <Divider orientation="vertical" />
            </CardContent>

            <CardContent style={styles.card2}>
            <img src={img_partial} height={400}/>
            </CardContent>
    
        </Card>

    );
}

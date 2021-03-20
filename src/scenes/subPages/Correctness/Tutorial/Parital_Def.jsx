/*
    Author: Yuting Jiang, Shiliang Chen, Yiming Tang
*/
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import img_partial from "../../../../Resource/partial.png";
import Divider from '@material-ui/core/Divider';

export default function Partial_Def(props) {
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
        },
        div:{
            fontSize: 15,
            lineHeight: '2em',
            fontWeight: "400",
        },
        card1:{
            backgroundColor:"#EFEFEF", 
            height:500, 
            width:"55%",
            paddingLeft:"30px",
            paddingTop:"25px"
        },
        card2:{
            backgroundColor:"#EFEFEF", 
            height:500, 
            width:"45%",
            paddingTop:"44px",
            paddingLeft:"20px",
            paddingRight:"30px"
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

            
            <Divider orientation="vertical" style={{height:"460px", marginTop:"20px"}}/>
            

            <CardContent style={styles.card2}>
            <img src={img_partial} height={400} width={320}/>
            </CardContent>
    
        </Card>

    );
}

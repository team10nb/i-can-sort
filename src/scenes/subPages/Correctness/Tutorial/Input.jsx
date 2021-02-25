import React, { useState } from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import InputBox from '../../../../components/InputBox/InputBox';
import {random} from "lodash";

const useStyles = makeStyles((theme) => ({
    div:{
        display: 'flex',
        width: 740,
        height: 530,    
        // marginTop:630,
        // marginLeft:250,
        '& > *': {
          margin: theme.spacing(1),
        }
      },
    card:{
        // margintop: 10,
        background: "#F0F0F0",
        width: 550,
        height: 530
    },

    // InputBox:{
    // // marginTop: 5,
    // background: "#F0F0F0",
    // width: 180,
    // height: 520,
    // alignItems:"center",
    // },

}));

export default function Input(props) {
    const classes = useStyles();
    // The maximum value of pairs
    const PAIR = 3;
    // The maximum value of input number
    const MAXNUMBER = 25;
    // The minimun value of input number
    const MINNUMBER = 1;
    // The maximum length of input array
    const LENGTH = 4;
    // The legal string
    const [legalstr, setLegalStr] = useState(["2,1,6,10", "9,12,8,3", "3,2,17,10"]);
    // The legal array
    const [legalarr, setLegalArr] = useState([2, 1, 6, 10], [9, 12, 8, 3], [3, 2, 17, 10]);
    // The illegal string
    const [illegalstr, setIllegalStr] = useState(["2,a,6,10", "9,*,&,3", "3,#,&,10"]);


    const legalShuffle = () => {
        let triple = [];
        for (let j = 0; j < PAIR; j++){
            let array = [];
            for (let i = 0; i < LENGTH; i++) {
                // const element = array[i];
                array
                .push(random(1,MAXNUMBER-5));
            }
            triple
            .push(array.join(","));
            // setStr(triple.join(","));
        }
        setLegalArr(triple);
        setLegalStr(triple);
        
    }

    const illegalShuffle = () => {
        var characters  = '!@#$%^&*ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        let triple = [];        
        for (let j = 0; j < PAIR; j++){
            let array = [];
            for (let i = 0; i < LENGTH; i++) {
                array
                .push(characters.charAt(Math.floor(Math.random() * charactersLength)));
            }
            if (array.join(",").match(/^[0-9]+((,)[0-9]+)*$/)){
                j --;
                continue;
            }
            triple
            .push(array.join(","));
        }
        setIllegalStr(triple);
    }


    return(
        <div className = {classes.div}>
            <Card className = {classes.card}>
                <CardContent></CardContent>
            </Card>
            <InputBox 
                // className = {classes.InputBox}
                legalShuffle = {legalShuffle} 
                illegalShuffle = {illegalShuffle}
                inputLegalString = {legalstr}
                inputIllegalString = {illegalstr}
            />
        </div>
    );
}


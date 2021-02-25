import React, { useState } from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import InputBox from '../../../../components/InputBox/InputBox';
import ExplainationBox from "../../../../components/ExplainationBox/ExplainationBox";
import { motion } from "framer-motion";
import ErrorIcon from "@material-ui/icons/Error";
import {random} from "lodash";

const spring = {
    type: "spring", // a framer motion type that simulates spring
    damping: 15, //Strength of opposing force. If set to 0, spring will oscillate indefinitely
    stiffness: 150, //Stiffness of the spring. Higher values will create more sudden movement. Set to 100 by default.
    mass: 0.1, // Mass of the moving object. Higher values will result in more lethargic movement
};

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
        height: 530,
        display: "grid",
        justifyContent: "center",
    },

    InputBox: {
        marginTop: 5,
        background: "#F0F0F0",
        width: 180,
        // height: 520,
        alignItems: "center",
    },
    bars: {
        listStyle: "none",
        padding: 0,
        margin: 0,
        marginBottom: 15,
        position: "relative",
        display: "flex",
        flexWrap: "wrap-reverse",
        justifyContent: "center",
    },
    bar: {
        listStyle: "none",
        padding: 0,
        margin: 0,
    // InputBox:{
    // // marginTop: 5,
    // background: "#F0F0F0",
    // width: 180,
    // height: 520,
    // alignItems:"center",
    // },

        boxShadow: "0px 0px 2px 2px #88888833",
        borderRadius: "10px",
        marginBottom: "10px",
        marginRight: "15px",
        marginLeft: "15px",
        width: "30px",
        height: "140px",
        fontSize: "0.1em",
        justifyContent: "center",
    },
    barNumber: {
        fontSize: "16px",
        marginTop: "-23px",
        textAlign: "center",
        fontWeight: "600",
    },
    switchAnimation: {
        display: "grid",
        justifyContent: "center",
        alignContent: "flex-end",
        marginTop: "100px",
        height: "300px",
        width: "300px",
    },
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
    const [isCompleteLegal, setIsCompleteLegal] = useState([
        false,
        false,
        false,
    ]);
    const [isCompleteIllegal, setIsCompleteIllegal] = useState([
        false,
        false,
        false,
    ]);
    
    const [isLegalPlaying, setIsLegalPlaying] = useState(true);
    // The legal string
    const [legalstr, setLegalStr] = useState(["2,1,6,10", "9,12,8,3", "3,2,17,10"]);
    // The legal array
    const [legalarr, setLegalArr] = useState([[2, 1, 6, 10], [9, 12, 8, 3], [3, 2, 17, 10]]);
    // The illegal string
    const [illegalstr, setIllegalStr] = useState(["2,a,6,10", "9,*,&,3", "3,#,&,10"]);
    const [illegalArr, setIllegalArr] = useState([['2','a','6','10'], ['9','*','&','3'], ['3','#','&','10']]);
    // The bars displayed to visulise the numbers
    const [bars, setBars] = useState(legalarr[0]);


    const legalShuffle = () => {
        let tripleStr = [];
        let tripleArr = [];
        for (let j = 0; j < PAIR; j++){
            let array = [];
            for (let i = 0; i < LENGTH; i++) {
                // const element = array[i];
                array
                .push(random(1,MAXNUMBER-5));
            }
            tripleStr
            .push(array.join(","));
            tripleArr.push(array);
            // setStr(triple.join(","));
        }
        setLegalArr(tripleArr);
        setLegalStr(tripleStr);
        setBars([0,0,0,0]);
        setIsCompleteLegal([
            false,
            false,
            false,
        ]);
        setIsLegalPlaying(true);

        
    }

    const illegalShuffle = () => {
        var characters  = '!@#$%^&*ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        let triple = [];        
        let tripleArr = [];

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
            tripleArr.push(array);
        }
        setIllegalStr(triple);
        setIllegalArr(tripleArr);
        // setBars(tripleArr[0]);
        setBars([0,0,0,0]);
        setIsCompleteIllegal([
            false,
            false,
            false,
        ]);
        setIsLegalPlaying(true);

    }

    const legalTimeoutIds = [];
    const illegalTimeoutIds = [];

    const legalClick = () => {
        setBars([0,0,0,0]);
        setIsLegalPlaying(true);
        setIsCompleteLegal([false, false, false]);

        legalarr.forEach((item, i) => {
            let timeoutId = setTimeout(
                (item) => {
                    if (i === 0) {
                        setIsCompleteLegal([true, false, false]);
                    } else if (i === 1) {
                        setIsCompleteLegal([true, true, false]);
                    } else if (i === 2) {
                        setIsCompleteLegal([true, true, true]);
                    }
                    setBars(item.sort((a, b) => a - b));
                    console.log(item)
                },
                (i + 1) * 700, //time interval
                item
            );
            legalTimeoutIds.push(timeoutId);
        });
    };

    const illegalClick = () => {
        setIsLegalPlaying(false);
        setIsCompleteIllegal([false, false, false]);
        
        illegalstr.forEach((item, i) => {
            let timeoutId = setTimeout(
                (item) => {
                    if (i === 0) {
                        setIsCompleteIllegal([true, false, false]);
                    } else if (i === 1) {
                        setIsCompleteIllegal([true, true, false]);
                    } else if (i === 2) {
                        setIsCompleteIllegal([true, true, true]);
                    }
                    setBars(item);
                },
                (i + 1) * 700, //time interval
                item
            );
            illegalTimeoutIds.push(timeoutId);
        });
    };

    return (
        <div className={classes.div}>
            <Card className={classes.card}>
                <div className={classes.switchAnimation}>
                    <div className={classes.bars}>
                        {isLegalPlaying ? (
                            bars.map((value, key) => (
                                <motion.li
                                    key={key} // each bar's identification
                                    layout
                                    transition={spring}
                                    style={{
                                        backgroundColor: "#00BFFF",
                                        height: value * 10 + "px",
                                    }}
                                    className={classes.bar}
                                >
                                    <div className={classes.barNumber}>
                                        {value}
                                    </div>
                                </motion.li>
                            ))
                        ) : (
                            <div style={{display: "grid",
                            justifyContent: "center",
                            alignContent: "flex-end"}}>
                                <ErrorIcon style={{ fontSize: 60, color: "red" }} />
                                
                            </div>
                            
                        )}
                    </div>
                    {isLegalPlaying? "" : <span style={{fontWeight:"600", marginBottom:"8px"}}>Could not sort illegal input {bars.toString()}</span>}
                    <ExplainationBox width="30" height={3}>
                        {isLegalPlaying ? bars.toString() : "Error"}
                    </ExplainationBox>
                </div>
            </Card>
            <InputBox 
                // className = {classes.InputBox}
                legalShuffle = {legalShuffle} 
                illegalShuffle = {illegalShuffle}
                inputLegalString = {legalstr}
                inputIllegalString = {illegalstr}
                legalArrays={legalarr}
                // illegalArrays={illegalArrays}
                isCompleteIllegal={isCompleteIllegal}
                isCompleteLegal={isCompleteLegal}
                legalClick={legalClick}
                illegalClick={illegalClick}
            />
        </div>
    );
}

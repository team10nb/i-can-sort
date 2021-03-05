import { makeStyles, withStyles } from "@material-ui/core/styles";
import "@fontsource/roboto";
import * as React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ExplainationBox from "../ExplainationBox/ExplainationBox";
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from "@material-ui/core/IconButton";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";


// a framer motion transition attributes
const spring = {
    type: "spring", // a framer motion type that simulates spring
    damping: 15, //Strength of opposing force. If set to 0, spring will oscillate indefinitely
    stiffness: 150, //Stiffness of the spring. Higher values will create more sudden movement. Set to 100 by default.
    mass: 0.1, // Mass of the moving object. Higher values will result in more lethargic movement
};

const Code = (props)=> {
    const {blockNum} = props;
  
    const useStyles = makeStyles((theme) => ({
        // root: {
        //     // display: "grid",
        //     // "& > *": {
        //     //     width: theme.spacing(width*1),
        //     //     height: theme.spacing(height*1),
        //     //     border: "3px solid white",
        //     // },
        //     justifyContent: "center",
        //     alignContent: "center",
        //     verticalAlign: "center",
        //     display: "flex",
        //     fontFamily: "inherit",
        //     fontSize: "1em",
        //     fontWeight: "700",
        //     letterSpacing: "1px",
        //     borderRadius: "12px",
        //     backgroundColor: "white",
        //     marginTop: "4px",
        //     marginBottom: "3px",
        //     marginLeft: "3px",
        //     // alignItems:"center",
        //     // justifyContent:"center",
        // },
        background:{
            backgroundColor: "yellow",
            marginTop: -6,
        },
        noBackground:{
            marginTop: -6,
        }       
    }));
    const classes = useStyles();

    const interminableCode = 
    <div>
        <pre className={blockNum===1 ? classes.background : classes.noBackground}>
{`function swap_forever (array) {`}
        </pre>
        <pre className={classes.noBackground}>
{`  var i = 1;`}
        </pre>
        <pre className={blockNum===2 ? classes.background : classes.noBackground}>
{`  while(i > 0){`}
        </pre>
        <pre className={blockNum===3 ? classes.background : classes.noBackground}>
{`    swap(array[0], array[1])`}
        </pre>
        <pre className={blockNum===4 ? classes.background : classes.noBackground}>
{`  }`}
        </pre>
        <pre className={blockNum===5 ? classes.background : classes.noBackground}>
{`}`}
        </pre>
    </div>
    
    return(
        <div>{interminableCode}</div>
    )
}

export default function Interminable(props){
    const { trace, description, width, explainationBoxHeight, blockNums } = props;

    // The bars displayed to visulise the numbers
    const [bars, setBars] = useState(trace[0]);
    // The speed of playing the animation
    const [playSpeed, setPlaySpeed] = useState(1);
    // The current step among traces
    const [currentStep, setCurrentStep] = useState(0);
    // It is used to clean timeouts to pause
    const [timeOutIds, setTimeOutIds] = useState([]);
    // The state of the animation, whether is playing
    const [isPlaying, setIsPlaying] = useState(false);
    // It is used to control the speed menu
    const [anchorEl, setAnchorEl] = useState(null);
    // The state of play button and next step button, whether is disabled
    const [playDisabled, setPlayDisabled] = useState(false);
    // the State of previous step bnutton
    const [backwardDisabled, setBackwardDisabled] = useState(true);

    const [isFinish, setIsFinish] = useState(false);

    const useStyles = makeStyles((theme) =>({
        root: {
            '& > * + *': {     
                marginTop: theme.spacing(3),
            },
            // marginTop: 50,
            width: 380,        
        },
        bars: {
            listStyle: "none",
            padding: 0,
            margin: 0,
            // marginBottom: 10,
            position: "relative",
            display: "flex",
            flexWrap: "wrap-reverse",
            justifyContent: "center",
        },
        bar: {
            listStyle: "none",
            padding: 0,
            margin: 0,
            boxShadow: "0px 0px 2px 2px #88888833",
            borderRadius: "10px",
            marginTop: 70,
            marginBottom: "5px",
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
        cardOne:{
            width: 380, 
            height: 240
        },
        cardTwo:{
            width: 380, 
            height: 240,
            background: "#F0F0F0",        
        },
        title:{
            display:"flex",
            fontFamily: "inherit",
            fontWeight: "700",
            fontSize:"16px",
            justifyContent: "center",
        },
        control:{
            // display:"flex",

            // justifyContent: "center",
        }
    }));

    const classes = useStyles();

    // Update buttons' disable property when steps are changed
    useEffect(() => {
        currentStep === 0
            ? setBackwardDisabled(true)
            : setBackwardDisabled(false);
        currentStep + 1 === trace.length
            ? setPlayDisabled(true)
            : setPlayDisabled(false);
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentStep]);

    // Use the latest speed to play the animation
    // useEffect(() => {
    //     // if it is playing, replay
    //     if (isPlaying) {
    //         pause();
    //         resume();
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [playSpeed]);

    // useEffect(() => {
    //     handleResetClick();
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [trace]);

    useEffect(() => {
        if(currentStep==3){
            setIsFinish(true);
        }else{
            setIsFinish(false);
        }
    }, [currentStep]);

    useEffect(() => {
        if(isFinish==true){
            reset();
            // resume();
            // run(trace);
        }
    }, [isFinish]);

    // It is used to open the speed menu
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    // It is used to adjust speed, triggered when close the speed menu
    const handleClose = (event) => {
        const value = event.nativeEvent.target.value / 4;
        if (!isNaN(value)) {
            setPlaySpeed(value);
        }
        setAnchorEl(null);
    };


    // It is used to clean timeouts to pause the animation
    const clearTimeouts = () => {
        timeOutIds.forEach((timeoutId) => clearTimeout(timeoutId));
        setTimeOutIds([]);
    };

    // Main method, used to generate a time line based on the speed
    // change bars after a time interval
    const run = (trace) => {
        // The current bars are the [0] of trace, to make the animation start without delay
        // here we begin the animation from [1] of trace
        // it's also suitable for pause, step forward and backwar
        const subTrace = trace.slice(1);
        const timeoutIds = [];
        // a time interval unit
        const timer = 500 / playSpeed;

        // Set a timeout for each item in the trace
        subTrace.forEach((item, i) => {
            let timeoutId = setTimeout(
                (item) => {
                    // update the current step
                    setCurrentStep((prevStep) =>
                        i === trace.length - 1 ? prevStep : prevStep + 1
                    );
                    // update bars to be animated
                    setBars(item);
                    i === subTrace.length - 1
                        ? setIsPlaying(false)
                        : setIsPlaying(true);
                },
                i * timer, //time interval
                item
            );
            timeoutIds.push(timeoutId);
        });

        // Clear timeouts upon completion
        let timeoutId = setTimeout(clearTimeouts, trace.length * timer);
        timeoutIds.push(timeoutId);
        setTimeOutIds(timeoutIds);
    };

    // To pause the animation
    const pause = () => {
        setIsPlaying(false);
        clearTimeouts();
        localStorage.setItem("history", "hello");
    };

    // To resume the animation
    const resume = () => {
        setIsPlaying(true);
        const newtrace = trace.slice(currentStep);
        run(newtrace);
        const his = localStorage.getItem("history");
        console.log(his);
    };

    const reset = () => {
        setCurrentStep(0);
        setBars(trace[0]);
    };


    return (            
            <div className = {classes.root}>
                <div className = {classes.title}>Interminable</div>
                
                <Card className = {classes.cardOne}> 
                
                    <div className={classes.bars}>
                    {bars.map((background) => (
                        <motion.li
                            key={background.key} // each bar's identification
                            layout
                            transition={spring}
                            style={background}
                            className={classes.bar}
                            animate={{
                                backgroundColor: background.backgroundColor,
                                y: background.y,
                            }}
                        >
                            <div className={classes.barNumber}>
                                {background.value}
                            </div>
                            <div
                                style={{
                                    marginTop: background.height-17,
                                    fontSize: "16px",
                                    textAlign: "center",
                                    fontWeight: "600",
                                }}
                            >
                                {background.isPivot ? <ArrowDropUpIcon style={{marginBottom: "-18px"}}/> : ""}
                            </div>
                        </motion.li>
                    ))}
                </div>
                <ExplainationBox width={60} height={explainationBoxHeight}>
                    {description[currentStep]}
                </ExplainationBox>
                
                <div style={{
                    marginLeft: 160,
                    marginTop: -20,
                }}>
                    <IconButton
                        // function using depends on isPlaying
                        onClick={() => {
                            isPlaying ? pause() : resume();
                        }}
                        // disabled={playDisabled}
                        className = {classes.control}
                    >
                        {/* button appearence depends on isPlaying */}
                        {isPlaying ? (
                            <PauseCircleFilledIcon fontSize='large' />
                        ) : (
                            <PlayCircleFilledIcon fontSize='large' />
                        )}
                    </IconButton>
                </div>


                
            </Card>

            <Card className = {classes.cardTwo}>
                <CardContent>
                    <Typography>
                        <Code blockNum={blockNums[currentStep]}/>
                    </Typography>
                </CardContent>
                
            </Card>

            </div>        
    );
};
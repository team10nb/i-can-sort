import { makeStyles, withStyles } from "@material-ui/core/styles";
import "@fontsource/roboto";
import * as React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import AnimationSlider from "../AnimationSlider/AnimationSlider";
import AnimationControl from "../AnimationControl/AnimationControl";
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ExplainationBox from "../ExplanationBox/ExplanationBox";
import IntroBubble from '../Introduction/BubbleSort';
import { Divider } from "@material-ui/core";
//css for table
const styles = {
    table:{
        fontFamily: "Space Mono",
        fontWeight: "500",
        fontSize:"12px",
    },
    thead:{
        lineHeight: "1em", 
        fontSize:"13px",
    },
    tbody:{
        lineHeight: "2.7em",
    },
    th:{
        textAlign:"center",
        width:50 
    },
    tr:{
        textAlign:"center",
        width:50 
    },
    td:{
        textAlign:"center",
        width:50
    },
}


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
        background:{
            width: "165px",
            fontFamily: "Space Mono",
            fontWeight: "500",
            fontSize:"12px",
            backgroundColor: "#c8e6c9",
            marginTop: -6,
            lineHeight: "2.5em",
            paddingLeft:"5px",
        },
        noBackground:{
            width: "165px",
            fontFamily: "Space Mono",
            fontWeight: "500",
            fontSize:"12px",
            marginTop: -6,
            lineHeight: "2.5em",
            paddingLeft:"5px",
        }
        
    }));
    const classes = useStyles();

    const swapCode = 
    <div style={{textAlign:"left"}}>
        <pre className={blockNum===1 ? classes.background : classes.noBackground}>
{`temp = 0`}
        </pre>
        <pre className={blockNum===2 ? classes.background : classes.noBackground}>
{`a = 5`}
        </pre>
        <pre className={blockNum===3 ? classes.background : classes.noBackground}>
{`b = 10`}
        </pre>
        <pre className={blockNum===4 ? classes.background : classes.noBackground}>
{`temp = a`}
        </pre>
        <pre className={blockNum===5 ? classes.background : classes.noBackground}>
{`a = b`}
        </pre>
        <pre className={blockNum===6 ? classes.background : classes.noBackground}>
{`b = temp`}
        </pre>
    </div>
    
    return(
        <div>{swapCode}</div>
    )
}





export default function Terminable(props){
    const { trace, description, width, explainationBoxHeight, blockNums, table } = props;

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

    const useStyles = makeStyles((theme) =>({
        root: {  
            // '& > * + *': {     
            //     marginTop: theme.spacing(3),
            // },
            marginTop: 60,
            // width: 380, 
            textAlign:"center",
        },
        bars: {
            listStyle: "none",
            padding: 0,
            margin: 0,
            marginBottom: 30,
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
            marginTop: 32,
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
            width: 400, 
            height: 520,
            display: "grid",
            justifyContent: "center",
            alignContent: "flex-end",
            background: "#F0F0F0",  
            paddingTop: -30,
        },
        cardTwo:{
            width: 400, 
            height: 265,
            paddingTop: 10,
            paddingBottom: 10,
            background: "#F0F0F0",   
            marginTop: 30, 
            display: 'flex',
        },
        cardThree:{
            width: 400, 
            height: 200,
            paddingTop: 5,
            background: "#F0F0F0",  
        },
        slider:{
            marginLeft: 0,
            marginBottom: 0,
        },
        title:{
            display:"flex",
            fontFamily: "inherit",
            fontWeight: "700",
            fontSize:"16px",
            justifyContent: "center",
        },
        div:{
            display: 'flex',    
            '& > *': 
            {     
                marginRight: 20,
                marginLeft: 20,
            },
        },
        introduction:{
            paddingRight:"5px",
            fontSize:"18px",
            textAlign:"left",
            marginLeft:"15px",
            marginTop:"20px",
            lineHeight:"1.3em"

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
    useEffect(() => {
        // if it is playing, replay
        if (isPlaying) {
            pause();
            resume();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [playSpeed]);

    // useEffect(() => {
    //     handleResetClick();
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [trace]);

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

    const handleSliderChange = (event, newValue) => {
        if (isPlaying) {
            pause();
        }
        console.log(newValue);

        const item = trace[newValue];
        setCurrentStep(newValue);
        setBars(item);
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
        const timer = 1000 / playSpeed;

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

    // Go to next step and pause
    const stepForward = () => {
        if (currentStep < trace.length - 1) {
            pause();
            const item = trace[currentStep + 1];
            setCurrentStep((prevStep) => prevStep + 1);
            setBars(item);
        }
    };

    // Go to the previous step and pause
    const stepBackward = () => {
        if (currentStep > 0) {
            pause();
            const item = trace[currentStep - 1];
            setCurrentStep((prevStep) => prevStep - 1);
            setBars(item);
        }
    };

    const handleResetClick = () => {
        pause();
        setCurrentStep(0);
        setBars(trace[0]);
    };

    const animationControlProps = {
        handleResetClick,
        stepForward,
        stepBackward,
        pause,
        resume,
        isPlaying,
        playDisabled,
        backwardDisabled,
        handleClick,
        handleClose,
        anchorEl,
        playSpeed,
        trace,
    };

    const ExampleTable = ()=> {
        function tables() {
            let tables=[];
            let i = 1;
            for(var index=0; index<currentStep; index++){
                i = index + 1;
                tables.push(table[i]); 
            }
            return tables;
        }
    
        return(
            <div>
            <table style={styles.table}>
                <thead style={styles.thead}>
                    <tr style={styles.tr}>
                        <th style={styles.th}>temp</th>
                        <th style={styles.th}>a</th>
                        <th style={styles.th}>b</th>
                    </tr>
                </thead>
                <tbody style={styles.tbody}>
                    <tr>
                        <td style={styles.td}>{0}</td>
                        <td style={styles.td}>{0}</td>
                        <td style={styles.td}>{0}</td>
                    </tr>
                    {tables()}
                </tbody>
            </table>
                
            </div>
        );
    }

    return (            
            <div className = {classes.root}>
                {/* <div className = {classes.title}>Swap a & b</div> */}

                <div className = {classes.div}>
                    <div>
                    <Card className = {classes.cardThree} style={{maiginBottom: 30}}>
                        <CardContent>
                            <div className = {classes.introduction}>
                            Swapping a and b exchanges the values of them. <br></br><br/>
                            The example below will show you how swapping works.
                            </div>
                        </CardContent>
                       
                    </Card>
                    <Card className = {classes.cardTwo}>
                        
                        <CardContent style={{marginTop:"0px"}}>
                            <div style={{marginBottom:"10px", fontWeight:"600", fontSize:"12px", fontFamily:"Space Mono"}}>Code</div> 
                            <Typography>
                                <Code blockNum={blockNums[currentStep]}/>
                            </Typography>
                        </CardContent>
                        <Divider orientation="vertical" flexItem />
                        <CardContent style={{marginLeft:0, }}>
                            <ExampleTable table={table}/>
                        </CardContent>
                        
                    </Card>
                    </div>

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
                                    marginTop: background.height+5,
                                    fontSize: "10px",
                                    textAlign: "center",
                                    fontWeight: "600",
                                }}
                            >
                                {background.key === 0 ? "temp":background.key === 1? "a":"b"}
                            </div>
                        </motion.li>
                    ))}
                    </div>
                    <ExplainationBox width={40} height={explainationBoxHeight}>
                        {description[currentStep]}
                    </ExplainationBox>
                    
                    <div className = {classes.slider}>
                    <AnimationSlider
                        width={width}
                        step={1}
                        max={trace.length - 1}
                        handleChange={handleSliderChange}
                        value={currentStep}
                        display="none"
                        
                    
                    />
                    </div>
                    <div style={{marginLeft: "-38px", marginBottom:"15px"}}>
                        <AnimationControl {...animationControlProps} />
                    </div>
                    
                </Card>
                </div>
                
            </div>
        
    );
};

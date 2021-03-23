import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {color} from '../../../mainPages/Tutorial';
import IconButton from '@material-ui/core/IconButton';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import TutorialSubPage from '../TutorialSubpage';
import ForLoop from '../../../../components/LoopExample/ForLoop';
import WhileLoop from '../../../../components/LoopExample/WhileLoop';
import {LoopForHelp, LoopWhileHelp} from './LoopHelp';
import BackDrop from '../../../../components/CorrectnessExample/BackDrop';

const useStyles = makeStyles((theme) => ({
    root:{
        display: "flex",
        '& > * + *': {     
            marginLeft: theme.spacing(2),
        },
        '& > *':{
            marginTop: theme.spacing(-2),
        },
    },
    buttonSet:{
        display: "flex",
        '& > * + *':{
            marginLeft: theme.spacing(44.5),
        },
        position:"relative",
        left:"245px",
        top:"34px",
    },
}));


export default function TutorialLoop(props) {

    // const progress = localStorage.getItem("bubble") ? JSON.parse(localStorage.getItem("bubble")) : [false, false, false];

    const data = {
        color: color,
        // algorithm: "bubble",
        // progress: progress,
        history: props.history,      
        // intro: intro,
        // operate: operate,
        message: "For & While Loop",
    }

    const classes = useStyles();

    const message = <p><font style={{fontWeight:'bold'}}>For loop</font> and <font style={{fontWeight:'bold'}}>while loop</font> are two widely used <font style={{fontWeight:'bold'}}>control flow statements</font> in programming language.<br/>
                    Here are two simple examples. Click <font style={{fontWeight:'bold'}}>question marks</font> to know more about them.</p>
    
    return(
        <div>
            <TutorialSubPage {...data} />
            <BackDrop message={message}/>
            <div>
                <div className = {classes.buttonSet}>
                    <LoopForHelp />
                    <LoopWhileHelp />
                </div>
           
            <div className = {classes.root}>
                
                <ForLoop />
                <WhileLoop />

            </div>
            </div>
            
            
        </div>
    );
}



// root:{
//     // left:240, 
//     top:55, 
//     // bottom:45,
//   },
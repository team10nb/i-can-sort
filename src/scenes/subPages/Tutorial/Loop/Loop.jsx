import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {color} from '../../../mainPages/Tutorial';
import IconButton from '@material-ui/core/IconButton';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import TutorialSubPage from '../TutorialSubpage';
import ForLoop from '../../../../components/LoopExample/ForLoop';
import WhileLoop from '../../../../components/LoopExample/WhileLoop';
import {LoopForHelp, LoopWhileHelp} from './LoopHelp';
import BackDrop from '../../../../components/BackDrop/BackDrop';

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
        history: props.history,  
        message: "For & While Loop",
    };

    const size = {
        top: 55, 
    };

    const classes = useStyles();

    const message = <p><font style={{fontWeight:'bold'}}>For loop</font> and <font style={{fontWeight:'bold'}}>while loop</font> are two widely used <font style={{fontWeight:'bold'}}>control flow statements</font> in programming language.<br/>
                    Here are two simple examples. Click <font style={{fontWeight:'bold'}}>question marks</font> to know more about them.</p>
    
    return(
        <div>
            <TutorialSubPage {...data} />
            <BackDrop 
                message={message}
                size={size}
                btnColor={color}
            />
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




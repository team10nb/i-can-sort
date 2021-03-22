import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {color} from '../../../mainPages/Tutorial';
import IconButton from '@material-ui/core/IconButton';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import TutorialSubPage from '../TutorialSubpage';
import ForLoop from '../../../../components/LoopExample/ForLoop';
import WhileLoop from '../../../../components/LoopExample/WhileLoop';
import {LoopForHelp, LoopWhileHelp} from './LoopHelp';

const useStyles = makeStyles((theme) => ({
    root:{
        display: "flex",
        '& > * + *': {     
            marginLeft: theme.spacing(2),
        },
        '& > *':{
            marginTop: theme.spacing(4),
        },
    },
    buttonSet:{
        display: "flex",
        '& > * + *':{
            marginLeft: theme.spacing(44.5),
        },
        position:"relative",
        left:"245px",
        top:"82px",
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



    return(
        <div>
            <TutorialSubPage {...data} />
            <div>
                <div className = {classes.buttonSet}>
                    <LoopForHelp />
                    <LoopWhileHelp />
                </div>
           
            <div className = {classes.root}>
                
                <ForLoop/>
                <WhileLoop/>

            </div>
            </div>
            
            
        </div>
    );
}


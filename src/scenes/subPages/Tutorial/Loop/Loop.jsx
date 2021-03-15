import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {color} from '../../../mainPages/Tutorial';
import TutorialSubPage from '../TutorialSubpage';
import ForLoop from '../../../../components/LoopExample/ForLoop';
import WhileLoop from '../../../../components/LoopExample/WhileLoop';

const useStyles = makeStyles((theme) => ({
    root:{
        display: "flex",
        '& > * + *': {     
            marginLeft: theme.spacing(2),
        },
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
    }

    const classes = useStyles();

    return(
        <div>
            <TutorialSubPage {...data} />
            <div className = {classes.root}>
                <ForLoop/>
                <WhileLoop/>

            </div>
        </div>
    );
}


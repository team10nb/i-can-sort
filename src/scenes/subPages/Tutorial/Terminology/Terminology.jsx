/*
    Author: Yani Huang
*/
import React from 'react';
import {color} from '../../../mainPages/Tutorial';
import TutorialSubPage from '../TutorialSubpage';


export default function TutorialTerminology(props) {

    const data = {
        color: color,
        history: props.history,      
        message: "Terminology",
    }

    return(
        <div>
            <TutorialSubPage {...data} />
        </div>
    );
}


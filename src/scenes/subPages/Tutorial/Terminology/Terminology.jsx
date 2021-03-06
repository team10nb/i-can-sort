import React from 'react';
import {color} from '../../../mainPages/Tutorial';
import TutorialSubPage from '../TutorialSubpage';


export default function TutorialTerminology(props) {

    // const progress = localStorage.getItem("bubble") ? JSON.parse(localStorage.getItem("bubble")) : [false, false, false];

    const data = {
        color: color,
        // algorithm: "bubble",
        // progress: progress,
        history: props.history,      
        // intro: intro,
        // operate: operate,
    }

    return(
        <div>
            <TutorialSubPage {...data} />
        </div>
    );
}


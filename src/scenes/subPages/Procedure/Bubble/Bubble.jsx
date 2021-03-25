import React from 'react';
import {color} from '../../../mainPages/Procedure';
import ProcedureSubPage from '../ProcedureSubPage';
import SwitchSort from '../../../../components/SwitchSort/SwitchSort';
import BubbleIntro from '../../../../components/Introduction/BubbleSort';
import file from '../../../../Resource/Bubble Sort.pdf';
import {BubbleExample} from '../../../../components/ImplementationPseudo/Example';

const introMessage =
                <div>
                <h1>Bubble sort</h1>
                <p style={{textAlign:"left", fontSize:18, letterSpacing:0.5}}>
                Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller or larger elements "bubble" to the top of the list.
                </p>
                </div>
               
const intro = {
    introMessage: introMessage,
    animation: <BubbleIntro />,
}


const operate = <SwitchSort sort={"Bubble"}/>;



export default function ProcedureBubble(props) {

    const progress = localStorage.getItem("bubble") ? JSON.parse(localStorage.getItem("bubble")) : [false, false, false];

    const data = {
        color: color,
        algorithm: "bubble",
        progress: progress,
        history: props.history,      
        intro: intro,
        operate: operate,
        file: file,
        Implementation: <BubbleExample/>,
    }

    return(
        <div>
            <ProcedureSubPage {...data} />
        </div>
    );
}


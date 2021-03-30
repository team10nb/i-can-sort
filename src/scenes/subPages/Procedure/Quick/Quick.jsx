/*
    Author: Yuting Jiang, Yijie Lu, Shiliang Chen

    The procedure subpage of quick sort.
*/

import React from 'react';
import { color } from '../../../mainPages/Procedure';
import ProcedureSubPage from '../ProcedureSubPage';
import ProcedureOperation from '../../../../components/ProcedureOperation/ProcedureOperation';
import { QuickImplementation } from '../../../../components/ProcedureImplementation/ProcedureImplementation';
import QuickIntro from '../../../../components/ProcedureIntroduction/QuickSort';


const introMessage =
    <div>
        <h1>Quick sort</h1>
        <p style={{ textAlign: "justify", fontSize: 18, letterSpacing: 0.5, marginTop:"-4px", paddingRight:"10px" }}>
            Quick sort works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. 
            <br/><br/>For the above reason, it is sometimes called partition-exchange sort. The sub-arrays are then sorted recursively. Please see explanations step by step on the right.
        </p>
    </div>

const intro = {
    introMessage: introMessage,
    animation: <QuickIntro />,
}

const operate = <ProcedureOperation sort={"Quick"} />;



export default function ProcedureQuick(props) {

    const progress = localStorage.getItem("quick") ? JSON.parse(localStorage.getItem("quick")) : [false, false, false];

    const data = {
        color: color,
        algorithm: "quick",
        progress: progress,
        history: props.history,
        intro: intro,
        operate: operate,
        Implementation: <QuickImplementation />,
    }

    return (
        <div>
            <ProcedureSubPage {...data} />
        </div>
    );
}


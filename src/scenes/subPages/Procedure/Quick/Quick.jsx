/*
    Author: Shiliang Chen
*/

import React from 'react';
import { color } from '../../../mainPages/Procedure';
import ProcedureSubPage from '../ProcedureSubPage';
import ProcedureOperation from '../../../../components/ProcedureOperation/ProcedureOperation';
import QuickSort from '../../../../components/SwitchAnimation/SortingAlgorithms/QuickSort/QuickSort';
import { QuickImplementation } from '../../../../components/ProcedureImplementation/ProcedureImplementation';
import QuickIntro from '../../../../components/ProcedureIntroduction/QuickSort';


let arr = [2, 1, 6, 10, 9, 12, 8, 3];
let props = QuickSort(arr);

const introMessage =
    <div>
        <h1>Quick sort</h1>
        <p style={{ textAlign: "left", fontSize: 19, letterSpacing: 0.5 }}>
            Quick sort works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. For this reason, it is sometimes called partition-exchange sort. The sub-arrays are then sorted recursively.
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


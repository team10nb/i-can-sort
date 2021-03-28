import React from 'react';
import { color } from '../../../mainPages/Procedure';
import ProcedureSubPage from '../ProcedureSubPage';
import ProcedureOperation from '../../../../components/ProcedureOperation/ProcedureOperation';
import MergeSort from '../../../../components/SwitchAnimation/SortingAlgorithms/MergeSort/MergeSort';
import { MergeImplementation } from '../../../../components/ProcedureImplementation/ProcedureImplementation';
import MergeIntro from '../../../../components/ProcedureIntroduction/MergeSort';

let arr = [2, 1, 6, 10, 9, 12, 8, 3];
let props = MergeSort(arr);

const introMessage =
    <div>
        <h1>Merge sort</h1>
        <p style={{ textAlign: "justify", fontSize: 18, letterSpacing: 0.5, marginTop:"-7px", paddingRight:"10px" }}>
            Merge sort works as two steps. First, it divides the unsorted list into n sublists, each containing one element (a list of one element is considered sorted).
            <br/><br/> Then, merge sublists to produce new sorted sublists repeatedly until there is only one sublist remaining. This will be the sorted list.
            Please see explanations step by step on the right.
        </p>
    </div>

const intro = {
    introMessage: introMessage,
    animation: <MergeIntro />,
}

const operate = <ProcedureOperation sort={"Merge"} />;



export default function ProcedureMerge(props) {

    const progress = localStorage.getItem("merge") ? JSON.parse(localStorage.getItem("merge")) : [false, false, false];

    const data = {
        color: color,
        algorithm: "merge",
        progress: progress,
        history: props.history,
        intro: intro,
        operate: operate,
        Implementation: <MergeImplementation />,
    }

    return (
        <div>
            <ProcedureSubPage {...data} />
        </div>
    );
}


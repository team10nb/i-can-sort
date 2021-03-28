import React from 'react';
import { color } from '../../../mainPages/Procedure';
import ProcedureSubPage from '../ProcedureSubPage';
import ProcedureOperation from '../../../../components/ProcedureOperation/ProcedureOperation';
import SelectionIntro from '../../../../components/ProcedureIntroduction/SelectionSort';
import { SelectionImplementation } from '../../../../components/ProcedureImplementation/ProcedureImplementation';
import SelectionSort from '../../../../components/SwitchAnimation/SortingAlgorithms/SelectionSort/SelectionSort';


let arr = [2, 1, 6, 10, 9, 12, 8, 3];
let props = SelectionSort(arr);

const introMessage =
    <div>
        <h1>Selection sort</h1>
        <p style={{ textAlign: "justify", fontSize: 18, letterSpacing: 0.5, marginTop:"-3px", paddingRight:"0px" }}>
            Selection sort divides the input list into two parts: a sorted sublist of items which is built up from left to right at the left of the list and a sublist of the remaining unsorted items.
            <br/><br/>
            The algorithm proceeds by finding the smallest or the largest element in the unsorted sublist, swapping it with the leftmost unsorted element.
            Please see explanations step by step on the right.
        </p>
    </div>

const intro = {
    introMessage: introMessage,
    animation: <SelectionIntro />,
}

const operate = <ProcedureOperation sort={"Selection"} />;



export default function ProcedureSelection(props) {

    const progress = localStorage.getItem("selection") ? JSON.parse(localStorage.getItem("selection")) : [false, false, false];

    const data = {
        color: color,
        algorithm: "selection",
        progress: progress,
        history: props.history,
        intro: intro,
        operate: operate,
        Implementation: <SelectionImplementation />,
    }

    return (
        <div>
            <ProcedureSubPage {...data} />
        </div>
    );
}


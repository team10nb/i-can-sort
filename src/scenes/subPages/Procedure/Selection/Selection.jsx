import React from 'react';
import {color} from '../../../mainPages/Procedure';
import ProcedureSubPage from '../ProcedureSubPage';
import SwitchSort from '../../../../components/SwitchSort/SwitchSort';
import SelectionIntro from '../../../../components/Introduction/SelectionSort';
import {SelectionExample} from '../../../../components/ImplementationPseudo/Example';
import SelectionSort from '../../../../components/SwitchAnimation/SortingAlgorithms/SelectionSort/SelectionSort';


let arr = [2, 1, 6, 10, 9, 12, 8, 3];
let props = SelectionSort(arr);

const introMessage = 
<div>
<h1>Selection sort</h1>
<p style={{textAlign:"left", fontSize:18, letterSpacing:0.5}}>
Selection sort divides the input list into two parts: a sorted sublist of items which is built up from left to right at the left of the list and a sublist of the remaining unsorted items. 
The algorithm proceeds by finding the smallest/largest element in the unsorted sublist, swapping it with the leftmost unsorted element, and moving the sublist boundaries one element to the right.
</p>
</div>

const intro = {
    introMessage: introMessage,
    animation: <SelectionIntro/>,
}

const operate = <SwitchSort sort={"Selection"}/>;



export default function ProcedureSelection(props) {

    const progress = localStorage.getItem("selection") ? JSON.parse(localStorage.getItem("selection")) : [false, false, false];

    const data = {
        color: color,
        algorithm: "selection",
        progress: progress,
        history: props.history,      
        intro: intro,
        operate: operate,
        Implementation: <SelectionExample/>,
    }

    return(
        <div>
            <ProcedureSubPage {...data} />
        </div>
    );
}


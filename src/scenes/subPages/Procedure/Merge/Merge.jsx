import React from 'react';
import {color} from '../../../mainPages/Procedure';
import ProcedureSubPage from '../ProcedureSubPage';
import { SwitchAnimation } from '../../../../components/SwitchAnimation/SwitchAnimation';
import SwitchSort from '../../../../components/SwitchSort/SwitchSort';
import MergeSort from '../../../../components/SwitchAnimation/SortingAlgorithms/MergeSort/MergeSort';
import {MergeExample} from '../../../../components/ImplementationPseudo/Example';
import MergeIntro from '../../../../components/Introduction/MergeSort';

let arr = [2, 1, 6, 10, 9, 12, 8, 3];
let props = MergeSort(arr);

const introMessage = 
<div>
<h1>Merge sort</h1>
<p style={{textAlign:"left", fontSize:18}}>
    Merge sort works as two steps. First, divide the unsorted list into n sublists, each containing one element (a list of one element is considered sorted). Then, merge sublists to produce new sorted sublists repeatedly until there is only one sublist remaining. This will be the sorted list.
</p>
</div> 

const intro = {
    introMessage: introMessage,
    animation: <MergeIntro/>,
}

const operate = <SwitchSort sort={"Merge"}/>;



export default function ProcedureMerge(props) {

    const progress = localStorage.getItem("merge") ? JSON.parse(localStorage.getItem("merge")) : [false, false, false];

    const data = {
        color: color,
        algorithm: "merge",
        progress: progress,
        history: props.history,      
        intro: intro,
        operate: operate,
        Implementation: <MergeExample/>,
    }

    return(
        <div>
            <ProcedureSubPage {...data} />
        </div>
    );
}


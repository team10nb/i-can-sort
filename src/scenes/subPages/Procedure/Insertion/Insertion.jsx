/*
    Author: Shiliang Chen, Yani Huang
*/

import React from 'react';
import {color} from '../../../mainPages/Procedure';
import ProcedureSubPage from '../ProcedureSubPage';
import file from '../../../../Resource/insertion.pdf';
import InsertionSort from '../../../../components/SwitchAnimation/SortingAlgorithms/InsertionSort/InsertionSort';
import SwitchSort from '../../../../components/SwitchSort/SwitchSort';
import InsertionIntro from '../../../../components/Introduction/InsertionSort';
import {InsertionExample} from '../../../../components/ImplementationPseudo/Example';


let arr = [2, 1, 6, 10, 9, 12, 8, 3];
let props = InsertionSort(arr);

const introMessage = <div>
<h1>Insertion sort</h1>
<p style={{textAlign:"left", fontSize: 19, letterSpacing:0.5}}>
Insertion sort iterates, consuming one input element each repetition, and grows a sorted output list. At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there. It repeats until no input elements remain.
</p>
</div>

const intro = {
    introMessage: introMessage,
    animation: <InsertionIntro />,
}

const operate = <SwitchSort sort={"Insertion"}/>;



export default function ProcedureInsertion(props) {

    const progress = localStorage.getItem("insertion") ? JSON.parse(localStorage.getItem("insertion")) : [false, false, false];

    const data = {
        color: color,
        algorithm: "insertion",
        progress: progress,
        history: props.history,      
        intro: intro,
        operate: operate,
        file: file,
        Implementation: <InsertionExample/>,
    }

    return(
        <div>
            <ProcedureSubPage {...data} />
        </div>
    );
}


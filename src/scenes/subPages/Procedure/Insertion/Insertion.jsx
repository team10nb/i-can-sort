import React from 'react';
import {color} from '../../../mainPages/Procedure';
import ProcedureSubPage from '../ProcedureSubPage';
import { SwitchAnimation } from '../../../../components/SwitchAnimation/SwitchAnimation';
import InsertionSort from '../../../../components/SwitchAnimation/SortingAlgorithms/InsertionSort/InsertionSort';
import SwitchSort from '../../../../components/SwitchSort/SwitchSort';

let arr = [2, 1, 6, 10, 9, 12, 8, 3];
let props = InsertionSort(arr);

const introMessage = <div>
<h1>Insertion sort</h1>
<p style={{textAlign:"left"}}>Insertion sort iterates, consuming one input element each repetition, and grows a sorted output list. At each iteration, it removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there. It repeats until no elements remain.</p>
<h1>Performance</h1>
<table>
    <tbody>
    <tr>
        <td>Worst-case time complexity</td>
        <td style = {{paddingLeft:7}}>O(n<sup>2</sup>)</td>
    </tr>
    <tr>
        <td>Average time complexity </td>
        <td style = {{paddingLeft:7}}>O(n<sup>2</sup>)</td>
    </tr>
    <tr>
        <td>Best-case time complexity </td>
        <td style = {{paddingLeft:7}}>O(n)</td>
    </tr>
    <tr>
        <td>Worst-case space complexity </td>
        <td style = {{paddingLeft:7}}>O(1)</td>
    </tr>
    </tbody>
</table>
</div>

const intro = {
    introMessage: introMessage,
    animation: <SwitchAnimation {...props} width={500}/>,
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
    }

    return(
        <div>
            <ProcedureSubPage {...data} />
        </div>
    );
}


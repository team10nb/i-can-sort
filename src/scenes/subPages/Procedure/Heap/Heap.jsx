import React from 'react';
import {color} from '../../../mainPages/Procedure';
import ProcedureSubPage from '../ProcedureSubPage';
import { SwitchAnimation } from '../../../../components/SwitchAnimation/SwitchAnimation';
import SwitchSort from '../../../../components/SwitchSort/SwitchSort';
import HeapSort from '../../../../components/SwitchAnimation/SortingAlgorithms/HeapSort/HeapSort';

let arr = [2, 1, 6, 10, 9, 12, 8, 3];
let props = HeapSort(arr);

const introMessage = <div>
<h1>Heap sort</h1>
<p style={{textAlign:"left"}}>Heap sort divides its input into a sorted and an unsorted region, and it iteratively shrinks the unsorted region by extracting the largest element from it and inserting it into the sorted region.</p>
<h1>Performance</h1>
<table>
    <tbody>
    <tr>
        <td>Worst-case time complexity</td>
        <td style = {{textAlign:"right"}}>O(nlogn)</td>
    </tr>
    <tr>
        <td>Average time complexity </td>
        <td style = {{textAlign:"right"}}>O(nlogn)</td>
    </tr>
    <tr>
        <td>Best-case time complexity </td>
        <td style = {{textAlign:"right"}}>O(nlogn)</td>
    </tr>
    <tr>
        <td>Worst-case space complexity </td>
        <td style = {{textAlign:"right"}}>O(1)</td>
    </tr>
    </tbody>
</table>
</div>


const intro = {
    introMessage: introMessage,
    animation: <SwitchAnimation {...props} width={490}/>,
}

const operate = <SwitchSort sort={"Heap"}/>;



export default function ProcedureHeap(props) {

    const progress = localStorage.getItem("heap") ? JSON.parse(localStorage.getItem("heap")) : [false, false, false];

    const data = {
        color: color,
        algorithm: "heap",
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


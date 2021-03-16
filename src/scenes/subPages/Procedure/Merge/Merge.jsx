import React from 'react';
import {color} from '../../../mainPages/Procedure';
import ProcedureSubPage from '../ProcedureSubPage';
import { SwitchAnimation } from '../../../../components/SwitchAnimation/SwitchAnimation';
import SwitchSort from '../../../../components/SwitchSort/SwitchSort';
import MergeSort from '../../../../components/SwitchAnimation/SortingAlgorithms/MergeSort/MergeSort';
import {MergeExample} from '../../../../components/ImplementationPseudo/Example';

let arr = [2, 1, 6, 10, 9, 12, 8, 3];
let props = MergeSort(arr);

const introMessage = 
<div>
<h1>Merge sort</h1>
<div style={{textAlign:"left"}}>Merge sort works as two steps: First, divide the input list into n sublists, each containing one element. Then, repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list.</div>
<h1>Performance</h1>
<table>
    <tbody>
    <tr>
        <td>Worst-case time complexity</td>
        <td style = {{paddingLeft:7}}>O(nlogn)</td>
    </tr>
    <tr>
        <td>Average time complexity </td>
        <td style = {{paddingLeft:7}}>O(nlogn)</td>
    </tr>
    <tr>
        <td>Best-case time complexity </td>
        <td style = {{paddingLeft:7}}>O(nlogn)</td>
    </tr>
    <tr>
        <td>Worst-case space complexity </td>
        <td style = {{paddingLeft:7}}>O(n)</td>
    </tr>
    </tbody>
</table>
</div> 

const intro = {
    introMessage: introMessage,
    animation: <SwitchAnimation {...props} width={500}/>,
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


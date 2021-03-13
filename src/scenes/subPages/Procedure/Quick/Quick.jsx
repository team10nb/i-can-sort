/*
    Author: Shiliang Chen
*/

import React from 'react';
import {color} from '../../../mainPages/Procedure';
import ProcedureSubPage from '../ProcedureSubPage';
import { SwitchAnimation } from '../../../../components/SwitchAnimation/SwitchAnimation';
import SwitchSort from '../../../../components/SwitchSort/SwitchSort';
import QuickSort from '../../../../components/SwitchAnimation/SortingAlgorithms/QuickSort/QuickSort';
import {QuickExample} from '../../../../components/ImplementationPseudo/Example';


let arr = [2, 1, 6, 10, 9, 12, 8, 3];
let props = QuickSort(arr);

const introMessage = <div>
<h1>Quick sort</h1>
<p style={{textAlign:"left"}}>Quick sort works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively. </p>
{/* <h1>Performance</h1> */}
{/* <table>
    <tbody>
    <tr>
        <td style={{textAlign:"left"}}>Worst-case time complexity</td>
        <td style = {{textAlign:"right"}}>O(n<sup>2</sup>)</td>
    </tr>
    <tr>
        <td style={{textAlign:"left"}}>Average time complexity </td>
        <td style = {{textAlign:"right"}}>O(nlogn)</td>
    </tr>
    <tr>
        <td style={{textAlign:"left"}}>Best-case time complexity </td>
        <td style = {{textAlign:"right"}}>O(nlogn)</td>
    </tr>
    <tr>
        <td style={{textAlign:"left"}}>Worst-case space complexity </td>
        <td style = {{textAlign:"right"}}>O(nlogn)</td>
    </tr>
    </tbody>
</table>  */}
</div>

const intro = {
    introMessage: introMessage,
    animation: <SwitchAnimation {...props} width={490} explainationBoxHeight={6}/>,
}

const operate = <SwitchSort sort={"Quick"}/>;



export default function ProcedureQuick(props) {

    const progress = localStorage.getItem("quick") ? JSON.parse(localStorage.getItem("quick")) : [false, false, false];

    const data = {
        color: color,
        algorithm: "quick",
        progress: progress,
        history: props.history,      
        intro: intro,
        operate: operate,
        Implementation: QuickExample,
    }

    return(
        <div>
            <ProcedureSubPage {...data} />
        </div>
    );
}


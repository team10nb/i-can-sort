import React from 'react';
import {color} from '../../../mainPages/Procedure';
import ProcedureSubPage from '../ProcedureSubPage';
import { SwitchAnimation } from '../../../../components/SwitchAnimation/SwitchAnimation';
import SelectionSort from '../../../../components/SwitchAnimation/SortingAlgorithms/SelectionSort/SelectionSort';
import SwitchSort from '../../../../components/SwitchSort/SwitchSort';
import SelectionIntro from '../../../../components/Introduction/SelectionSort';
import {SelectionExample} from '../../../../components/ImplementationPseudo/Example';


let arr = [2, 1, 6, 10, 9, 12, 8, 3];
let props = SelectionSort(arr);

const introMessage = 
<div>
<h1>Selection sort</h1>
<p style={{textAlign:"left"}}>The algorithm divides the input list into a sorted sublist and a unsorted sublist. It proceeds by finding the smallest (largest) element in the unsorted sublist, swapping it with the leftmost unsorted element, and moving the sublist boundaries one element to the right.</p>
{/* <h1>Performance</h1> */}
{/* <table>
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
</table>  */}
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


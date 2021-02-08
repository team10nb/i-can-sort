import React from 'react';
import {color} from '../../../mainPages/Procedure';
import ProcedureSubPage from '../ProcedureSubPage';
import { SwitchAnimation } from '../../../../components/SwitchAnimation/SwitchAnimation';
import BubbleSort from '../../../../components/SwitchAnimation/SortingAlgorithms/BubbleSort/BubbleSort';
import SwitchSort from '../../../../components/SwitchSort/SwitchSort';

let arr = [2, 1, 6, 10, 9, 12, 8, 3];
let props = BubbleSort(arr);

const introMessage =
                <div>
                <h1>Bubble sort</h1>
                <p style={{textAlign:"left"}}>A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.</p>
                
                <h1>Performance</h1>
                {/* <p style={{textAlign:"left"}}>Worst-case time complexity &nbsp;&nbsp; O(n<sup>2</sup>)<br/>
                Average time complexity &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; O(n<sup>2</sup>)<br/>
                Best-case time complexity  O(n)<br/>
                Worst-case space complexity  O(1)</p> */}
                <table>
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
                </table>
                </div>
               
           

const intro = {
    introMessage: introMessage,
    animation: <SwitchAnimation {...props} width={500}/>,
}


const operate = <SwitchSort sort={"Bubble"}/>;



export default function ProcedureBubble(props) {

    const data = {
        color: color,
        progress: 70,
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


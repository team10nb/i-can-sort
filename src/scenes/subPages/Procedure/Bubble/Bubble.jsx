import React from 'react';
import {color} from '../../../mainPages/Procedure';
import ProcedureSubPage from '../ProcedureSubPage';
import SwitchSort from '../../../../components/SwitchSort/SwitchSort';
import BubbleIntro from '../../../../components/Introduction/BubbleSort';
import file from '../../../../Resource/34_Agenda.pdf';

const introMessage =
                <div>
                <h1>Bubble sort</h1>
                <p style={{textAlign:"left"}}>A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.</p>
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
                </table> */}
                </div>
               
const intro = {
    introMessage: introMessage,
    animation: <BubbleIntro />,
}


const operate = <SwitchSort sort={"Bubble"}/>;



export default function ProcedureBubble(props) {

    const progress = localStorage.getItem("bubble") ? JSON.parse(localStorage.getItem("bubble")) : [false, false, false];

    const data = {
        color: color,
        algorithm: "bubble",
        progress: progress,
        history: props.history,      
        intro: intro,
        operate: operate,
        file: file,
    }

    return(
        <div>
            <ProcedureSubPage {...data} />
        </div>
    );
}


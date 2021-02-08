import React from 'react';
import {color} from '../../../mainPages/Procedure';
import ProcedureSubPage from '../ProcedureSubPage';
import { SwitchAnimation } from '../../../../components/SwitchAnimation/SwitchAnimation';
import InsertionSort from '../../../../components/SwitchAnimation/SortingAlgorithms/InsertionSort/InsertionSort';

let arr = [2, 1, 6, 10, 9, 12, 8, 3];
let props = InsertionSort(arr);

const introMessage = <div>
                <h1>Insertion sort</h1>
                {/* <h2><font color = "white"> hello world </font></h2> */}
                <p style={{textAlign:"left"}}>A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.</p>
            </div>;

const intro = {
    introMessage: introMessage,
    animation: <SwitchAnimation {...props} width={600}/>,
}

// const operate = <div>
//                 <h1>Operation</h1>
//                 <h2><font color = "white"> Goodbye world </font></h2>
//                 <p>wow, goodbye bird!</p>
//                 <li>wow, goodbye tree</li>
//             </div>;

const operate = <SwitchAnimation {...props} width={600}/>;



export default function ProcedureInsertion(props) {

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


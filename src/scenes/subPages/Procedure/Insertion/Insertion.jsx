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
                {/* <h2><font color = "white"> hello world </font></h2> */}
                <p style={{textAlign:"left"}}>A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.</p>
            </div>;

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

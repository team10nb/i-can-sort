/*
    Author: Yuting Jiang, Yijie Lu

    The procedure subpage of heap sort.
*/

import React from 'react';
import { color } from '../../../mainPages/Procedure';
import ProcedureSubPage from '../ProcedureSubPage';
import ProcedureOperation from '../../../../components/ProcedureOperation/ProcedureOperation';
import { HeapImplementation } from '../../../../components/ProcedureImplementation/ProcedureImplementation';
import HeapIntro from '../../../../components/ProcedureIntroduction/HeapSort';

const introMessage =
    <div>
        <h1>Heap sort</h1>
        <p style={{ textAlign: "justify", fontSize: 18, letterSpacing: 0.5, marginTop:"-7px", paddingRight:"10px" }}>
            Heap sort divides its input into a sorted and an unsorted region, and it will iteratively shrink the unsorted region by extracting the largest element from it and inserting it into the sorted region. 
            <br/><br/>Heap sort maintains the unsorted region in a heap data structure to quickly find the largest element in each step. Please see explanations step by step on the right.
        </p>
    </div>


const intro = {
    introMessage: introMessage,
    animation: <HeapIntro />,
}

const operate = <ProcedureOperation sort={"Heap"} />;



export default function ProcedureHeap(props) {

    const progress = localStorage.getItem("heap") ? JSON.parse(localStorage.getItem("heap")) : [false, false, false];

    const data = {
        color: color,
        algorithm: "heap",
        progress: progress,
        history: props.history,
        intro: intro,
        operate: operate,
        Implementation: <HeapImplementation />,
    }

    return (
        <div>
            <ProcedureSubPage {...data} />
        </div>
    );
}


import React from 'react';
import { color } from '../../../mainPages/Procedure';
import ProcedureSubPage from '../ProcedureSubPage';
import ProcedureOperation from '../../../../components/ProcedureOperation/ProcedureOperation';
import HeapSort from '../../../../components/SwitchAnimation/SortingAlgorithms/HeapSort/HeapSort';
import { HeapImplementation } from '../../../../components/ProcedureImplementation/ProcedureImplementation';
import HeapIntro from '../../../../components/Introduction/HeapSort';


let arr = [2, 1, 6, 10, 9, 12, 8, 3];
let props = HeapSort(arr);

const introMessage =
    <div>
        <h1>Heap sort</h1>
        <p style={{ textAlign: "left", fontSize: 19, letterSpacing: 0.5 }}>
            Heap sort divides its input into a sorted and an unsorted region, and it iteratively shrinks the unsorted region by extracting the largest element from it and inserting it into the sorted region. Heap sort maintains the unsorted region in a heap data structure to quickly find the largest element in each step.
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


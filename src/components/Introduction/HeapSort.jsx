/*
    Author: Ruizi Han
*/

// 两个都没有

import React from "react";
import SwitchAnimation from "../SwitchAnimation/SwitchAnimation";
import HeapSort from '../SwitchAnimation/SortingAlgorithms/HeapSort/HeapSort';

const arr = [3, 12, 7, 5, 10, 8];

const trace = HeapSort(arr).trace;

const description = [
    "Unsorted Array", 
    "A max heap is built, heap size is: 6", 
    "Top element 12 is the largest in the heap", 
    "Take 12 out of the heap", 
    "A max heap is built, heap size is: 5", 
    "Top element 10 is the largest in the heap", 
    "Take 10 out of the heap", 
    "A max heap is built, heap size is: 4", 
    "Top element 8 is the largest in the heap", 
    "Take 8 out of the heap", 
    "A max heap is built, heap size is: 3", 
    "Top element 7 is the largest in the heap", 
    "Take 7 out of the heap", 
    "A max heap is built, heap size is: 2", 
    "Top element 5 is the largest in the heap", 
    "Take 5 out of the heap", 
    "The last element 3 is already sorted. Heap sort finished."
];

export default function IntroHeap() {
    const props = { trace: trace, description: description };

    return (<SwitchAnimation {...props} width={490} explanationBoxHeight={6}/>);

}
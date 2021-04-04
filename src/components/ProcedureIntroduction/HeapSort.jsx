/*
    Author: Ruizi Han

    The handwritten trace and description which explain the sort progress more precisely. 
*/

import React from "react";
import SwitchAnimation from "../SwitchAnimation/SwitchAnimation";
import HeapSort from "../SwitchAnimation/SortingAlgorithms/HeapSort/HeapSort";

const arr = [3, 12, 7, 5, 10, 8];

let trace = HeapSort(arr).trace;

let traceUnit = trace[1];

trace.splice(1, 0, traceUnit);

traceUnit = [
    {
        value: 12,
        height: 120,
        backgroundColor: "#00BFFF",
        key: 1,
        y: 0,
        x: 0,
        isPivot: false,
    },
    {
        value: 10,
        height: 100,
        backgroundColor: "#00BFFF",
        key: 4,
        y: 0,
        x: 0,
        isPivot: false,
    },
    {
        value: 8,
        height: 80,
        backgroundColor: "#00BFFF",
        key: 5,
        y: 0,
        x: 0,
        isPivot: false,
    },
    {
        value: 5,
        height: 50,
        backgroundColor: "#00BFFF",
        key: 3,
        y: 0,
        x: 0,
        isPivot: false,
    },
    {
        value: 3,
        height: 30,
        backgroundColor: "#00BFFF",
        key: 0,
        y: 0,
        x: 0,
        isPivot: false,
    },
    {
        value: 7,
        height: 70,
        backgroundColor: "#00BFFF",
        key: 2,
        y: 0,
        x: 0,
        isPivot: false,
    },
];

trace.splice(3, 0, traceUnit);

traceUnit = [
    {
        value: 10,
        height: 100,
        backgroundColor: "#00BFFF",
        key: 4,
        y: 0,
        x: 0,
        isPivot: false,
    },
    {
        value: 7,
        height: 70,
        backgroundColor: "#00BFFF",
        key: 2,
        y: 0,
        x: 0,
        isPivot: false,
    },
    {
        value: 8,
        height: 80,
        backgroundColor: "#00BFFF",
        key: 5,
        y: 0,
        x: 0,
        isPivot: false,
    },
    {
        value: 5,
        height: 50,
        backgroundColor: "#00BFFF",
        key: 3,
        y: 0,
        x: 0,
        isPivot: false,
    },
    {
        value: 3,
        height: 30,
        backgroundColor: "#00BFFF",
        key: 0,
        y: 0,
        x: 0,
        isPivot: false,
    },
    {
        value: 12,
        height: 120,
        backgroundColor: "#008000",
        key: 1,
        y: 0,
        x: 0,
        isPivot: false,
    },
];

trace.splice(7, 0, traceUnit);

traceUnit = [
    {
        value: 8,
        height: 80,
        backgroundColor: "#00BFFF",
        key: 5,
        y: 0,
        x: 0,
        isPivot: false,
    },
    {
        value: 7,
        height: 70,
        backgroundColor: "#00BFFF",
        key: 2,
        y: 0,
        x: 0,
        isPivot: false,
    },
    {
        value: 3,
        height: 30,
        backgroundColor: "#00BFFF",
        key: 0,
        y: 0,
        x: 0,
        isPivot: false,
    },
    {
        value: 5,
        height: 50,
        backgroundColor: "#00BFFF",
        key: 3,
        y: 0,
        x: 0,
        isPivot: false,
    },
    {
        value: 10,
        height: 100,
        backgroundColor: "#008000",
        key: 4,
        y: 0,
        x: 0,
        isPivot: false,
    },
    {
        value: 12,
        height: 120,
        backgroundColor: "#008000",
        key: 1,
        y: 0,
        x: 0,
        isPivot: false,
    },
];

trace.splice(11, 0, traceUnit);

traceUnit = [
    {
        value: 7,
        height: 70,
        backgroundColor: "#00BFFF",
        key: 2,
        y: 0,
        x: 0,
        isPivot: false,
    },
    {
        value: 5,
        height: 50,
        backgroundColor: "#00BFFF",
        key: 3,
        y: 0,
        x: 0,
        isPivot: false,
    },
    {
        value: 3,
        height: 30,
        backgroundColor: "#00BFFF",
        key: 0,
        y: 0,
        x: 0,
        isPivot: false,
    },
    {
        value: 8,
        height: 80,
        backgroundColor: "#008000",
        key: 5,
        y: 0,
        x: 0,
        isPivot: false,
    },
    {
        value: 10,
        height: 100,
        backgroundColor: "#008000",
        key: 4,
        y: 0,
        x: 0,
        isPivot: false,
    },
    {
        value: 12,
        height: 120,
        backgroundColor: "#008000",
        key: 1,
        y: 0,
        x: 0,
        isPivot: false,
    },
];

trace.splice(15, 0, traceUnit);

traceUnit = [
    {
        value: 5,
        height: 50,
        backgroundColor: "#00BFFF",
        key: 3,
        y: 0,
        x: 0,
        isPivot: false,
    },
    {
        value: 3,
        height: 30,
        backgroundColor: "#00BFFF",
        key: 0,
        y: 0,
        x: 0,
        isPivot: false,
    },
    {
        value: 7,
        height: 70,
        backgroundColor: "#008000",
        key: 2,
        y: 0,
        x: 0,
        isPivot: false,
    },
    {
        value: 8,
        height: 80,
        backgroundColor: "#008000",
        key: 5,
        y: 0,
        x: 0,
        isPivot: false,
    },
    {
        value: 10,
        height: 100,
        backgroundColor: "#008000",
        key: 4,
        y: 0,
        x: 0,
        isPivot: false,
    },
    {
        value: 12,
        height: 120,
        backgroundColor: "#008000",
        key: 1,
        y: 0,
        x: 0,
        isPivot: false,
    },
];

trace.splice(19, 0, traceUnit);

const description = [
    "Heap sort is an sorting algorithm which heavily relies on heap data structure",
    "To begin, all of the numbers are stored in a heap.",
    "In this example, numbers are structured in max heap, whose top element is the maximum element.",
    "A max heap is built, heap size is: 6",
    "Top element 12 is the largest in the heap",
    "Take 12 out of the heap",
    "Restructure the remaining numbers into a max heap",
    "A max heap is built, heap size is: 5",
    "Top element 10 is the largest in the heap",
    "Take 10 out of the heap",
    "Restructure the remaining numbers into a max heap",
    "A max heap is built, heap size is: 4",
    "Top element 8 is the largest in the heap",
    "Take 8 out of the heap",
    "Restructure the remaining numbers into a max heap",
    "A max heap is built, heap size is: 3",
    "Top element 7 is the largest in the heap",
    "Take 7 out of the heap",
    "Restructure the remaining numbers into a max heap",
    "A max heap is built, heap size is: 2",
    "Top element 5 is the largest in the heap",
    "Take 5 out of the heap",
    "The last element 3 is already sorted. Heap sort finished.",
];

export default function IntroHeap() {
    const props = { trace: trace, description: description };

    return <SwitchAnimation {...props} width={490} explanationBoxHeight={6} />;
}

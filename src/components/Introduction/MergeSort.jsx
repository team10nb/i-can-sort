/*
    Author: Ruizi Han
*/


import React from "react";
import SwitchAnimation from "../SwitchAnimation/SwitchAnimation";
import MergeSort from "../SwitchAnimation/SortingAlgorithms/MergeSort/MergeSort";

const arr = [3, 12, 7, 5, 10, 8];

let trace = MergeSort(arr).trace;

let traceUnit = [
    {value: 3, height: 30, backgroundColor: "#FAE692", key: 0, y: 0, x: -20, isPivot: false},
    {value: 7, height: 70, backgroundColor: "#F2C182", key: 2, y: 0, x: 0, isPivot: false},
    {value: 12, height: 120, backgroundColor: "#F2C182", key: 1, y: 0, x: 0, isPivot: false},
    {value: 5, height: 50, backgroundColor: "#00BFFF", key: 3, y: 0, x: 10, isPivot: false},
    {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0, x: 10, isPivot: false},
    {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0, x: 10, isPivot: false},
];

trace.splice(10, 0, traceUnit);

traceUnit = [
    {value: 3, height: 30, backgroundColor: "#FAE692", key: 0, y: 0, x: -10, isPivot: false},
    {value: 7, height: 70, backgroundColor: "#F2C182", key: 2, y: 0, x: 0, isPivot: false},
    {value: 12, height: 120, backgroundColor: "#F2C182", key: 1, y: -20, x: 0, isPivot: false},
    {value: 5, height: 50, backgroundColor: "#00BFFF", key: 3, y: 0, x: 10, isPivot: false},
    {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0, x: 10, isPivot: false},
    {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0, x: 10, isPivot: false},
];

trace.splice(12, 0, traceUnit);

traceUnit = [
    {value: 3, height: 30, backgroundColor: "#FAE692", key: 0, y: 0, x: -10, isPivot: false},
    {value: 7, height: 70, backgroundColor: "#F2C182", key: 2, y: 0, x: 0, isPivot: false},
    {value: 12, height: 120, backgroundColor: "#F2C182", key: 1, y: 0, x: 0, isPivot: false},
    {value: 5, height: 50, backgroundColor: "#00BFFF", key: 3, y: 0, x: 10, isPivot: false},
    {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0, x: 10, isPivot: false},
    {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0, x: 10, isPivot: false},
];

trace.splice(13, 0, traceUnit);

traceUnit = [
    {value: 3, height: 30, backgroundColor: "#FAE692", key: 0, y: 0, x: -10, isPivot: false},
    {value: 7, height: 70, backgroundColor: "#FAE692", key: 2, y: 0, x: -10, isPivot: false},
    {value: 12, height: 120, backgroundColor: "#FAE692", key: 1, y: 0, x: -10, isPivot: false},
    {value: 5, height: 50, backgroundColor: "#EB945E", key: 3, y: 0, x: 0, isPivot: false},
    {value: 8, height: 80, backgroundColor: "#82C5DC", key: 5, y: 0, x: 20, isPivot: false},
    {value: 10, height: 100, backgroundColor: "#82C5DC", key: 4, y: 0, x:20, isPivot: false},
];

trace.splice(23, 0, traceUnit);

traceUnit = [
    {value: 3, height: 30, backgroundColor: "#FAE692", key: 0, y: 0, x: -10, isPivot: false},
    {value: 7, height: 70, backgroundColor: "#FAE692", key: 2, y: 0, x: -10, isPivot: false},
    {value: 12, height: 120, backgroundColor: "#FAE692", key: 1, y: 0, x: -10, isPivot: false},
    {value: 5, height: 50, backgroundColor: "#EB945E", key: 3, y: 0, x: 0, isPivot: false},
    {value: 8, height: 80, backgroundColor: "#82C5DC", key: 5, y: 0, x: 20, isPivot: false},
    {value: 10, height: 100, backgroundColor: "#82C5DC", key: 4, y: -20, x:20, isPivot: false},
];

trace.splice(25, 0, traceUnit);

traceUnit = [
    {value: 3, height: 30, backgroundColor: "#FAE692", key: 0, y: 0, x: -10, isPivot: false},
    {value: 7, height: 70, backgroundColor: "#FAE692", key: 2, y: 0, x: -10, isPivot: false},
    {value: 12, height: 120, backgroundColor: "#FAE692", key: 1, y: 0, x: -10, isPivot: false},
    {value: 5, height: 50, backgroundColor: "#EB945E", key: 3, y: 0, x: 0, isPivot: false},
    {value: 8, height: 80, backgroundColor: "#82C5DC", key: 5, y: 0, x: 20, isPivot: false},
    {value: 10, height: 100, backgroundColor: "#82C5DC", key: 4, y: 0, x:20, isPivot: false},
];

trace.splice(26, 0, traceUnit);

traceUnit = [
    {value: 3, height: 30, backgroundColor: "#FAE692", key: 0, y: 0, x: -10, isPivot: false},
    {value: 5, height: 50, backgroundColor: "#EB945E", key: 3, y: 0, x: -10, isPivot: false},
    {value: 7, height: 70, backgroundColor: "#FAE692", key: 2, y: -20, x: -10, isPivot: false},
    {value: 12, height: 120, backgroundColor: "#FAE692", key: 1, y: -20, x: -10, isPivot: false},
    {value: 8, height: 80, backgroundColor: "#EB945E", key: 5, y: -20, x: -10, isPivot: false},
    {value: 10, height: 100, backgroundColor: "#EB945E", key: 4, y: -20, x: -10, isPivot: false},
];

trace.splice(29, 0, traceUnit);

traceUnit = [
    {value: 3, height: 30, backgroundColor: "#FAE692", key: 0, y: 0, x: -10, isPivot: false},
    {value: 5, height: 50, backgroundColor: "#EB945E", key: 3, y: 0, x: -10, isPivot: false},
    {value: 7, height: 70, backgroundColor: "#FAE692", key: 2, y: 0, x: -10, isPivot: false},
    {value: 8, height: 80, backgroundColor: "#EB945E", key: 5, y: 0, x: -10, isPivot: false},
    {value: 12, height: 120, backgroundColor: "#FAE692", key: 1, y: -20, x: -10, isPivot: false},
    {value: 10, height: 100, backgroundColor: "#EB945E", key: 4, y: -20, x: -10, isPivot: false},
];

trace.splice(30, 0, traceUnit);

traceUnit = [
    {value: 3, height: 30, backgroundColor: "#FAE692", key: 0, y: 0, x: -10, isPivot: false},
    {value: 5, height: 50, backgroundColor: "#EB945E", key: 3, y: 0, x: -10, isPivot: false},
    {value: 7, height: 70, backgroundColor: "#FAE692", key: 2, y: 0, x: -10, isPivot: false},
    {value: 8, height: 80, backgroundColor: "#EB945E", key: 5, y: 0, x: -10, isPivot: false},
    {value: 10, height: 100, backgroundColor: "#EB945E", key: 4, y: 0, x: -10, isPivot: false},
    {value: 12, height: 120, backgroundColor: "#FAE692", key: 1, y: 0, x: -10, isPivot: false},
];

trace.splice(31, 0, traceUnit);

const description = [
    "Merge sort is an algorithm used to sort a sequence of numbers", 
    "Divide these numbers into two parts", 
    "Let's process the left part first", 
    "Again, divide these numbers into two parts", 
    "Same, let's process the left part first", 
    "Only one number in the left part, so it is already sorted", 
    "Ok, let's see the right part", 
    "Divide 12 and 7 into two parts", 
    "Only one number left for each part, merge may begin",
    "12 is bigger than 7, place 7 first, then 12", 
    "Merge 7 and 12 into sorted", 
    "Now left and right parts are sorted seperatly, merge them", 
    "3 is less than 7, place 3 first, then 7",
    "Place 12",
    "Now 3 to 12 is merged and sorted", 
    "Ok, let's see the right part", 
    "Divide these numbers into two parts", 
    "Let's process the left part first", 
    "Only one number in the left part, so it is already sorted", 
    "Ok, let's see the right part", 
    "Divide 10 and 8 into two parts", 
    "Only one number left for each part, merge may begin", 
    "10 is bigger than 8, place 8 first, then 10", 
    "Merge 8 and 10 into sorted", 
    "Now left and right parts are sorted seperatly, merge them", 
    "5 is less than 8, place 5 first, then 8",
    "Place 10",
    "Now 5 to 10 is merged and sorted", 
    "Now left and right parts are sorted seperatly, merge them", 
    "3 is less 5, place 3 first, then 5",
    "7 is less 8, place 7 first, then 8",
    "12 is bigger 10, place 10 first, then 12",
    "Now 3 to 12 is merged and sorted", 
    "Merge sort is finished, all sorted"
];

export default function IntroMerge() {
    const props = { trace: trace, description: description };
    
    return (<SwitchAnimation {...props} width={490} explanationBoxHeight={6}/>);
}
/*
    Author: Ruizi Han
*/

// random, pivot


import React from "react";
import SwitchAnimation from "../SwitchAnimation/SwitchAnimation";
import QuickSort from '../SwitchAnimation/SortingAlgorithms/QuickSort/QuickSort';

const arr = [3, 12, 7, 5, 10, 8];

const trace = QuickSort(arr).trace;

const description = [

];

export default function IntroQuick() {
    const props = { trace: trace, description: description };
    
    return (<SwitchAnimation {...props} width={490} explanationBoxHeight={6}/>);

}
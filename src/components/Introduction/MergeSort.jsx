/*
    Author: Ruizi Han
*/

// pivot

import React from "react";
import SwitchAnimation from "../SwitchAnimation/SwitchAnimation";
import MergeSort from "../SwitchAnimation/SortingAlgorithms/MergeSort/MergeSort";

const arr = [3, 12, 7, 5, 10, 8];

const trace = MergeSort(arr).trace;

const description = [
    "Unsorted Array", 
    "Divide these numbers into two parts", 
    "Let's process the left part first", 
    "Divide these numbers into two parts", 
    "Let's process the left part first", 
    "Only one number left, already sorted", 
    "Ok, let's see the right part", 
    "Divide 12 and 7 into two parts", 
    "Only one number left for each part, merge may begin", 
    "Merge 7 and 12 into sorted", 
    "Now left and right parts are sorted seperatly, merge them", 
    "Now 3 to 12 is merged and sorted", 
    "Ok, let's see the right part", 
    "Divide these numbers into two parts", 
    "Let's process the left part first", 
    "Only one number left, already sorted", 
    "Ok, let's see the right part", 
    "Divide 10 and 8 into two parts", 
    "Only one number left for each part, merge may begin", 
    "Merge 8 and 10 into sorted", 
    "Now left and right parts are sorted seperatly, merge them", 
    "Now 5 to 10 is merged and sorted", 
    "Now left and right parts are sorted seperatly, merge them", 
    "Now 3 to 12 is merged and sorted", 
    "Merge sort is finished, all sorted"
];

export default function IntroMerge() {
    const props = { trace: trace, description: description };
    
    return (<SwitchAnimation {...props} width={490} explanationBoxHeight={6}/>);
}
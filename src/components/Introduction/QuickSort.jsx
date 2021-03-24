/*
    Author: Ruizi Han
*/

import React from "react";
import SwitchAnimation from "../SwitchAnimation/SwitchAnimation";

// 12, 3, 5, 7

const trace = [
    [
        {value: 12, height: 120, backgroundColor: "#00BFFF", key: 0, y: 0, x: 0, isPivot: false},
        {value: 3, height: 30, backgroundColor: "#00BFFF", key: 1, y: 0, x: 0, isPivot: false},
        {value: 5, height: 50, backgroundColor: "#00BFFF", key: 2, y: 0, x: 0, isPivot: false},
        {value: 7, height: 70, backgroundColor: "#00BFFF", key: 3, y: 0, x: 0, isPivot: false},
    ],[
        {value: 12, height: 120, backgroundColor: "#00BFFF", key: 0, y: 0, x: 0, isPivot: false},
        {value: 3, height: 30, backgroundColor: "#00BFFF", key: 1, y: 0, x: 0, isPivot: false},
        {value: 5, height: 50, backgroundColor: "#FF008C", key: 2, y: 0, x: 0, isPivot: true},
        {value: 7, height: 70, backgroundColor: "#00BFFF", key: 3, y: 0, x: 0, isPivot: false},
    ],[
        {value: 5, height: 50, backgroundColor: "#FF008C", key: 2, y: 0, x: 0, isPivot: true},
        {value: 3, height: 30, backgroundColor: "#00BFFF", key: 1, y: 0, x: 0, isPivot: false},
        {value: 12, height: 120, backgroundColor: "#00BFFF", key: 0, y: 0, x: 0, isPivot: false},
        {value: 7, height: 70, backgroundColor: "#00BFFF", key: 3, y: 0, x: 0, isPivot: false},
    ],[
        {value: 5, height: 50, backgroundColor: "#FFD700", key: 2, y: 0, x: 0, isPivot: true},
        {value: 3, height: 30, backgroundColor: "#FFD700", key: 1, y: 0, x: 0, isPivot: false},
        {value: 12, height: 120, backgroundColor: "#00BFFF", key: 0, y: 0, x: 0, isPivot: false},
        {value: 7, height: 70, backgroundColor: "#00BFFF", key: 3, y: 0, x: 0, isPivot: false},
    ],[
        {value: 5, height: 50, backgroundColor: "#FF008C", key: 2, y: 0, x: 0, isPivot: true},
        {value: 3, height: 30, backgroundColor: "#D309E1", key: 1, y: 0, x: 0, isPivot: false},
        {value: 12, height: 120, backgroundColor: "#00BFFF", key: 0, y: 0, x: 0, isPivot: false},
        {value: 7, height: 70, backgroundColor: "#00BFFF", key: 3, y: 0, x: 0, isPivot: false},
    ],[
        {value: 5, height: 50, backgroundColor: "#FF008C", key: 2, y: 0, x: 0, isPivot: true},
        {value: 3, height: 30, backgroundColor: "#D309E1", key: 1, y: 0, x: 0, isPivot: false},
        {value: 12, height: 120, backgroundColor: "#00BFFF", key: 0, y: 0, x: 0, isPivot: false},
        {value: 7, height: 70, backgroundColor: "#00BFFF", key: 3, y: 0, x: 0, isPivot: false},
    ],[
        {value: 5, height: 50, backgroundColor: "#FFD700", key: 2, y: 0, x: 0, isPivot: true},
        {value: 3, height: 30, backgroundColor: "#D309E1", key: 1, y: 0, x: 0, isPivot: false},
        {value: 12, height: 120, backgroundColor: "#FFD700", key: 0, y: 0, x: 0, isPivot: false},
        {value: 7, height: 70, backgroundColor: "#00BFFF", key: 3, y: 0, x: 0, isPivot: false},
    ],[
        {value: 5, height: 50, backgroundColor: "#FFD700", key: 2, y: 0, x: 0, isPivot: true},
        {value: 3, height: 30, backgroundColor: "#D309E1", key: 1, y: 0, x: 0, isPivot: false},
        {value: 12, height: 120, backgroundColor: "#00BFFF", key: 0, y: 0, x: 0, isPivot: false},
        {value: 7, height: 70, backgroundColor: "#FFD700", key: 3, y: 0, x: 0, isPivot: false},
    ],[
        {value: 3, height: 30, backgroundColor: "#D309E1", key: 1, y: 0, x: 0, isPivot: false},
        {value: 5, height: 50, backgroundColor: "#FF008C", key: 2, y: 0, x: 0, isPivot: true},
        {value: 12, height: 120, backgroundColor: "#00BFFF", key: 0, y: 0, x: 0, isPivot: false},
        {value: 7, height: 70, backgroundColor: "#00BFFF", key: 3, y: 0, x: 0, isPivot: false},
    ],[
        {value: 3, height: 30, backgroundColor: "#00BFFF", key: 1, y: 0, x: 0, isPivot: false},
        {value: 5, height: 50, backgroundColor: "#008000", key: 2, y: 0, x: 0, isPivot: true},
        {value: 12, height: 120, backgroundColor: "#00BFFF", key: 0, y: 0, x: 0, isPivot: false},
        {value: 7, height: 70, backgroundColor: "#00BFFF", key: 3, y: 0, x: 0, isPivot: false},
    ],[
        {value: 3, height: 30, backgroundColor: "#00BFFF", key: 1, y: 0, x: 0, isPivot: false},
        {value: 5, height: 50, backgroundColor: "#008000", key: 2, y: 0, x: 0, isPivot: false},
        {value: 12, height: 120, backgroundColor: "#00BFFF", key: 0, y: 0, x: 0, isPivot: false},
        {value: 7, height: 70, backgroundColor: "#00BFFF", key: 3, y: 0, x: 0, isPivot: false},
    ],[
        {value: 3, height: 30, backgroundColor: "#008000", key: 1, y: 0, x: 0, isPivot: false},
        {value: 5, height: 50, backgroundColor: "#008000", key: 2, y: 0, x: 0, isPivot: false},
        {value: 12, height: 120, backgroundColor: "#00BFFF", key: 0, y: 0, x: 0, isPivot: false},
        {value: 7, height: 70, backgroundColor: "#00BFFF", key: 3, y: 0, x: 0, isPivot: false},
    ],[
        {value: 3, height: 30, backgroundColor: "#008000", key: 1, y: 0, x: 0, isPivot: false},
        {value: 5, height: 50, backgroundColor: "#008000", key: 2, y: 0, x: 0, isPivot: false},
        {value: 12, height: 120, backgroundColor: "#00BFFF", key: 0, y: 0, x: 0, isPivot: false},
        {value: 7, height: 70, backgroundColor: "#00BFFF", key: 3, y: 0, x: 0, isPivot: false},
    ],[
        {value: 3, height: 30, backgroundColor: "#008000", key: 1, y: 0, x: 0, isPivot: false},
        {value: 5, height: 50, backgroundColor: "#008000", key: 2, y: 0, x: 0, isPivot: false},
        {value: 12, height: 120, backgroundColor: "#00BFFF", key: 0, y: 0, x: 0, isPivot: false},
        {value: 7, height: 70, backgroundColor: "#FF008C", key: 3, y: 0, x: 0, isPivot: true},
    ],[
        {value: 3, height: 30, backgroundColor: "#008000", key: 1, y: 0, x: 0, isPivot: false},
        {value: 5, height: 50, backgroundColor: "#008000", key: 2, y: 0, x: 0, isPivot: false},
        {value: 7, height: 70, backgroundColor: "#FF008C", key: 3, y: 0, x: 0, isPivot: true},
        {value: 12, height: 120, backgroundColor: "#00BFFF", key: 0, y: 0, x: 0, isPivot: false},
    ],[
        {value: 3, height: 30, backgroundColor: "#008000", key: 1, y: 0, x: 0, isPivot: false},
        {value: 5, height: 50, backgroundColor: "#008000", key: 2, y: 0, x: 0, isPivot: false},
        {value: 7, height: 70, backgroundColor: "#FFD700", key: 3, y: 0, x: 0, isPivot: true},
        {value: 12, height: 120, backgroundColor: "#FFD700", key: 0, y: 0, x: 0, isPivot: false},
    ],[
        {value: 3, height: 30, backgroundColor: "#008000", key: 1, y: 0, x: 0, isPivot: false},
        {value: 5, height: 50, backgroundColor: "#008000", key: 2, y: 0, x: 0, isPivot: false},
        {value: 7, height: 70, backgroundColor: "#FF008C", key: 3, y: 0, x: 0, isPivot: true},
        {value: 12, height: 120, backgroundColor: "#00BFFF", key: 0, y: 0, x: 0, isPivot: false},
    ],[
        {value: 3, height: 30, backgroundColor: "#008000", key: 1, y: 0, x: 0, isPivot: false},
        {value: 5, height: 50, backgroundColor: "#008000", key: 2, y: 0, x: 0, isPivot: false},
        {value: 7, height: 70, backgroundColor: "#008000", key: 3, y: 0, x: 0, isPivot: true},
        {value: 12, height: 120, backgroundColor: "#00BFFF", key: 0, y: 0, x: 0, isPivot: false},
    ],[
        {value: 3, height: 30, backgroundColor: "#008000", key: 1, y: 0, x: 0, isPivot: false},
        {value: 5, height: 50, backgroundColor: "#008000", key: 2, y: 0, x: 0, isPivot: false},
        {value: 7, height: 70, backgroundColor: "#008000", key: 3, y: 0, x: 0, isPivot: false},
        {value: 12, height: 120, backgroundColor: "#00BFFF", key: 0, y: 0, x: 0, isPivot: false},
    ],[
        {value: 3, height: 30, backgroundColor: "#008000", key: 1, y: 0, x: 0, isPivot: false},
        {value: 5, height: 50, backgroundColor: "#008000", key: 2, y: 0, x: 0, isPivot: false},
        {value: 7, height: 70, backgroundColor: "#008000", key: 3, y: 0, x: 0, isPivot: false},
        {value: 12, height: 120, backgroundColor: "#00BFFF", key: 0, y: 0, x: 0, isPivot: false},
    ],[
        {value: 3, height: 30, backgroundColor: "#008000", key: 1, y: 0, x: 0, isPivot: false},
        {value: 5, height: 50, backgroundColor: "#008000", key: 2, y: 0, x: 0, isPivot: false},
        {value: 7, height: 70, backgroundColor: "#008000", key: 3, y: 0, x: 0, isPivot: false},
        {value: 12, height: 120, backgroundColor: "#00BFFF", key: 0, y: 0, x: 0, isPivot: false},
    ],[
        {value: 3, height: 30, backgroundColor: "#008000", key: 1, y: 0, x: 0, isPivot: false},
        {value: 5, height: 50, backgroundColor: "#008000", key: 2, y: 0, x: 0, isPivot: false},
        {value: 7, height: 70, backgroundColor: "#008000", key: 3, y: 0, x: 0, isPivot: false},
        {value: 12, height: 120, backgroundColor: "#008000", key: 0, y: 0, x: 0, isPivot: false},
    ],[
        {value: 3, height: 30, backgroundColor: "#008000", key: 1, y: 0, x: 0, isPivot: false},
        {value: 5, height: 50, backgroundColor: "#008000", key: 2, y: 0, x: 0, isPivot: false},
        {value: 7, height: 70, backgroundColor: "#008000", key: 3, y: 0, x: 0, isPivot: false},
        {value: 12, height: 120, backgroundColor: "#008000", key: 0, y: 0, x: 0, isPivot: false},
    ]

    
];

const description = [
    "Unsorted Array", 
    "Randomly choose a pivot", 
    "Move the chosen pivot to the start of this section", 
    "Compare 3 with pivot 5", 
    "Mark 3 as less than pivot 5", 
    "Move the smaller 3 to left side", 
    "Compare 12 with pivot 5", 
    "Compare 7 with pivot 5", 
    "All compared, move pivot to the right of smaller ones", 
    "Now pivot is at the correct position", 
    "Ok, let's see the left section of this pivot", 
    "The only item is certainly sorted", 
    "Ok, let's see the right section of this pivot", 
    "Randomly choose a pivot", 
    "Move the chosen pivot to the start of this section", 
    "Compare 12 with pivot 7", 
    "All compared, move pivot to the right of smaller ones", 
    "Now pivot is at the correct position", 
    "Ok, let's see the left section of this pivot", 
    "Fine, all sorted", 
    "Ok, let's see the right section of this pivot", 
    "The only item is certainly sorted", 
    "Quick sort is finished, all sorted"
];

export default function IntroQuick() {
    const props = { trace: trace, description: description };
    
    return (<SwitchAnimation {...props} width={490} explanationBoxHeight={6}/>);

}
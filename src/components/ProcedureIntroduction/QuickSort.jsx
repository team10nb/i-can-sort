/*
    Author: Ruizi Han

    The handwritten trace and description which explain the sort progress more precisely. 
*/

import React from "react";
import SwitchAnimation from "../SwitchAnimation/SwitchAnimation";

// array: 12, 3, 5, 7

const trace = [
    [
        { value: 12, height: 120, backgroundColor: "#00BFFF", key: 0, y: 0, x: 0, isPivot: false },
        { value: 3, height: 30, backgroundColor: "#00BFFF", key: 1, y: 0, x: 0, isPivot: false },
        { value: 5, height: 50, backgroundColor: "#00BFFF", key: 2, y: 0, x: 0, isPivot: false },
        { value: 7, height: 70, backgroundColor: "#00BFFF", key: 3, y: 0, x: 0, isPivot: false },
    ], [
        { value: 12, height: 120, backgroundColor: "#00BFFF", key: 0, y: 0, x: 0, isPivot: false },
        { value: 3, height: 30, backgroundColor: "#00BFFF", key: 1, y: 0, x: 0, isPivot: false },
        { value: 5, height: 50, backgroundColor: "#FF008C", key: 2, y: 0, x: 0, isPivot: true },
        { value: 7, height: 70, backgroundColor: "#00BFFF", key: 3, y: 0, x: 0, isPivot: false },
    ], [
        { value: 5, height: 50, backgroundColor: "#FF008C", key: 2, y: 0, x: 0, isPivot: true },
        { value: 3, height: 30, backgroundColor: "#00BFFF", key: 1, y: 0, x: 0, isPivot: false },
        { value: 12, height: 120, backgroundColor: "#00BFFF", key: 0, y: 0, x: 0, isPivot: false },
        { value: 7, height: 70, backgroundColor: "#00BFFF", key: 3, y: 0, x: 0, isPivot: false },
    ], [
        { value: 5, height: 50, backgroundColor: "#FFD700", key: 2, y: 0, x: 0, isPivot: true },
        { value: 3, height: 30, backgroundColor: "#FFD700", key: 1, y: 0, x: 0, isPivot: false },
        { value: 12, height: 120, backgroundColor: "#00BFFF", key: 0, y: 0, x: 0, isPivot: false },
        { value: 7, height: 70, backgroundColor: "#00BFFF", key: 3, y: 0, x: 0, isPivot: false },
    ], [
        { value: 5, height: 50, backgroundColor: "#FFD700", key: 2, y: 0, x: 0, isPivot: true },
        { value: 3, height: 30, backgroundColor: "#FFD700", key: 1, y: 0, x: 0, isPivot: false },
        { value: 12, height: 120, backgroundColor: "#00BFFF", key: 0, y: 0, x: 0, isPivot: false },
        { value: 7, height: 70, backgroundColor: "#00BFFF", key: 3, y: 0, x: 0, isPivot: false },
    ], [
        { value: 5, height: 50, backgroundColor: "#FF008C", key: 2, y: 0, x: 0, isPivot: true },
        { value: 3, height: 30, backgroundColor: "#D309E1", key: 1, y: 0, x: 0, isPivot: false },
        { value: 12, height: 120, backgroundColor: "#00BFFF", key: 0, y: 0, x: 0, isPivot: false },
        { value: 7, height: 70, backgroundColor: "#00BFFF", key: 3, y: 0, x: 0, isPivot: false },
    ], [
        { value: 5, height: 50, backgroundColor: "#FF008C", key: 2, y: 0, x: 0, isPivot: true },
        { value: 3, height: 30, backgroundColor: "#D309E1", key: 1, y: 0, x: 0, isPivot: false },
        { value: 12, height: 120, backgroundColor: "#00BFFF", key: 0, y: 0, x: 0, isPivot: false },
        { value: 7, height: 70, backgroundColor: "#00BFFF", key: 3, y: 0, x: 0, isPivot: false },
    ], [
        { value: 5, height: 50, backgroundColor: "#FFD700", key: 2, y: 0, x: 0, isPivot: true },
        { value: 3, height: 30, backgroundColor: "#D309E1", key: 1, y: 0, x: 0, isPivot: false },
        { value: 12, height: 120, backgroundColor: "#FFD700", key: 0, y: 0, x: 0, isPivot: false },
        { value: 7, height: 70, backgroundColor: "#00BFFF", key: 3, y: 0, x: 0, isPivot: false },
    ], [
        { value: 5, height: 50, backgroundColor: "#FFD700", key: 2, y: 0, x: 0, isPivot: true },
        { value: 3, height: 30, backgroundColor: "#D309E1", key: 1, y: 0, x: 0, isPivot: false },
        { value: 12, height: 120, backgroundColor: "#00BFFF", key: 0, y: 0, x: 0, isPivot: false },
        { value: 7, height: 70, backgroundColor: "#00BFFF", key: 3, y: 0, x: 0, isPivot: false },
    ], [
        { value: 5, height: 50, backgroundColor: "#FFD700", key: 2, y: 0, x: 0, isPivot: true },
        { value: 3, height: 30, backgroundColor: "#D309E1", key: 1, y: 0, x: 0, isPivot: false },
        { value: 12, height: 120, backgroundColor: "#00BFFF", key: 0, y: 0, x: 0, isPivot: false },
        { value: 7, height: 70, backgroundColor: "#FFD700", key: 3, y: 0, x: 0, isPivot: false },
    ], [
        { value: 5, height: 50, backgroundColor: "#FFD700", key: 2, y: 0, x: 0, isPivot: true },
        { value: 3, height: 30, backgroundColor: "#D309E1", key: 1, y: 0, x: 0, isPivot: false },
        { value: 12, height: 120, backgroundColor: "#00BFFF", key: 0, y: 0, x: 0, isPivot: false },
        { value: 7, height: 70, backgroundColor: "#00BFFF", key: 3, y: 0, x: 0, isPivot: false },
    ], [
        { value: 3, height: 30, backgroundColor: "#D309E1", key: 1, y: 0, x: 0, isPivot: false },
        { value: 5, height: 50, backgroundColor: "#FF008C", key: 2, y: 0, x: 0, isPivot: true },
        { value: 12, height: 120, backgroundColor: "#00BFFF", key: 0, y: 0, x: 0, isPivot: false },
        { value: 7, height: 70, backgroundColor: "#00BFFF", key: 3, y: 0, x: 0, isPivot: false },
    ], [
        { value: 3, height: 30, backgroundColor: "#00BFFF", key: 1, y: 0, x: 0, isPivot: false },
        { value: 5, height: 50, backgroundColor: "#008000", key: 2, y: 0, x: 0, isPivot: true },
        { value: 12, height: 120, backgroundColor: "#00BFFF", key: 0, y: 0, x: 0, isPivot: false },
        { value: 7, height: 70, backgroundColor: "#00BFFF", key: 3, y: 0, x: 0, isPivot: false },
    ], [
        { value: 3, height: 30, backgroundColor: "#00BFFF", key: 1, y: 0, x: 0, isPivot: false },
        { value: 5, height: 50, backgroundColor: "#008000", key: 2, y: 0, x: 0, isPivot: false },
        { value: 12, height: 120, backgroundColor: "#00BFFF", key: 0, y: 0, x: 0, isPivot: false },
        { value: 7, height: 70, backgroundColor: "#00BFFF", key: 3, y: 0, x: 0, isPivot: false },
    ], [
        { value: 3, height: 30, backgroundColor: "#008000", key: 1, y: 0, x: 0, isPivot: false },
        { value: 5, height: 50, backgroundColor: "#008000", key: 2, y: 0, x: 0, isPivot: false },
        { value: 12, height: 120, backgroundColor: "#00BFFF", key: 0, y: 0, x: 0, isPivot: false },
        { value: 7, height: 70, backgroundColor: "#00BFFF", key: 3, y: 0, x: 0, isPivot: false },
    ], [
        { value: 3, height: 30, backgroundColor: "#008000", key: 1, y: 0, x: 0, isPivot: false },
        { value: 5, height: 50, backgroundColor: "#008000", key: 2, y: 0, x: 0, isPivot: false },
        { value: 12, height: 120, backgroundColor: "#00BFFF", key: 0, y: 0, x: 0, isPivot: false },
        { value: 7, height: 70, backgroundColor: "#00BFFF", key: 3, y: 0, x: 0, isPivot: false },
    ], [
        { value: 3, height: 30, backgroundColor: "#008000", key: 1, y: 0, x: 0, isPivot: false },
        { value: 5, height: 50, backgroundColor: "#008000", key: 2, y: 0, x: 0, isPivot: false },
        { value: 12, height: 120, backgroundColor: "#00BFFF", key: 0, y: -20, x: 0, isPivot: false },
        { value: 7, height: 70, backgroundColor: "#00BFFF", key: 3, y: -20, x: 0, isPivot: false },
    ], [
        { value: 3, height: 30, backgroundColor: "#008000", key: 1, y: 0, x: 0, isPivot: false },
        { value: 5, height: 50, backgroundColor: "#008000", key: 2, y: 0, x: 0, isPivot: false },
        { value: 12, height: 120, backgroundColor: "#00BFFF", key: 0, y: 0, x: 0, isPivot: false },
        { value: 7, height: 70, backgroundColor: "#FF008C", key: 3, y: 0, x: 0, isPivot: true },
    ], [
        { value: 3, height: 30, backgroundColor: "#008000", key: 1, y: 0, x: 0, isPivot: false },
        { value: 5, height: 50, backgroundColor: "#008000", key: 2, y: 0, x: 0, isPivot: false },
        { value: 7, height: 70, backgroundColor: "#FF008C", key: 3, y: 0, x: 0, isPivot: true },
        { value: 12, height: 120, backgroundColor: "#00BFFF", key: 0, y: 0, x: 0, isPivot: false },
    ], [
        { value: 3, height: 30, backgroundColor: "#008000", key: 1, y: 0, x: 0, isPivot: false },
        { value: 5, height: 50, backgroundColor: "#008000", key: 2, y: 0, x: 0, isPivot: false },
        { value: 7, height: 70, backgroundColor: "#FFD700", key: 3, y: 0, x: 0, isPivot: true },
        { value: 12, height: 120, backgroundColor: "#FFD700", key: 0, y: 0, x: 0, isPivot: false },
    ], [
        { value: 3, height: 30, backgroundColor: "#008000", key: 1, y: 0, x: 0, isPivot: false },
        { value: 5, height: 50, backgroundColor: "#008000", key: 2, y: 0, x: 0, isPivot: false },
        { value: 7, height: 70, backgroundColor: "#FFD700", key: 3, y: 0, x: 0, isPivot: true },
        { value: 12, height: 120, backgroundColor: "#00BFFF", key: 0, y: 0, x: 0, isPivot: false },
    ], [
        { value: 3, height: 30, backgroundColor: "#008000", key: 1, y: 0, x: 0, isPivot: false },
        { value: 5, height: 50, backgroundColor: "#008000", key: 2, y: 0, x: 0, isPivot: false },
        { value: 7, height: 70, backgroundColor: "#FF008C", key: 3, y: 0, x: 0, isPivot: true },
        { value: 12, height: 120, backgroundColor: "#00BFFF", key: 0, y: 0, x: 0, isPivot: false },
    ], [
        { value: 3, height: 30, backgroundColor: "#008000", key: 1, y: 0, x: 0, isPivot: false },
        { value: 5, height: 50, backgroundColor: "#008000", key: 2, y: 0, x: 0, isPivot: false },
        { value: 7, height: 70, backgroundColor: "#008000", key: 3, y: 0, x: 0, isPivot: true },
        { value: 12, height: 120, backgroundColor: "#00BFFF", key: 0, y: 0, x: 0, isPivot: false },
    ], [
        { value: 3, height: 30, backgroundColor: "#008000", key: 1, y: -20, x: 0, isPivot: false },
        { value: 5, height: 50, backgroundColor: "#008000", key: 2, y: -20, x: 0, isPivot: false },
        { value: 7, height: 70, backgroundColor: "#008000", key: 3, y: 0, x: 0, isPivot: false },
        { value: 12, height: 120, backgroundColor: "#00BFFF", key: 0, y: 0, x: 0, isPivot: false },
    ], [
        { value: 3, height: 30, backgroundColor: "#008000", key: 1, y: 0, x: 0, isPivot: false },
        { value: 5, height: 50, backgroundColor: "#008000", key: 2, y: 0, x: 0, isPivot: false },
        { value: 7, height: 70, backgroundColor: "#008000", key: 3, y: 0, x: 0, isPivot: false },
        { value: 12, height: 120, backgroundColor: "#00BFFF", key: 0, y: 0, x: 0, isPivot: false },
    ], [
        { value: 3, height: 30, backgroundColor: "#008000", key: 1, y: 0, x: 0, isPivot: false },
        { value: 5, height: 50, backgroundColor: "#008000", key: 2, y: 0, x: 0, isPivot: false },
        { value: 7, height: 70, backgroundColor: "#008000", key: 3, y: 0, x: 0, isPivot: false },
        { value: 12, height: 120, backgroundColor: "#00BFFF", key: 0, y: 0, x: 0, isPivot: false },
    ], [
        { value: 3, height: 30, backgroundColor: "#008000", key: 1, y: 0, x: 0, isPivot: false },
        { value: 5, height: 50, backgroundColor: "#008000", key: 2, y: 0, x: 0, isPivot: false },
        { value: 7, height: 70, backgroundColor: "#008000", key: 3, y: 0, x: 0, isPivot: false },
        { value: 12, height: 120, backgroundColor: "#00BFFF", key: 0, y: 0, x: 0, isPivot: false },
    ], [
        { value: 3, height: 30, backgroundColor: "#008000", key: 1, y: 0, x: 0, isPivot: false },
        { value: 5, height: 50, backgroundColor: "#008000", key: 2, y: 0, x: 0, isPivot: false },
        { value: 7, height: 70, backgroundColor: "#008000", key: 3, y: 0, x: 0, isPivot: false },
        { value: 12, height: 120, backgroundColor: "#008000", key: 0, y: 0, x: 0, isPivot: false },
    ],
];

const description = [
    "Quick sort is an algorithm used to sort a sequence of numbers",
    "Randomly choose a pivot",
    "Move the chosen pivot to the start of this section",
    "Compare 3 with pivot 5",
    "For element less than the pivot, it should swap with the first bigger element",
    "Mark 3 as less than pivot 5",
    "Move the smaller 3 to left side of the first bigger element, which is none here, so 3 do not need to move",
    "Compare 12 with pivot 5",
    "12 is bigger than 5, no need to move",
    "Compare 7 with pivot 5",
    "7 is bigger than 5, no need to move",
    "All compared, move pivot to the right of its smaller ones",
    "Now pivot is at the correct position, elements smaller than 5 are all at the left side of it",
    "Ok, let's see the left section of this pivot",
    "There is only one item, it is certainly sorted",
    "Ok, let's see the right section of this pivot",
    "There are still unsorted elements",
    "Randomly choose a pivot",
    "Move the chosen pivot to the start of this section",
    "Compare 12 with pivot 7",
    "12 is bigger than 7, no need to move",
    "All compared, move pivot to the right of smaller ones",
    "Now pivot is at the correct position",
    "Ok, let's see the left section of this pivot",
    "All of them are sorted",
    "Ok, let's see the right section of this pivot",
    "There is only one item, it is certainly sorted",
    "Quick sort is finished, all sorted"
];

export default function IntroQuick() {
    const props = { trace: trace, description: description };

    return (<SwitchAnimation {...props} width={490} explanationBoxHeight={6} />);

}
/*
    Author: Ruizi Han
*/

import React from "react";
import SwitchAnimation from "../SwitchAnimation/SwitchAnimation";

// 3, 12, 7, 5, 10, 8

const trace = [
    [
        {value: 3, height: 30, backgroundColor: "#00BFFF", key: 0, y: 0},
        {value: 12, height: 120, backgroundColor: "#00BFFF", key: 1, y: 0},
        {value: 7, height: 70, backgroundColor: "#00BFFF", key: 2, y: 0},
        {value: 5, height: 50, backgroundColor: "#00BFFF", key: 3, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#00BFFF", key: 0, y: 0},
        {value: 12, height: 120, backgroundColor: "#00BFFF", key: 1, y: 0},
        {value: 7, height: 70, backgroundColor: "#00BFFF", key: 2, y: 0},
        {value: 5, height: 50, backgroundColor: "#00BFFF", key: 3, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#FF0000", key: 0, y: 0},
        {value: 12, height: 120, backgroundColor: "#00BFFF", key: 1, y: 0},
        {value: 7, height: 70, backgroundColor: "#00BFFF", key: 2, y: 0},
        {value: 5, height: 50, backgroundColor: "#00BFFF", key: 3, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#FF0000", key: 0, y: 0},
        {value: 12, height: 120, backgroundColor: "#FFD700", key: 1, y: 0},
        {value: 7, height: 70, backgroundColor: "#00BFFF", key: 2, y: 0},
        {value: 5, height: 50, backgroundColor: "#00BFFF", key: 3, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#FF0000", key: 0, y: 0},
        {value: 12, height: 120, backgroundColor: "#00BFFF", key: 1, y: 0},
        {value: 7, height: 70, backgroundColor: "#FFD700", key: 2, y: 0},
        {value: 5, height: 50, backgroundColor: "#00BFFF", key: 3, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#FF0000", key: 0, y: 0},
        {value: 12, height: 120, backgroundColor: "#00BFFF", key: 1, y: 0},
        {value: 7, height: 70, backgroundColor: "#00BFFF", key: 2, y: 0},
        {value: 5, height: 50, backgroundColor: "#FFD700", key: 3, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#FF0000", key: 0, y: 0},
        {value: 12, height: 120, backgroundColor: "#00BFFF", key: 1, y: 0},
        {value: 7, height: 70, backgroundColor: "#00BFFF", key: 2, y: 0},
        {value: 5, height: 50, backgroundColor: "#00BFFF", key: 3, y: 0},
        {value: 10, height: 100, backgroundColor: "#FFD700", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#FF0000", key: 0, y: 0},
        {value: 12, height: 120, backgroundColor: "#00BFFF", key: 1, y: 0},
        {value: 7, height: 70, backgroundColor: "#00BFFF", key: 2, y: 0},
        {value: 5, height: 50, backgroundColor: "#00BFFF", key: 3, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#FFD700", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#FF0000", key: 0, y: 0},
        {value: 12, height: 120, backgroundColor: "#00BFFF", key: 1, y: 0},
        {value: 7, height: 70, backgroundColor: "#00BFFF", key: 2, y: 0},
        {value: 5, height: 50, backgroundColor: "#00BFFF", key: 3, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#FF0000", key: 0, y: 0},
        {value: 12, height: 120, backgroundColor: "#00BFFF", key: 1, y: 0},
        {value: 7, height: 70, backgroundColor: "#00BFFF", key: 2, y: 0},
        {value: 5, height: 50, backgroundColor: "#00BFFF", key: 3, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#008000", key: 0, y: 0},
        {value: 12, height: 120, backgroundColor: "#00BFFF", key: 1, y: 0},
        {value: 7, height: 70, backgroundColor: "#00BFFF", key: 2, y: 0},
        {value: 5, height: 50, backgroundColor: "#00BFFF", key: 3, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#008000", key: 0, y: 0},
        {value: 12, height: 120, backgroundColor: "#FF0000", key: 1, y: 0},
        {value: 7, height: 70, backgroundColor: "#00BFFF", key: 2, y: 0},
        {value: 5, height: 50, backgroundColor: "#00BFFF", key: 3, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#008000", key: 0, y: 0},
        {value: 12, height: 120, backgroundColor: "#FF0000", key: 1, y: 0},
        {value: 7, height: 70, backgroundColor: "#FFD700", key: 2, y: 0},
        {value: 5, height: 50, backgroundColor: "#00BFFF", key: 3, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#008000", key: 0, y: 0},
        {value: 12, height: 120, backgroundColor: "#00BFFF", key: 1, y: 0},
        {value: 7, height: 70, backgroundColor: "#FF0000", key: 2, y: 0},
        {value: 5, height: 50, backgroundColor: "#00BFFF", key: 3, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#008000", key: 0, y: 0},
        {value: 12, height: 120, backgroundColor: "#00BFFF", key: 1, y: 0},
        {value: 7, height: 70, backgroundColor: "#FF0000", key: 2, y: 0},
        {value: 5, height: 50, backgroundColor: "#FFD700", key: 3, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#008000", key: 0, y: 0},
        {value: 12, height: 120, backgroundColor: "#00BFFF", key: 1, y: 0},
        {value: 7, height: 70, backgroundColor: "#00BFFF", key: 2, y: 0},
        {value: 5, height: 50, backgroundColor: "#FF0000", key: 3, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#008000", key: 0, y: 0},
        {value: 12, height: 120, backgroundColor: "#00BFFF", key: 1, y: 0},
        {value: 7, height: 70, backgroundColor: "#00BFFF", key: 2, y: 0},
        {value: 5, height: 50, backgroundColor: "#FF0000", key: 3, y: 0},
        {value: 10, height: 100, backgroundColor: "#FFD700", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#008000", key: 0, y: 0},
        {value: 12, height: 120, backgroundColor: "#00BFFF", key: 1, y: 0},
        {value: 7, height: 70, backgroundColor: "#00BFFF", key: 2, y: 0},
        {value: 5, height: 50, backgroundColor: "#FF0000", key: 3, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#FFD700", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#008000", key: 0, y: 0},
        {value: 12, height: 120, backgroundColor: "#00BFFF", key: 1, y: 0},
        {value: 7, height: 70, backgroundColor: "#00BFFF", key: 2, y: 0},
        {value: 5, height: 50, backgroundColor: "#FF0000", key: 3, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#008000", key: 0, y: 0},
        {value: 5, height: 50, backgroundColor: "#008000", key: 3, y: 0},
        {value: 7, height: 70, backgroundColor: "#00BFFF", key: 2, y: 0},
        {value: 12, height: 120, backgroundColor: "#00BFFF", key: 1, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#008000", key: 0, y: 0},
        {value: 5, height: 50, backgroundColor: "#008000", key: 3, y: 0},
        {value: 7, height: 70, backgroundColor: "#FF0000", key: 2, y: 0},
        {value: 12, height: 120, backgroundColor: "#00BFFF", key: 1, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#008000", key: 0, y: 0},
        {value: 5, height: 50, backgroundColor: "#008000", key: 3, y: 0},
        {value: 7, height: 70, backgroundColor: "#FF0000", key: 2, y: 0},
        {value: 12, height: 120, backgroundColor: "#FFD700", key: 1, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#008000", key: 0, y: 0},
        {value: 5, height: 50, backgroundColor: "#008000", key: 3, y: 0},
        {value: 7, height: 70, backgroundColor: "#FF0000", key: 2, y: 0},
        {value: 12, height: 120, backgroundColor: "#00BFFF", key: 1, y: 0},
        {value: 10, height: 100, backgroundColor: "#FFD700", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#008000", key: 0, y: 0},
        {value: 5, height: 50, backgroundColor: "#008000", key: 3, y: 0},
        {value: 7, height: 70, backgroundColor: "#FF0000", key: 2, y: 0},
        {value: 12, height: 120, backgroundColor: "#00BFFF", key: 1, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#FFD700", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#008000", key: 0, y: 0},
        {value: 5, height: 50, backgroundColor: "#008000", key: 3, y: 0},
        {value: 7, height: 70, backgroundColor: "#008000", key: 2, y: 0},
        {value: 12, height: 120, backgroundColor: "#00BFFF", key: 1, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#008000", key: 0, y: 0},
        {value: 5, height: 50, backgroundColor: "#008000", key: 3, y: 0},
        {value: 7, height: 70, backgroundColor: "#008000", key: 2, y: 0},
        {value: 12, height: 120, backgroundColor: "#FF0000", key: 1, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#008000", key: 0, y: 0},
        {value: 5, height: 50, backgroundColor: "#008000", key: 3, y: 0},
        {value: 7, height: 70, backgroundColor: "#008000", key: 2, y: 0},
        {value: 12, height: 120, backgroundColor: "#FF0000", key: 1, y: 0},
        {value: 10, height: 100, backgroundColor: "#FFD700", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#008000", key: 0, y: 0},
        {value: 5, height: 50, backgroundColor: "#008000", key: 3, y: 0},
        {value: 7, height: 70, backgroundColor: "#008000", key: 2, y: 0},
        {value: 12, height: 120, backgroundColor: "#00BFFF", key: 1, y: 0},
        {value: 10, height: 100, backgroundColor: "#FF0000", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#008000", key: 0, y: 0},
        {value: 5, height: 50, backgroundColor: "#008000", key: 3, y: 0},
        {value: 7, height: 70, backgroundColor: "#008000", key: 2, y: 0},
        {value: 12, height: 120, backgroundColor: "#00BFFF", key: 1, y: 0},
        {value: 10, height: 100, backgroundColor: "#FF0000", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#FFD700", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#008000", key: 0, y: 0},
        {value: 5, height: 50, backgroundColor: "#008000", key: 3, y: 0},
        {value: 7, height: 70, backgroundColor: "#008000", key: 2, y: 0},
        {value: 12, height: 120, backgroundColor: "#00BFFF", key: 1, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#FF0000", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#008000", key: 0, y: 0},
        {value: 5, height: 50, backgroundColor: "#008000", key: 3, y: 0},
        {value: 7, height: 70, backgroundColor: "#008000", key: 2, y: 0},
        {value: 8, height: 80, backgroundColor: "#008000", key: 5, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 12, height: 120, backgroundColor: "#00BFFF", key: 1, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#008000", key: 0, y: 0},
        {value: 5, height: 50, backgroundColor: "#008000", key: 3, y: 0},
        {value: 7, height: 70, backgroundColor: "#008000", key: 2, y: 0},
        {value: 8, height: 80, backgroundColor: "#008000", key: 5, y: 0},
        {value: 10, height: 100, backgroundColor: "#FF0000", key: 4, y: 0},
        {value: 12, height: 120, backgroundColor: "#00BFFF", key: 1, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#008000", key: 0, y: 0},
        {value: 5, height: 50, backgroundColor: "#008000", key: 3, y: 0},
        {value: 7, height: 70, backgroundColor: "#008000", key: 2, y: 0},
        {value: 8, height: 80, backgroundColor: "#008000", key: 5, y: 0},
        {value: 10, height: 100, backgroundColor: "#FF0000", key: 4, y: 0},
        {value: 12, height: 120, backgroundColor: "#FFD700", key: 1, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#008000", key: 0, y: 0},
        {value: 5, height: 50, backgroundColor: "#008000", key: 3, y: 0},
        {value: 7, height: 70, backgroundColor: "#008000", key: 2, y: 0},
        {value: 8, height: 80, backgroundColor: "#008000", key: 5, y: 0},
        {value: 10, height: 100, backgroundColor: "#008000", key: 4, y: 0},
        {value: 12, height: 120, backgroundColor: "#00BFFF", key: 1, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#008000", key: 0, y: 0},
        {value: 5, height: 50, backgroundColor: "#008000", key: 3, y: 0},
        {value: 7, height: 70, backgroundColor: "#008000", key: 2, y: 0},
        {value: 8, height: 80, backgroundColor: "#008000", key: 5, y: 0},
        {value: 10, height: 100, backgroundColor: "#008000", key: 4, y: 0},
        {value: 12, height: 120, backgroundColor: "#008000", key: 1, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#008000", key: 0, y: 0},
        {value: 5, height: 50, backgroundColor: "#008000", key: 3, y: 0},
        {value: 7, height: 70, backgroundColor: "#008000", key: 2, y: 0},
        {value: 8, height: 80, backgroundColor: "#008000", key: 5, y: 0},
        {value: 10, height: 100, backgroundColor: "#008000", key: 4, y: 0},
        {value: 12, height: 120, backgroundColor: "#008000", key: 1, y: 0}
    ]
]

const description = ["Selection sort is one algorithm used to sort a sequence of numbers", 
                     "It will find the smallest element among unsorted elements, then put it to its right place",
                     "The present smallest element is marked red. First, suppose 3 is the minimum", 
                     "Compare 3 and 12, 3 is still the minimum", 
                     "Compare 3 and 7, 3 is still the minimum", 
                     "Compare 3 and 5, 3 is still the minimum", 
                     "Compare 3 and 10, 3 is still the minimum", 
                     "Compare 3 and 8, 3 is still the minimum",
                     "One round of comparisons has finished, 3 is the smallest element among unsorted elements", 
                     "As the minimum is the first unsorted element, numbers don't get swapped", 
                     "3 is sorted, and sorted elements are marked green",
                     "Repeat those operations, now suppose 12 is the minimum", 
                     "Compare 12 and 7", 
                     "7 is smaller than 12, so set 7 as the new minimum", 
                     "Compare 7 and 5", 
                     "5 is smaller than 7, so set 5 as the new minimum", 
                     "Compare 5 and 10, 5 is still the minimum", 
                     "Compare 5 and 8, 5 is still the minimum", 
                     "Another round of comparisons has finished, 5 is the smallest element among unsorted elements",
                     "Swap the minimum 5 and the first unsorted element 12", 
                     "Suppose 7 is the minimum", 
                     "Compare 7 and 12, 7 is still the minimum", 
                     "Compare 7 and 10, 7 is still the minimum", 
                     "Compare 7 and 8, 7 is still the minimum", 
                     "As the minimum is the first unsorted element, numbers don't get swapped", 
                     "Suppose 12 is the minimum", 
                     "Compare 12 and 10", 
                     "10 is smaller than 12, so set 10 as new minimum", 
                     "Compare 10 and 8", 
                     "8 is smaller than 10, so set 8 as new minimum", 
                     "Swap the minimum 8 and the first unsorted element 12", 
                     "Suppose 10 is the minimum", 
                     "Compare 10 and 12, 10 is still the minimum", 
                     "As the minimum is the first unsorted element, numbers don't get swapped", 
                     "As the minimum is the first unsorted element, numbers don't get swapped", 
                     "Selection Sort Finished!"]

export default function IntroSelection() {
    const props = { trace: trace, description: description };

    return <SwitchAnimation {...props} width={490} explainationBoxHeight={6}/>;                    
}
                    
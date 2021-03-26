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
        {value: 3, height: 30, backgroundColor: "#008000", key: 0, y: 0},
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
        {value: 3, height: 30, backgroundColor: "#FFD700", key: 0, y: 0},
        {value: 12, height: 120, backgroundColor: "#FFD700", key: 1, y: -50},
        {value: 7, height: 70, backgroundColor: "#00BFFF", key: 2, y: 0},
        {value: 5, height: 50, backgroundColor: "#00BFFF", key: 3, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#FFD700", key: 0, y: 0},
        {value: 12, height: 120, backgroundColor: "#FFD700", key: 1, y: -50},
        {value: 7, height: 70, backgroundColor: "#00BFFF", key: 2, y: 0},
        {value: 5, height: 50, backgroundColor: "#00BFFF", key: 3, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#FFD700", key: 0, y: 0},
        {value: 12, height: 120, backgroundColor: "#FFD700", key: 1, y: -50},
        {value: 7, height: 70, backgroundColor: "#00BFFF", key: 2, y: 0},
        {value: 5, height: 50, backgroundColor: "#00BFFF", key: 3, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#FFD700", key: 0, y: 0},
        {value: 12, height: 120, backgroundColor: "#FFD700", key: 1, y: -50},
        {value: 7, height: 70, backgroundColor: "#00BFFF", key: 2, y: 0},
        {value: 5, height: 50, backgroundColor: "#00BFFF", key: 3, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#008000", key: 0, y: 0},
        {value: 12, height: 120, backgroundColor: "#008000", key: 1, y: 0},
        {value: 7, height: 70, backgroundColor: "#00BFFF", key: 2, y: 0},
        {value: 5, height: 50, backgroundColor: "#00BFFF", key: 3, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#008000", key: 0, y: 0},
        {value: 12, height: 120, backgroundColor: "#008000", key: 1, y: 0},
        {value: 7, height: 70, backgroundColor: "#00BFFF", key: 2, y: 0},
        {value: 5, height: 50, backgroundColor: "#00BFFF", key: 3, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#008000", key: 0, y: 0},
        {value: 12, height: 120, backgroundColor: "#FFD700", key: 1, y: 0},
        {value: 7, height: 70, backgroundColor: "#FFD700", key: 2, y: -50},
        {value: 5, height: 50, backgroundColor: "#00BFFF", key: 3, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#008000", key: 0, y: 0},
        {value: 12, height: 120, backgroundColor: "#FFD700", key: 1, y: 0},
        {value: 7, height: 70, backgroundColor: "#FFD700", key: 2, y: -50},
        {value: 5, height: 50, backgroundColor: "#00BFFF", key: 3, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#008000", key: 0, y: 0},
        {value: 12, height: 120, backgroundColor: "#FFD700", key: 1, y: 0},
        {value: 7, height: 70, backgroundColor: "#FFD700", key: 2, y: -50},
        {value: 5, height: 50, backgroundColor: "#00BFFF", key: 3, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#008000", key: 0, y: 0},
        {value: 7, height: 70, backgroundColor: "#FFD700", key: 2, y: -50},
        {value: 12, height: 120, backgroundColor: "#008000", key: 1, y: 0},
        {value: 5, height: 50, backgroundColor: "#00BFFF", key: 3, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#FFD700", key: 0, y: 0},
        {value: 7, height: 70, backgroundColor: "#FFD700", key: 2, y: -50},
        {value: 12, height: 120, backgroundColor: "#008000", key: 1, y: 0},
        {value: 5, height: 50, backgroundColor: "#00BFFF", key: 3, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#FFD700", key: 0, y: 0},
        {value: 7, height: 70, backgroundColor: "#FFD700", key: 2, y: -50},
        {value: 12, height: 120, backgroundColor: "#008000", key: 1, y: 0},
        {value: 5, height: 50, backgroundColor: "#00BFFF", key: 3, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#FFD700", key: 0, y: 0},
        {value: 7, height: 70, backgroundColor: "#FFD700", key: 2, y: -50},
        {value: 12, height: 120, backgroundColor: "#008000", key: 1, y: 0},
        {value: 5, height: 50, backgroundColor: "#00BFFF", key: 3, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#008000", key: 0, y: 0},
        {value: 7, height: 70, backgroundColor: "#008000", key: 2, y: 0},
        {value: 12, height: 120, backgroundColor: "#008000", key: 1, y: 0},
        {value: 5, height: 50, backgroundColor: "#00BFFF", key: 3, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#008000", key: 0, y: 0},
        {value: 7, height: 70, backgroundColor: "#008000", key: 2, y: 0},
        {value: 12, height: 120, backgroundColor: "#FFD700", key: 1, y: 0},
        {value: 5, height: 50, backgroundColor: "#FFD700", key: 3, y: -50},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#008000", key: 0, y: 0},
        {value: 7, height: 70, backgroundColor: "#008000", key: 2, y: 0},
        {value: 5, height: 50, backgroundColor: "#FFD700", key: 3, y: -50},
        {value: 12, height: 120, backgroundColor: "#008000", key: 1, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#008000", key: 0, y: 0},
        {value: 7, height: 70, backgroundColor: "#FFD700", key: 2, y: 0},
        {value: 5, height: 50, backgroundColor: "#FFD700", key: 3, y: -50},
        {value: 12, height: 120, backgroundColor: "#008000", key: 1, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#008000", key: 0, y: 0},
        {value: 5, height: 50, backgroundColor: "#FFD700", key: 3, y: -50},
        {value: 7, height: 70, backgroundColor: "#008000", key: 2, y: 0},
        {value: 12, height: 120, backgroundColor: "#008000", key: 1, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#FFD700", key: 0, y: 0},
        {value: 5, height: 50, backgroundColor: "#FFD700", key: 3, y: -50},
        {value: 7, height: 70, backgroundColor: "#008000", key: 2, y: 0},
        {value: 12, height: 120, backgroundColor: "#008000", key: 1, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#008000", key: 0, y: 0},
        {value: 5, height: 50, backgroundColor: "#008000", key: 3, y: 0},
        {value: 7, height: 70, backgroundColor: "#008000", key: 2, y: 0},
        {value: 12, height: 120, backgroundColor: "#008000", key: 1, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#008000", key: 0, y: 0},
        {value: 5, height: 50, backgroundColor: "#008000", key: 3, y: 0},
        {value: 7, height: 70, backgroundColor: "#008000", key: 2, y: 0},
        {value: 12, height: 120, backgroundColor: "#FFD700", key: 1, y: 0},
        {value: 10, height: 100, backgroundColor: "#FFD700", key: 4, y: -50},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#008000", key: 0, y: 0},
        {value: 5, height: 50, backgroundColor: "#008000", key: 3, y: 0},
        {value: 7, height: 70, backgroundColor: "#008000", key: 2, y: 0},
        {value: 10, height: 100, backgroundColor: "#FFD700", key: 4, y: -50},
        {value: 12, height: 120, backgroundColor: "#008000", key: 1, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#008000", key: 0, y: 0},
        {value: 5, height: 50, backgroundColor: "#008000", key: 3, y: 0},
        {value: 7, height: 70, backgroundColor: "#FFD700", key: 2, y: 0},
        {value: 10, height: 100, backgroundColor: "#FFD700", key: 4, y: -50},
        {value: 12, height: 120, backgroundColor: "#008000", key: 1, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#008000", key: 0, y: 0},
        {value: 5, height: 50, backgroundColor: "#008000", key: 3, y: 0},
        {value: 7, height: 70, backgroundColor: "#008000", key: 2, y: 0},
        {value: 10, height: 100, backgroundColor: "#008000", key: 4, y: 0},
        {value: 12, height: 120, backgroundColor: "#008000", key: 1, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#008000", key: 0, y: 0},
        {value: 5, height: 50, backgroundColor: "#008000", key: 3, y: 0},
        {value: 7, height: 70, backgroundColor: "#008000", key: 2, y: 0},
        {value: 10, height: 100, backgroundColor: "#008000", key: 4, y: 0},
        {value: 12, height: 120, backgroundColor: "#FFD700", key: 1, y: 0},
        {value: 8, height: 80, backgroundColor: "#FFD700", key: 5, y: -50}
    ],[
        {value: 3, height: 30, backgroundColor: "#008000", key: 0, y: 0},
        {value: 5, height: 50, backgroundColor: "#008000", key: 3, y: 0},
        {value: 7, height: 70, backgroundColor: "#008000", key: 2, y: 0},
        {value: 10, height: 100, backgroundColor: "#008000", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#FFD700", key: 5, y: -50},
        {value: 12, height: 120, backgroundColor: "#008000", key: 1, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#008000", key: 0, y: 0},
        {value: 5, height: 50, backgroundColor: "#008000", key: 3, y: 0},
        {value: 7, height: 70, backgroundColor: "#008000", key: 2, y: 0},
        {value: 10, height: 100, backgroundColor: "#FFD700", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#FFD700", key: 5, y: -50},
        {value: 12, height: 120, backgroundColor: "#008000", key: 1, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#008000", key: 0, y: 0},
        {value: 5, height: 50, backgroundColor: "#008000", key: 3, y: 0},
        {value: 7, height: 70, backgroundColor: "#008000", key: 2, y: 0},
        {value: 8, height: 80, backgroundColor: "#FFD700", key: 5, y: -50},
        {value: 10, height: 100, backgroundColor: "#008000", key: 4, y: 0},
        {value: 12, height: 120, backgroundColor: "#008000", key: 1, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#008000", key: 0, y: 0},
        {value: 5, height: 50, backgroundColor: "#008000", key: 3, y: 0},
        {value: 7, height: 70, backgroundColor: "#FFD700", key: 2, y: 0},
        {value: 8, height: 80, backgroundColor: "#FFD700", key: 5, y: -50},
        {value: 10, height: 100, backgroundColor: "#008000", key: 4, y: 0},
        {value: 12, height: 120, backgroundColor: "#008000", key: 1, y: 0}
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

const description = ["Insertion sort is an algorithm used to sort a sequence of numbers", 
                     "To begin, the leftmost number is considered fully sorted",
                     "Mark the first element as sorted", 
                     "Next, from the remaining numbers the leftmost number is taken out",
                     "and compared to the already sorted number to its left",
                     "Compare 12 and 3",
                     "If the already sorted number is larger, the two numbers swap", 
                     "In this case, 3 is smaller, so no insertion", 
                     "3 is now considered fully sorted",
                     "As before, the leftmost number from the remaining numbers is taken out",
                     "and compared to the numbers to its left",
                     "Compare 7 and 12", 
                     "7 is less than 12, so the numbers were swapped", 
                     "Compare 7 and 3", 
                     "3 is less than 7.",
                     "A smaller number has appeared, proper position found, so 7 stops moving and inserting", 
                     "The 7 is now considered fully sorted",
                     "Compare 5 and 12", 
                     "5 is less than 12, so the numbers were swapped", 
                     "Compare 5 and 7", 
                     "5 is less than 7, so the numbers were swapped", 
                     "Compare 5 and 3", 
                     "A smaller number has appeared, proper position found, so 5 stops moving and inserting", 
                     "Compare 10 and 12", 
                     "10 is less than 12, so the numbers were swapped", 
                     "Compare 10 and 7", 
                     "A smaller number has appeared, proper position found, so 10 stops moving and inserting", 
                     "Compare 8 and 12", 
                     "8 is less than 12, so the numbers were swapped", 
                     "Compare 8 and 10", 
                     "8 is less than 10, so the numbers were swapped", 
                     "Compare 8 and 7", 
                     "A smaller number has appeared, proper position found, so 8 stops moving and inserting", 
                     "All of the numbers are fully sorted. Insertion sort is finished."]

export default function IntroInsertion() {
    const props = { trace: trace, description: description };

    return <SwitchAnimation {...props} width={490} explanationBoxHeight={6}/>;                    
}

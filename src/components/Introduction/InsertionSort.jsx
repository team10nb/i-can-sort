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

const description = ["Unsorted Array", 
                     "Mark the first element as sorted", 
                     " Compare 12 and 3", 
                     "Already sorted, no insertion", 
                     " Compare 7 and12", 
                     "7 is less than 12, go on", 
                     " Compare 7 and 3", 
                     "Proper position found, insert", 
                     " Compare 5 and12", 
                     "5 is less than 12, go on", 
                     " Compare 5 and7", 
                     "5 is less than 7, go on", 
                     " Compare 5 and 3", 
                     "Proper position found, insert", 
                     " Compare 10 and12", 
                     "10 is less than 12, go on", 
                     " Compare 10 and 7", 
                     "Proper position found, insert", 
                     " Compare 8 and12", 
                     "8 is less than 12, go on", 
                     " Compare 8 and10", 
                     "8 is less than 10, go on", 
                     " Compare 8 and 7", 
                     "Proper position found, insert", 
                     "Insertion sort is finished, all sorted"]

export default function IntroInsertion() {
    const props = { trace: trace, description: description };

    return <SwitchAnimation {...props} width={600}/>;                    
}
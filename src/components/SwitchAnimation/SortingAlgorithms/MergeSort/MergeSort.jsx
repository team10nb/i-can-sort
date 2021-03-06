import React from "react";
import { COLORS, patch, hardcopy, changeColor, swap } from "../Patch/Patch";
import { random } from "lodash";

let mergeColors = COLORS.mergeColors;

const MergeSort = (arr) => {
    let colorCount = {num: 0};
    
    let patched = patch(arr);

    // Visualize: Initial State
    let description = ["Unsorted Array"];
    let trace = [hardcopy(patched)];

    // Sorting...
    recursiveMergeSort(patched, 0, arr.length, description, trace, colorCount);

    // Visualize: Final state
    patched.forEach(element => {
        element.backgroundColor=COLORS.finished;
    });
    trace.push(hardcopy(patched));
    description.push("Merge sort is finished, all sorted");

    return { trace: trace, description: description };
};

function recursiveMergeSort(patched, start, end, description, trace, colorCount) {
    let mergeColors = COLORS.mergeColors;
    const length = end - start;
    const midPoint = Math.floor((start + end) / 2);

    if (length < 2) {
        // patched = []
        if (length < 1) return patched;
        // patched = [x]
        else {
            patched[start].isPivot = false;
            trace.push(hardcopy(patched));
            description.push("Only one number left, already sorted");
            return [patched[start]];
        }
    } else if(length === 2) {

        patched[start+1].isPivot = false;
        trace.push(hardcopy(patched));
        description.push("Divide " + patched[start].value + " and " + patched[start+1].value + " into two parts");
        
        for (let i = start; i < start+2; i++) {
            patched[i].y = -20;
            patched[i].isPivot = false;
        }
        trace.push(hardcopy(patched));
        description.push("Only one number left for each part, merge may begin");
        

        patched[start].isPivot = false;
        merge(patched, start, midPoint, end, description, trace);

        
        trace.push(hardcopy(patched));
        description.push("Merge " + patched[start].value + " and " + patched[start+1].value + " into sorted");
        
        for (let i = start; i < start+2; i++) {
            patched[i].y = 0;
        }
        return;
    }

    for (let i = start; i < end; i++) {
        patched[i].isPivot = true;
        
    }
    trace.push(hardcopy(patched));
    description.push("Divide these numbers into two parts");
    

    //  Visualize: Start sorting LEFT section
    for (let i = start; i < midPoint; i++) {
        changeColor(patched, i, mergeColors[colorCount.num]);
        patched[i].x = patched[i].x - 10;
    }
    for (let i = midPoint; i < end; i++) {
        patched[i].isPivot = false;
        patched[i].x = patched[i].x + 10;
    }
    colorCount.num = colorCount.num + 1;
    trace.push(hardcopy(patched));
    description.push("Let's process the left part first");
    recursiveMergeSort(patched, start, midPoint, description, trace, colorCount);

    // Visualize: Second Half
    // Visualize: Start sorting RIGHT section, Move chosen pivot to start
    for (let i = midPoint; i < end; i++) {
        patched[i].isPivot = true;
    }
    trace.push(hardcopy(patched));
    description.push("Ok, let's see the right part");
    recursiveMergeSort(patched, midPoint, end, description, trace, colorCount);

    for (let i = start; i < end; i++) {
        patched[i].y = -20;
    }
    trace.push(hardcopy(patched));
    description.push("Now left and right parts are sorted seperatly, merge them");

    let partColor = patched[start].backgroundColor;
    merge(patched, start, midPoint, end, description, trace);
    
    for (let i = start; i < end; i++) {
        patched[i].backgroundColor = partColor;
        patched[i].isPivot = true;
        patched[i].x = -10;
    }
    trace.push(hardcopy(patched));
    description.push("Now " + patched[start].value + " to " + patched[end-1].value + " is merged and sorted");
    for (let i = start; i < end; i++) {
        patched[i].isPivot = false;
        patched[i].y = 0;
    }
}


function merge(patched, start, mid, end, description, trace) {
    
    const mergingPart = hardcopy(patched).slice(start, end);
    mergingPart.sort((a,b)=>a.value - b.value);
    for (let i = start; i < end; i++) {
        patched[i] = mergingPart[i-start];
    }
    
    
    
    // const left = hardcopy(patched).slice(start, mid);
    // console.log(left)
    
    // const right = hardcopy(patched).slice(mid, end);
    // console.log(right)
    // let i = 0;
    // let j = 0;
    // let k = 0;
    // while (i < left.length && j < right.length) {
    //     if (left[i].value <= right[j].value) {
    //         trace.push(hardcopy(patched));
    //         description.push("Ok, let's see the right part");
    //         swap(patched, k + start, start+i);
    //         // patched[k + start] = left[i];
    //         i++;
    //         trace.push(hardcopy(patched));
    //         description.push("Ok, let's see the right part");

    //     } else {
    //         trace.push(hardcopy(patched));
    //         description.push("Ok, let's see the right part");

    //         swap(patched, k + start, mid+j);
    //         j++;
    //         trace.push(hardcopy(patched));
    //         description.push("Ok, let's see the right part");

    //     }
    //     k++;
    // }
    // while (i < left.length) {
    //     trace.push(hardcopy(patched));
    //     description.push("Ok, let's see the right part");

    //     swap(patched, k + start, start+i);
    //     i++;
    //     k++;
    //     trace.push(hardcopy(patched));
    //     description.push("Ok, let's see the right part");

    // }
    // while (j < right.length) {
    //     trace.push(hardcopy(patched));
    //     description.push("Ok, let's see the right part");

    //     swap(patched, k + start, mid+j);
    //     j++;
    //     k++;
    //     trace.push(hardcopy(patched));
    //     description.push("Ok, let's see the right part");

    // }


    console.log(patched)
}

    




export default MergeSort;

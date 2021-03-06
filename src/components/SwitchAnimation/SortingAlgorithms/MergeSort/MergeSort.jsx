import React from "react";
import { COLORS, patch, hardcopy, changeColor, swap } from "../Patch/Patch";

const MergeSort = (arr) => {
    // To count the number of merge colors that has been used
    let colorCount = { num: 0 };
    // Process the to-be-sorted array
    let patched = patch(arr);

    // Visualize: Initial State
    let description = ["Unsorted Array"];
    let trace = [hardcopy(patched)];

    // Sorting...
    recursiveMergeSort(patched, 0, arr.length, description, trace, colorCount);

    // Visualize: Final state
    patched.forEach((element) => {
        element.backgroundColor = COLORS.finished;
    });
    trace.push(hardcopy(patched));
    description.push("Merge sort is finished, all sorted");

    return { trace: trace, description: description };
};

// main function to recursively sort an array
function recursiveMergeSort(
    patched,
    start,
    end,
    description,
    trace,
    colorCount
) {
    // read mergeColors from COLORS
    let mergeColors = COLORS.mergeColors;
    const length = end - start;
    const midPoint = Math.floor((start + end) / 2);

    // handle single or no element
    if (length < 2) {
        // length is 0 means: patched = []
        if (length < 1) return patched;
        // length is 1 means: patched = [x]
        else {
            // delete the pivot under it
            patched[start].isPivot = false;

            // Visualize: only one element left
            trace.push(hardcopy(patched));
            description.push("Only one number left, already sorted");
            
            return [patched[start]];
        }
        // to make the process clearer, animate length == 2 seperately
    } else if (length === 2) {
        patched[start + 1].isPivot = false;
        changeColor(patched, start, mergeColors[colorCount.num]);
        colorCount.num = colorCount.num + 1;

        // Visualize: divide two numbers into two parts
        trace.push(hardcopy(patched));
        description.push(
            "Divide " +
                patched[start].value +
                " and " +
                patched[start + 1].value +
                " into two parts"
        );

        for (let i = start; i < start + 2; i++) {
            patched[i].y = -20;
            patched[i].isPivot = false;
        }
        // Visualize: lift them up to prepare for merge
        trace.push(hardcopy(patched));
        description.push("Only one number left for each part, merge may begin");

        patched[start].isPivot = false;
        changeColor(patched, start + 1, mergeColors[colorCount.num - 1]);
        merge(patched, start, midPoint, end, description, trace);

        // Visualize: merge two numbers
        trace.push(hardcopy(patched));
        description.push(
            "Merge " +
                patched[start].value +
                " and " +
                patched[start + 1].value +
                " into sorted"
        );

        // back to the ground
        for (let i = start; i < start + 2; i++) {
            patched[i].y = 0;
        }
        return;
    }

    for (let i = start; i < end; i++) {
        patched[i].isPivot = true;
    }
    // Visualize: add pivot to indicate the objects that are being divided
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
    recursiveMergeSort(
        patched,
        start,
        midPoint,
        description,
        trace,
        colorCount
    );

    // Visualize: Start sorting RIGHT section
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
    description.push(
        "Now left and right parts are sorted seperatly, merge them"
    );

    let partColor = patched[start].backgroundColor;
    merge(patched, start, midPoint, end, description, trace);

    for (let i = start; i < end; i++) {
        patched[i].backgroundColor = partColor;
        patched[i].isPivot = true;
        patched[i].x = -10;
    }
    trace.push(hardcopy(patched));
    description.push(
        "Now " +
            patched[start].value +
            " to " +
            patched[end - 1].value +
            " is merged and sorted"
    );
    for (let i = start; i < end; i++) {
        patched[i].isPivot = false;
        patched[i].y = 0;
    }
}

// function to merge two parts
function merge(patched, start, mid, end, description, trace) {
    const mergingPart = hardcopy(patched).slice(start, end);
    mergingPart.sort((a, b) => a.value - b.value);
    for (let i = start; i < end; i++) {
        patched[i] = mergingPart[i - start];
    }
}

export default MergeSort;

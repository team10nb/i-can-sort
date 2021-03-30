import React from "react";
import { COLORS, patch, hardcopy, changeColor, swap } from "../Patch/Patch";
import { random } from "lodash";

const QuickSort = (arr) => {
    let patched = patch(arr);

    // Visualize: Initial State
    let description = ["Unsorted Array"];
    let trace = [hardcopy(patched)];
    let blockNums = [1];

    // Sorting...
    recursiveQuickSort(patched, 0, arr.length - 1, description, trace);

    // Visualize: Final state
    trace.push(hardcopy(patched));
    description.push("Quick sort is finished, all sorted");
    blockNums.push(5);

    return { trace: trace, description: description, blockNums:blockNums };

    function recursiveQuickSort(patched, start, end, description, trace) {
        // First check how many elements left
        if (start >= end) {
            // There is only one element left when equal
            if (start === end) {
                // Visualize: Mark only item as sorted
                changeColor(patched, start, COLORS.finished);
                trace.push(hardcopy(patched));
                description.push("The only item is certainly sorted");
                blockNums.push(5);
            } // There is no element when start exceeds end
            else {
                trace.push(hardcopy(patched));
                description.push("Fine, all sorted");
                blockNums.push(5);
            }
            return null;
        }
    
        // Choose a pivot randomly
        let pivot = choosePivot(start, end);
    
        // Visualize: Mark the chosen pivot
        changeColor(patched, pivot, COLORS.pivot);
        patched[pivot].isPivot = true;
        trace.push(hardcopy(patched));
        description.push("Randomly choose a pivot");
        blockNums.push(2);
    
        // Move chosen pivot to start
        swap(patched, start, pivot);
    
        // Visualize: Move chosen pivot to start
        trace.push(hardcopy(patched));
        description.push("Move the chosen pivot to the start of this section");
        blockNums.push(2);
    
        // Partition steps, move smaller ones to the left, return value is the position of pivot after partition
        pivot = partition(patched, start, end, description, trace);
    
        // Recursive steps...
    
        // Visualize: Start sorting LEFT section, Move chosen pivot to start
        trace.push(hardcopy(patched));
        description.push("Ok, let's see the left section of this pivot");
        blockNums.push(3);
        recursiveQuickSort(patched, start, pivot - 1, description, trace);
    
        // Visualize: Start sorting RIGHT section, Move chosen pivot to start
        trace.push(hardcopy(patched));
        description.push("Ok, let's see the right section of this pivot");
        blockNums.push(4);

        recursiveQuickSort(patched, pivot + 1, end, description, trace);
    }
    
    // Partition, to make smaller ones to be at the left side of pivot
    function partition(patched, start, end, description, trace) {
        let i = start + 1;
        let j = start + 1;
    
        // Process one by one
        while (j <= end) {
    
            // Visualize: Compare item j with pivot
            changeColor(patched, j, COLORS.comparing);
            changeColor(patched, start, COLORS.comparing);
            trace.push(hardcopy(patched));
            description.push(
                "Compare " +
                    patched[j].value +
                    " with pivot " +
                    patched[start].value
            );
            blockNums.push(2);
    
            if (patched[j].value < patched[start].value) {
                // Visualize: Mark item that is less than pivot
                changeColor(patched, j, COLORS.left);
                changeColor(patched, start, COLORS.pivot);
                trace.push(hardcopy(patched));
                description.push(
                    "Mark " +
                        patched[j].value +
                        " as less than pivot " +
                        patched[start].value
                );
                blockNums.push(2);
    
                //Move item to lesser list
                swap(patched, i, j);
    
                // Visualize: Move item to lesser list
                trace.push(hardcopy(patched));
                description.push(
                    "Move the smaller " + patched[i].value + " to left side"
                );
                blockNums.push(2);
                i += 1;
            } else {
                changeColor(patched, j, COLORS.original);
            }
            j += 1;
        }
    
        changeColor(patched, start, COLORS.pivot);
        // Visualize: Mark center position
        let pivot = patched.splice(start, 1);
        patched.splice(i - 1, 0, pivot[0]);
        trace.push(hardcopy(patched));
        description.push("All compared, move pivot to the right of smaller ones");
        blockNums.push(2);
    
        changeColor(patched, i - 1, COLORS.finished);
        for (let j = start; j < i - 1; j++) {
            changeColor(patched, j, COLORS.original);
        }
        // Visualize: Now pivot is at the right position
        trace.push(hardcopy(patched));
        patched[i - 1].isPivot = false;
        description.push("Now pivot is at the correct position");
        blockNums.push(2);
    
        // return position of pivot
        return i - 1;
    }
    
    // Randomly choose a pivot
    function choosePivot(start, end) {
        // randomly pick an element between start and end;
        return random(start, end);
    }
};



export default QuickSort;

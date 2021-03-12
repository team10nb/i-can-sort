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
    blockNums.push(9);

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
                blockNums.push(1);
            } // There is no element when start exceeds end
            else {
                trace.push(hardcopy(patched));
                description.push("Fine, all sorted");
                blockNums.push(9);
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
        blockNums.push(1);
    
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
        blockNums.push(1);

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
            blockNums.push(1);
    
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
                blockNums.push(1);
    
                //Move item to lesser list
                swap(patched, i, j);
    
                // Visualize: Move item to lesser list
                trace.push(hardcopy(patched));
                description.push(
                    "Move the smaller " + patched[i].value + " to left side"
                );
                blockNums.push(1);
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
        blockNums.push(1);
    
        changeColor(patched, i - 1, COLORS.finished);
        for (let j = start; j < i - 1; j++) {
            changeColor(patched, j, COLORS.original);
        }
        // Visualize: Now pivot is at the right position
        trace.push(hardcopy(patched));
        patched[i - 1].isPivot = false;
        description.push("Now pivot is at the correct position");
        blockNums.push(1);
    
        // return position of pivot
        return i - 1;
    }
    
    // Randomly choose a pivot
    function choosePivot(start, end) {
        // randomly pick an element between start and end;
        return random(start, end);
    }
};

// Choose pivot and partition


export const QuickSortDesc = {
    title: "Quick Sort",
    description: (
        <div>
            <p>
                <a
                    href='https://en.wikipedia.org/wiki/Quicksort'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Quick Sort
                </a>{" "}
                is an efficient, in-place sorting algorith that in practice is
                faster than MergeSort and HeapSort. However, it is not a stable
                sorting algorithm, meaning that the relative positioning of
                equal sort items is not preserved.Quicksort is a divide and
                conquer algorithm. Quicksort first divides a large array into
                two smaller sub-arrays: the low elements and the high elements.
                Quicksort can then recursively sort the sub-arrays. The steps
                are:
            </p>
            <ol>
                <li>
                    Pick an element, called a pivot, from the array. This is
                    usually done at random.
                </li>
                <li>Move pivot element to the start of the array.</li>
                <li>
                    <em>Partitioning:</em> reorder the array so that all
                    elements with values less than the pivot come before the
                    pivot, while all elements with values greater than the pivot
                    come after it (equal values can go either way). After this
                    partitioning, the pivot is in its final position. This is
                    called the <em>partition</em> operation.
                </li>
                <li>
                    Recursively apply the above steps to the sub-array of
                    elements with smaller values and separately to the sub-array
                    of elements with greater values.
                </li>
            </ol>
            <p>
                The base case of the recursion is an array of size zero or one,
                which are sorted by definition.
            </p>
        </div>
    ),
    worstCase: (
        <span>
            O(<em>n</em>
            <sup>2</sup>)
        </span>
    ),
    avgCase: (
        <span>
            O(<em>n</em>log<em>n</em>)
        </span>
    ),
    bestCase: (
        <span>
            O(<em>n</em>log<em>n</em>)
        </span>
    ),
    space: (
        <span>
            O(log<em>n</em>)
        </span>
    ),
};

export default QuickSort;

/*
    Author: Yani Huang, Shiliang Chen
*/

import { COLORS, patch, hardcopy, changeColor } from "../Patch/Patch";

export default function SelectionSort(arr) {
    // initialize
    let patched = patch(arr);
    let description = ["Unsorted Array"];
    let trace = [hardcopy(patched)];
    let blockNums = [1];

    let i = 0;
    let j = 0;
    let z = 0;
    let temp;
    let minIndex;
    let len = patched.length;

    for (i = 0; i < len; i++) {
        minIndex = i;

        if (i < len - 1) {
            changeColor(patched, minIndex, COLORS.current);
            trace.push(hardcopy(patched));
            description.push(
                "Suppose " + patched[minIndex].value + " is the minimum"
            );
            blockNums.push(3);
        }

        trace.push(hardcopy(patched));
        description.push(
            "Compare " +
            patched[minIndex].value+
            " each of the unsorted elements"
        );
        blockNums.push(4);


        for (j = i + 1; j < len; j++) {
            // Traverse to compare
            changeColor(patched, j, COLORS.comparing);
            trace.push(hardcopy(patched));
            description.push(
                "Compare " +
                    patched[minIndex].value +
                    " and " +
                    patched[j].value
            );
            blockNums.push(5);

            // to find the minimum number
            if (patched[j].value < patched[minIndex].value) {
                // Visualize: min found
                changeColor(patched, minIndex, COLORS.original);
                minIndex = j; 
                // save the minimum
                z = minIndex;
                changeColor(patched, minIndex, COLORS.current);
                trace.push(hardcopy(patched));
                description.push(
                    patched[j].value +
                        " is smaller than " +
                        patched[z].value +
                        ". Set " +
                        patched[j].value +
                        " as new minimum"
                );
                blockNums.push(6);
            } else{
                // last element
                trace.push(hardcopy(patched));
                if (patched[j].value > patched[minIndex].value) {
                    description.push(
                        patched[j].value +
                            " is bigger than " +
                            patched[z].value +
                            ". Compare with next element "
                    );
                }else{
                    description.push(
                        patched[j].value +
                            " is equal to " +
                            patched[z].value +
                            ". Compare with next element "
                    );
                }
                changeColor(patched, j, COLORS.original);
                blockNums.push(7);
            } 
        }

        if (minIndex === i) {
            //explain no swap
            description.push(
                "As the minimum is the first unsorted element, no swap"
            );
            blockNums.push(9);
        } else {
            description.push(
                "Swap the minimum " +
                    patched[minIndex].value +
                    " and the first unsorted element " +
                    patched[i].value
            );
            blockNums.push(9);
        }

        temp = patched[i];
        patched[i] = patched[minIndex];
        patched[minIndex] = temp;

        changeColor(patched, i, COLORS.finished);
        trace.push(hardcopy(patched));
    }

    // Visualize: all sorted
    trace.push(hardcopy(patched));
    description.push("Selection Sort Finished");
    blockNums.push(11);

    return { trace: trace, description: description, blockNums:blockNums };
}

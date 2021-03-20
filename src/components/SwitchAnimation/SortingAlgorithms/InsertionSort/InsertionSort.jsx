import { COLORS, patch, hardcopy, changeColor } from "../Patch/Patch";

export default function InsertionSort(arr) {
    let patched = patch(arr);

    // Visualize: Initial State
    let description = ["Unsorted Array"];
    let trace = [hardcopy(patched)];
    let blockNums = [1];

    let i = 0;
    let j = 0;
    let k = {};
    let temp = {};
    let len = patched.length;

    // Visualize: Suppose the first one is sorted，comparing begins from the second one
    changeColor(patched, i, COLORS.finished);

    trace.push(hardcopy(patched));
    description.push("Mark the first element as sorted");
    blockNums.push(3);

    for (i = 1; i < len; i++) {
        // The comparing number
        k = patched[i];
        // Compare the key with the previous one
        j = i - 1;

        // If the ith is already the biggest, already sorted
        if (patched[j].value <= patched[j + 1].value) {
            // Visualize: Comparing
            changeColor(patched, i, COLORS.comparing);
            patched[i].y = -50;
            changeColor(patched, j, COLORS.comparing);
            trace.push(hardcopy(patched));
            description.push(
                " Compare " + patched[j + 1].value + " and " + patched[j].value
            );
            blockNums.push(5);

            // Visualize: Alreay sorted
            changeColor(patched, j, COLORS.finished);
            changeColor(patched, i, COLORS.finished);
            patched[j].y = 0;
            patched[i].y = 0;
            description.push("Already sorted, no insertion");
            trace.push(hardcopy(patched));
            blockNums.push(8);
        }

        while (j >= 0 && patched[j].value > k.value) {
            // Visualize: Compare and swap elements
            changeColor(patched, j + 1, COLORS.comparing);
            patched[j + 1].y = -50;
            changeColor(patched, j, COLORS.comparing);
            trace.push(hardcopy(patched));
            description.push(" Compare " + k.value + " and " + patched[j].value);
            blockNums.push(5);

            temp = patched[j + 1];
            patched[j + 1] = patched[j];
            patched[j] = temp;

            // Visualize: Keep going on comparing
            changeColor(patched, j + 1, COLORS.finished);
            description.push(
                patched[j].value +
                    " is less than " +
                    patched[j + 1].value +
                    ", go on"
            );
            trace.push(hardcopy(patched));
            blockNums.push(6);

            // Visualize: Compare the sorted elements which are ignoerd by while loop
            if (j >= 1 && patched[j - 1].value <= patched[j].value) {
                // 比较与前一个
                changeColor(patched, j, COLORS.comparing);
                patched[j].y = -50;
                changeColor(patched, j - 1, COLORS.comparing);
                trace.push(hardcopy(patched));
                description.push(
                    " Compare " +
                        patched[j].value +
                        " and " +
                        patched[j - 1].value
                );
                blockNums.push(5);

                // Visualize: Find the proper position, insert
                changeColor(patched, j - 1, COLORS.finished);
                changeColor(patched, j, COLORS.finished);
                patched[j].y = 0;
                description.push("Proper position found, insert");
                trace.push(hardcopy(patched));
                blockNums.push(9);

            } else if (j === 0) {
                // Visualize: If the element is the first one
                changeColor(patched, j, COLORS.finished);
                patched[j].y = 0;
                description.push("Proper position found, insert");
                trace.push(hardcopy(patched));
                blockNums.push(9);
            }
            j--;
        }
    }

    // Visualize: Final state
    description.push("Insertion sort is finished, all sorted");
    trace.push(hardcopy(patched));
    blockNums.push(11);

    return { trace: trace, description: description, blockNums: blockNums };
}

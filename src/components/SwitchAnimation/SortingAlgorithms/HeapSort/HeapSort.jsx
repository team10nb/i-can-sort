import {
    COLORS,
    patch,
    hardcopy,
    changeColor,
    swap,
    changeY,
} from "../Patch/Patch";

export default function HeapSort(arr) {
    let patched = patch(arr);

    // Visualize: Initial State
    let description = ["Unsorted Array"];
    let trace = [hardcopy(patched)];
    let blockNums = [1];

    // Adjust heap, make child always smaller than parent
    function maxHeapify(patched, index, heapSize) {
        var iMax, iLeft, iRight;

        while (true) {
            iMax = index;
            iLeft = 2 * index + 1;
            iRight = 2 * (index + 1);

            if (
                iLeft < heapSize &&
                patched[index].value < patched[iLeft].value
            ) {
                iMax = iLeft;
            }

            if (
                iRight < heapSize &&
                patched[iMax].value < patched[iRight].value
            ) {
                iMax = iRight;
            }

            if (iMax !== index) {
                swap(patched, iMax, index);
                index = iMax;
            } else {
                break;
            }
        }
    }

    // max element is in the root
    function buildMaxHeap(patched) {
        var i,
            iParent = Math.floor(patched.length / 2) - 1;

        for (i = iParent; i >= 0; i--) {
            maxHeapify(patched, i, patched.length);
        }
    }

    // remove root and adjust heap
    function sort(patched) {
        buildMaxHeap(patched);

        for (var i = patched.length - 1; i > 0; i--) {
            maxHeapify(patched, 0, i);

            // be a heap
            for (var j = 0; j < i + 1; j++) {
                changeColor(patched, j, COLORS.current);
                changeY(patched, j, -50);
            }

            description.push("A max heap is built, heap size is: " + j);
            trace.push(hardcopy(patched));
            blockNums.push(2);

            // restore colour
            for (j = 0; j < i + 1; j++) {
                changeColor(patched, j, COLORS.original);
                changeY(patched, j, 0);
            }

            changeColor(patched, 0, COLORS.finished);
            description.push(
                "Top element " +
                    patched[0].value +
                    " is the largest in the heap"
            );
            trace.push(hardcopy(patched));
            blockNums.push(3);

            //swap the first to the end of array which is the max
            swap(patched, 0, i);

            description.push(
                "Take " + patched[i].value + " out of the heap"
            );
            trace.push(hardcopy(patched));
            blockNums.push(3);

            maxHeapify(patched, 0, i);
        }

        changeColor(patched, 0, COLORS.finished);
        description.push(
            "The last element " +
                patched[0].value +
                " is already sorted. Heap sort finished."
        );
        trace.push(hardcopy(patched));
        blockNums.push(5);

        return { trace: trace, description: description, blockNums:blockNums };
    }

    return sort(patched);
}

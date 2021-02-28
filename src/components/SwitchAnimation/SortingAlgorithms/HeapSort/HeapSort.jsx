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

    //将堆的末端子节点作调整，使得子节点永远小于父节点
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
                //compare bars to build max heap
                changeColor(patched, iMax, COLORS.comparing);
                changeColor(patched, index, COLORS.comparing);
                description.push(
                    "Compare " +
                        patched[index].value +
                        " and " +
                        patched[iMax].value
                );
                trace.push(hardcopy(patched));

                description.push(
                    patched[iMax].value +
                        " is bigger than " +
                        patched[index].value
                );
                trace.push(hardcopy(patched));

                //swapping
                swap(patched, iMax, index);
                description.push(
                    "Swap " +
                        patched[iMax].value +
                        " and " +
                        patched[index].value
                );
                trace.push(hardcopy(patched));

                //恢复对比中bar的颜色
                changeColor(patched, iMax, COLORS.original);
                changeColor(patched, index, COLORS.original);

                index = iMax;
            } else {
                break;
            }
        }
    }

    //将堆所有数据重新排序，使其成为最大堆
    //P.S 最大堆中的最大元素值出现在根结点
    function buildMaxHeap(patched) {
        var i,
            iParent = Math.floor(patched.length / 2) - 1;

        for (i = iParent; i >= 0; i--) {
            maxHeapify(patched, i, patched.length);
        }
    }

    //移除位在第一个数据的根节点，并做最大堆调整的递归运算
    function sort(patched) {
        buildMaxHeap(patched);

        for (var i = patched.length - 1; i > 0; i--) {
            maxHeapify(patched, 0, i);

            //成堆
            for (var j = 0; j < i + 1; j++) {
                changeColor(patched, j, COLORS.current);
                changeY(patched, j, -50);
            }

            description.push("A max heap is built, heap size is: " + j);
            trace.push(hardcopy(patched));

            //恢复堆颜色
            for (var j = 0; j < i + 1; j++) {
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

            //swap数据的第一个节点到当前排序位置
            swap(patched, 0, i);

            description.push(
                "Take " + patched[i].value + " out of the heap"
            );
            trace.push(hardcopy(patched));

            maxHeapify(patched, 0, i);
        }

        changeColor(patched, 0, COLORS.finished);
        description.push(
            "The last element " +
                patched[0].value +
                " is already sorted. Heap sort finished."
        );
        trace.push(hardcopy(patched));

        return { trace: trace, description: description };
    }

    return sort(patched);
}

import { COLORS, patch, hardcopy, changeColor } from "../Patch/Patch";

// TODO: 把color变成一个{}，不要让他裸露
// TODO：把changeColor变成一个开关
export default function SelectionSort(arr) {
    let patched = patch(arr);
    let description = ["Unsorted Array"];
    let trace = [hardcopy(patched)];
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
        }

        for (j = i + 1; j < len; j++) {
            // 遍历数组对比大小
            changeColor(patched, j, COLORS.comparing);
            trace.push(hardcopy(patched));
            description.push(
                "Compare " +
                    patched[minIndex].value +
                    " and " +
                    patched[j].value
            );

            // 遍历数小于当前最小数则最小数变current，原最小数变origin
            if (patched[j].value < patched[minIndex].value) {
                // 寻找最小的数
                changeColor(patched, minIndex, COLORS.original);
                z = minIndex;
                minIndex = j; // 将最小数的索引保存
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
            } else if (patched[j].value > patched[minIndex].value) {
                changeColor(patched, j, COLORS.original);
            } else {
                changeColor(patched, j, COLORS.original);
            }
        }

        if (minIndex === i) {
            description.push(
                "As the minimum is the first unsorted element, no swap"
            );
        } else {
            description.push(
                "Swap the minimum " +
                    patched[minIndex].value +
                    " and the first unsorted element " +
                    patched[i].value
            );
        }

        temp = patched[i];
        patched[i] = patched[minIndex];
        patched[minIndex] = temp;

        changeColor(patched, i, COLORS.finished);
        trace.push(hardcopy(patched));
    }

    // 全都排好了
    trace.push(hardcopy(patched));
    description.push("Selection Sort Finished");

    return { trace: trace, description: description };
}

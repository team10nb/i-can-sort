import { COLORS, patch, hardcopy, changeColor } from "../Patch/Patch";

export default function BubbleSort(arr) {
    let patched = patch(arr);
    let description = ["Unsorted Array"];
    let trace = [hardcopy(patched)];
    let blockNums = [1];
    let i = 0;
    let j = 0;
    let temp;

    for (i = 0; i < patched.length; i++) {
        for (j = 0; j < patched.length - 1 - i; j++) {
            // 表明现在即将比较这两个，算一步
            if (j > 0) {
                changeColor(patched, j - 1, COLORS.original);
            }
            changeColor(patched, j, COLORS.comparing);
            changeColor(patched, j + 1, COLORS.comparing);
            trace.push(hardcopy(patched));
            description.push(
                "Compare " + patched[j].value + " and " + patched[j + 1].value
            );
            blockNums.push(4);

            // 比较完成，算一步
            if (patched[j].value > patched[j + 1].value) {
                description.push(
                    patched[j].value +
                        " is bigger than " +
                        patched[j + 1].value +
                        " , swap(" +
                        patched[j].value +
                        "," +
                        patched[j + 1].value +
                        ")"
                );
                blockNums.push(5);
                temp = patched[j + 1];
                patched[j + 1] = patched[j];
                patched[j] = temp;
            } else {
                description.push(
                    patched[j].value +
                        " is less than " +
                        patched[j + 1].value +
                        ", no operation"
                );
                blockNums.push(6);
            }
            trace.push(hardcopy(patched));
        }

        // 最后一个已经排好了。
        if (j > 0) {
            changeColor(patched, j - 1, COLORS.original);
        }
        changeColor(patched, j, COLORS.finished);
        trace.push(hardcopy(patched));
        description.push(patched[j].value + " is in the right place");
        blockNums.push(2);
    }

    // 全都排好了
    trace.push(hardcopy(patched));
    description.push("Bubble Sort Finished!");
    blockNums.push(9);

    return { trace: trace, description: description, blockNums: blockNums };
}

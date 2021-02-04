import changeColor from "../Patch/ChangeColor";
import patch from "../Patch/Patch";

let COLORS = {
    original: "#00BFFF", // 蓝
    comparing: "#FF0000", // 红
    finished: "#008000", // 绿
    current: "#000000", // 黑
    minimum: "#123456",
};

function hardcopy(patchedList) {
    return JSON.parse(JSON.stringify(patchedList));
}

export default function InssertionSort(arr) {

    let patched = patch(arr);
    let description = ["Unsorted Array"];
    let trace = [hardcopy(patched)];
    let i = 0;
    let j = 0;
    let k = {};
    let temp = {};
    let len = patched.length;

    // 默认第一个已经排序，从第二个开始和前面的对比并插入
    changeColor(patched, i, COLORS.finished);

    trace.push(hardcopy(patched));
    description.push("Mark the first element as sorted");

    for (i = 1; i < len; i++) {
        //保存当前要拿来对比插入的数
        k = patched[i];
        //将key和前一个数相比
        j = i - 1;

        // 第i个刚好比前面的都要大, 因此已经sorted了
        if (patched[j].value <= patched[j + 1].value) {

            // 比较
            changeColor(patched, i, COLORS.comparing);
            patched[i].y = -50;
            changeColor(patched, j, COLORS.comparing);
            trace.push(hardcopy(patched));
            description.push(
                " Compare " + patched[j + 1].value + " and " + patched[j].value
            );

            // 告知已经sorted了
            changeColor(patched, j, COLORS.finished);
            changeColor(patched, i, COLORS.finished);
            patched[j].y = 0;
            patched[i].y = 0;
            description.push("Already sorted, no insertion");
            trace.push(hardcopy(patched));
        }

        while (j >= 0 && patched[j].value > k.value) {
            // 比较并swap
            changeColor(patched, j + 1, COLORS.comparing);
            patched[j + 1].y = -50;
            changeColor(patched, j, COLORS.comparing);
            trace.push(hardcopy(patched));
            description.push(" Compare " + k.value + " and" + patched[j].value);

            temp = patched[j + 1];
            patched[j + 1] = patched[j];
            patched[j] = temp;

            // 继续向前比较
            changeColor(patched, j + 1, COLORS.finished);
            description.push(
                patched[j].value +
                    " is less than " +
                    patched[j + 1].value +
                    ", go on"
            );
            trace.push(hardcopy(patched));

            // 因为while循环会跳过已经sorted的两项, 所以这里用if补充进去
            if (j >= 1 && patched[j - 1].value <= patched[j].value) {

                // 比较与前一个
                changeColor(patched, j, COLORS.comparing);
                patched[j].y = -50;
                changeColor(patched, j - 1, COLORS.comparing);
                trace.push(hardcopy(patched));
                description.push(
                    " Compare " + patched[j].value + " and " + patched[j-1].value
                );

                // 找到了正确的位置, 插入并改变颜色至finish
                changeColor(patched, j - 1, COLORS.finished);
                changeColor(patched, j, COLORS.finished);
                patched[j].y = 0;
                description.push("Proper position found, insert");
                trace.push(hardcopy(patched));
            } else if (j == 0) {

                // 处于第一项的特殊情况, 是对前面if条件的补充, 因为这个时候j == 0, 已经在最前面了
                changeColor(patched, j, COLORS.finished);
                patched[j].y = 0;
                description.push("Proper position found, insert");
                trace.push(hardcopy(patched));
            }
            j--;
        }
    }

    // 完成了
    description.push("Insertion sort is finished, all sorted");
    trace.push(hardcopy(patched));

    return { trace: trace, description: description };
}

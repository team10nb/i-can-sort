import changeColor from "../Patch/ChangeColor";
import patch from "../Patch/Patch";

let COLORS = {
  original: "#00BFFF", // 蓝
  comparing: "#FFD700", // 黄
  finished: "#008000", // 绿
  current: "#FF0000", // 红
  minimum: "#123456",
}

function hardcopy(patchedList){
  return JSON.parse(
    JSON.stringify(patchedList)
  );
}

export default function SelectionSort(arr){
  return selectionSortHelper(patch(arr));
}

// TODO: 把color变成一个{}，不要让他裸露
// TODO：把changeColor变成一个开关
function selectionSortHelper(patched) {

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

    if(i < len - 1){
      changeColor(patched, minIndex, COLORS.current);
      trace.push(hardcopy(patched));
      description.push("Set the first unsorted element as the minimum");
    }

      for (j = i + 1; j < len; j++) {

        // 遍历数组对比大小
        changeColor(patched, j, COLORS.comparing);
        trace.push(hardcopy(patched));
        description.push("Compare " + patched[minIndex].value + " and " + patched[j].value);

        // 遍历数小于当前最小数则最小数变current，原最小数变origin
        if (patched[j].value < patched[minIndex].value) {     // 寻找最小的数
          changeColor(patched,minIndex, COLORS.original);
          z = minIndex;
          minIndex = j;                 // 将最小数的索引保存
          changeColor(patched, minIndex, COLORS.current);
          trace.push(hardcopy(patched));
          description.push(patched[j].value + " is less than current minimum value " + patched[z].value + ". Set " + patched[j].value  +" as new minimum");
        }else if (patched[j].value > patched[minIndex].value){
          changeColor(patched, j, COLORS.original);
        }else{
          changeColor(patched, j, COLORS.original);
        }
      }

    if(minIndex == i){
      description.push("As the minimum is the first unsorted element, no swap is necessary");
    }else{
      description.push("Swap the minimum " + patched[minIndex].value + " with the first unsorted element "+ patched[i].value);
    }

  temp = patched[i];
  patched[i] = patched[minIndex];
  patched[minIndex] = temp;

  changeColor(patched, i, COLORS.finished);
  trace.push(hardcopy(patched));

}

// 全都排好了
trace.push(hardcopy(patched));
description.push("Selection Sort Finished !");

return {trace: trace, description: description};
}
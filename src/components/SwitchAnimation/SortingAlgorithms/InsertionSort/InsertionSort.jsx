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

export default function InssertionSort(arr) {
  return InssertionSortHelper(patch(arr));
}

function InssertionSortHelper(patched){
  let description = ["Unsorted Array"];
  let trace = [hardcopy(patched)];
  let i = 0;
  let j = 0;
  let x = 0;
  let k = {};
  let temp = {};
  let len = patched.length;

  //默认第一个已经排序，从第二个开始和前面的对比并插入
  changeColor(patched, i, COLORS.finished);
  trace.push(hardcopy(patched));
  description.push("Mark first element as sorted");

  for (i = 1; i < len; i++) {
    //保存当前要拿来对比插入的数
    k = patched[i];
    //将key和前一个数相比
    j = i - 1;
    //前一个数大于key时，将大的数放在后面
    changeColor(patched,i,COLORS.comparing);
      while (j >= 0 && patched[j].value > k.value) {
        //将大的数后移一个位置（即j）
        //此处不需要交换位置，因为还未找到key数的真正位置，
        //还需要进行对比，直接覆盖就好，key已经保存了当前拿来插入的数
        
        temp = patched[j + 1]; 

        
        patched[j + 1] = patched[j];
        changeColor(patched, j+1, COLORS.finished);
        patched[j] = temp;
        // changeColor(changeColor(patched, j, COLORS.comparing));

        trace.push(hardcopy(patched));
        description.push(" ");
        //再和之前的一个数相比，直到比到第一个，即j < 0
        //j < 0不符合while条件，跳出循环
        j--;

        trace.push(hardcopy(patched));
        description.push(" ");
        
      }

      for(x = 0; x < i ; x++){
        changeColor(patched, x, COLORS.finished);
      }
        trace.push(hardcopy(patched));
        description.push(" ");
  }

    return {trace: trace, description: description};

//   let description = ["Unsorted Array"];
//   let trace = [hardcopy(patched)];
//   let len = patched.length  
//   let preIndex, current;

// for (let i = 1; i < len; i++) {
//     preIndex = i - 1;
//     current = patched[i];

//     while (preIndex >= 0 && current < patched[preIndex].value) {
//       patched[preIndex + 1] = patched[preIndex];
//       preIndex--;
//       trace.push(hardcopy(patched));
//       description.push("bye");
//     }

//     patched[preIndex + 1] = current;

//     trace.push(hardcopy(patched));
//     description.push("hi");
// }

// return {trace: trace, description: description};

}
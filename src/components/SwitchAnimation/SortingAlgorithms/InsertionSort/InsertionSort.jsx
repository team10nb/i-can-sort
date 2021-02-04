import changeColor from "../Patch/ChangeColor";
import patch from "../Patch/Patch";

let COLORS = {
  original: "#00BFFF", // 蓝
  comparing: "#FF0000", // 红
  finished: "#008000", // 绿
  current: "#000000", // 黑
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

    //判断是否进入过while
    let ifSwiched = false;
    //保存当前要拿来对比插入的数
    k = patched[i];
    //将key和前一个数相比
    j = i - 1; 
    //前一个数大于key时，将大的数放在后面
    
    changeColor(patched,i,COLORS.comparing);
    changeColor(patched,j,COLORS.comparing);
    trace.push(hardcopy(patched));
    description.push(" Compare " + patched[i].value + " and" + patched[j].value);
      while (j >= 0 && patched[j].value > k.value) {

        //区分第一次进入循环和第一次以上进入循环的变色规律。
        //若不是第一次进入循环则
        //1.按照循环的次数，将相应新的j（列表遍历的位置）和当前数（k）对比，新j变色为comparing
        //2.交换新j和k的位置（swap），实则应为将k交换的位置暂时提前一位。交换后j + 1 变色为finished
        if(j < i - 1){

          changeColor(patched,j,COLORS.comparing);
          trace.push(hardcopy(patched));
          description.push(" Compare " + k.value + " and " + patched[j].value);

          temp = patched[j + 1]; 
          patched[j + 1] = patched[j];
          patched[j] = temp;
  
          changeColor(patched, j+1, COLORS.finished);
          // changeColor(patched, j, COLORS.comparing);
          description.push(patched[j+1].value + " is bigger than " + patched[j].value + ", switch positions");
          trace.push(hardcopy(patched));

          
  
          //再和之前的一个数相比，直到比到第一个，即j < 0
          //j < 0不符合while条件，跳出循环
          j--;
         
          continue;
        }
        
        //将大的数后移一个位置（即j）
        //原本此处不需要交换位置，因为还未找到key数的真正位置，还需要进行对比，直接覆盖就好，key已经保存了当前拿来插入的数
        //但我们使用swap的方式表示insert的过程，所以交换位置
        temp = patched[j + 1]; 
        patched[j + 1] = patched[j];
        patched[j] = temp;

        changeColor(patched, i, COLORS.finished);
        description.push(patched[j].value + " is less than " + patched[ j+1 ].value + ", switch positions");
        trace.push(hardcopy(patched));

        ifSwiched = true;

        //再和之前的一个数相比，直到比到第一个，即j < 0
        //j < 0不符合while条件，跳出循环
        j--;
        
      }

      if(!ifSwiched){
        //若没有进入while（当前数比前一位大或与前一位相等），则：
        //1.将前面排序好的bar全部变色为已排序（finished）
        //2.将当前对比的i变色为finished
        //3.将下一个要对比的bar变色为comparing
        
        //根据遍历数（i），将前i个元素变为finish  
        for(x = 0; x < i ; x++){
          changeColor(patched, x, COLORS.finished);
        }

        changeColor(patched, i, COLORS.finished);
        changeColor(patched, i+1, COLORS.comparing);
        trace.push(hardcopy(patched));
        description.push(patched[i].value + " isn't less than " + patched[i - 1].value + " , no operations, go check the next bar " + patched[i+1].value);
      }else if(ifSwiched && j == -1){
        //若没有进入while，且为第一次对比（数组0位和1位在对比），则：
        //1.不用再进行0和1位的大小对比，直接跳过（continue）。
        //2.将当前对比的两个bar变色为finished。

        //根据遍历数（i），将前i个元素变为finish
        for(x = 0; x < i ; x++){
          changeColor(patched, x, COLORS.finished);
        }

        continue;
            
      }else if(i + 1 < len){
        //若进入过while且对比中的bar不是最后一个（即i+1<len,因为如果正在对比最后一个bar，说明排序已经结束，进入下一种条件，则
        //1.将前一位（j）变色为comparing，在description里增加相应语句
        //2.将j和当前对比的bar（j+1，即k.key变化后的实际位置）变为finished
        //3.将下一位要对比的（i+1）变为comparing。
        changeColor(patched, j, COLORS.comparing);
        trace.push(hardcopy(patched));
        description.push("Compare " + patched[j + 1].value + " and " + patched[j].value );

        changeColor(patched, j, COLORS.finished);
        changeColor(patched, j+1, COLORS.finished);
        changeColor(patched, i+1, COLORS.comparing);
        trace.push(hardcopy(patched));
        description.push(patched[j + 1].value + " isn't less than " + patched[j].value + " , no operations, go check the next bar " + patched[i + 1].value);
            
        //根据遍历数（i），将前i个元素变为finish
        for(x = 0; x < i ; x++){
          changeColor(patched, x, COLORS.finished);
        }
        continue;

      }else{
        //算法结束，在description中增加相应描述并将全体bar变色为finished
        //根据遍历数（i），将前i个元素变为finish
          for(x = 0; x < i ; x++){
          changeColor(patched, x, COLORS.finished);
        }

        trace.push(hardcopy(patched));
        description.push("Insertion Sort Finished!");
      }
        
       
  }

    return {trace: trace, description: description};

}
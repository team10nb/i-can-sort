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
        //此处不需要交换位置，因为还未找到key数的真正位置，
        //还需要进行对比，直接覆盖就好，key已经保存了当前拿来插入的数
        temp = patched[j + 1]; 
        patched[j + 1] = patched[j];
        patched[j] = temp;

        changeColor(patched, i, COLORS.finished);
        // changeColor(patched, j, COLORS.comparing);
        description.push(patched[j].value + " is less than " + patched[ j+1 ].value + ", switch positions");
        trace.push(hardcopy(patched));

        ifSwiched = true;
        //再和之前的一个数相比，直到比到第一个，即j < 0
        //j < 0不符合while条件，跳出循环
        j--;
        
      }

          //根据遍历数（i），将前i个元素变为finish
          if(!ifSwiched){

            for(x = 0; x < i ; x++){
              changeColor(patched, x, COLORS.finished);
            }

            changeColor(patched, i, COLORS.finished);
            changeColor(patched, i+1, COLORS.comparing);
            trace.push(hardcopy(patched));
            description.push(patched[i].value + " isn't less than " + patched[i - 1].value + " , no operations, go check the next bar " + patched[i+1].value);
          }else if(ifSwiched && j == -1){
            for(x = 0; x < i ; x++){
              changeColor(patched, x, COLORS.finished);
            }
            continue;
            
          }else if(i + 1 < len){
            
            changeColor(patched, j, COLORS.comparing);
            trace.push(hardcopy(patched));
            description.push("Compare " + patched[j + 1].value + " and " + patched[j].value );

            changeColor(patched, j, COLORS.finished);
            changeColor(patched, j+1, COLORS.finished);
            changeColor(patched, i+1, COLORS.comparing);
            trace.push(hardcopy(patched));
            description.push(patched[j + 1].value + " isn't less than " + patched[j].value + " , no operations, go check the next bar " + patched[i + 1].value);
            // patched[i - 1].value + " is bigger than " + patched[i - 2].value + " , nNNNo operations"
            for(x = 0; x < i ; x++){
              changeColor(patched, x, COLORS.finished);
            }
            continue;
          }else{
            for(x = 0; x < i ; x++){
              changeColor(patched, x, COLORS.finished);
            }
            trace.push(hardcopy(patched));
            description.push("Insertion Sort Finished!");
          }
        
       
  }

    return {trace: trace, description: description};

}
import { COLORS, patch, hardcopy, changeColor, swap } from "../Patch/Patch";


export default function HeapSort(arr) {
    let patched = patch(arr);

    // Visualize: Initial State
    let description = ["Unsorted Array"];
    let trace = [hardcopy(patched)];

    //将堆的末端子节点作调整，使得子节点永远小于父节点
    function maxHeapify(patched, index, heapSize) {
     var iMax,
      iLeft,
      iRight;
     while (true) {
      iMax = index;
      iLeft = 2 * index + 1;
      iRight = 2 * (index + 1);
    
      if (iLeft < heapSize && patched[index].value < patched[iLeft].value) {
       iMax = iLeft;
      }
    
      if (iRight < heapSize && patched[iMax].value < patched[iRight].value) {
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
      swap(patched, 0, i);
      maxHeapify(patched, 0, i);
      description.push("dbq我不知道怎么写这个文字描述");
      trace.push(hardcopy(patched));
     }
     return { trace: trace, description: description };
    }
    
    return sort(patched);
   }

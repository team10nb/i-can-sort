// import { COLORS, patch, hardcopy, changeColor, swap } from "../Patch/Patch";

// export default function MergeSort(arr) {
//     let patched = patch(arr);

//     let len = patched.length;
//     if (len < 2) return patched;
//     let mid = patched.floor(len / 2);
//     let left = patched.slice(0, mid);
//     let right = patched.slice(mid);
   
//     return merge(patched,MergeSort(left), MergeSort(right));
//   }
   
//   function merge(patched,left, right) {
//       // Visualize: Initial State
//     let description = ["Unsorted Array"];
//     let trace = [hardcopy(patched)];
   
//     while (left.length > 0 && right.length > 0) {
//       if (left[0] <= right[0]) {
//         description.push("1");
//         trace.push(hardcopy(left.shift()));
//       } else {
//         description.push("2");
//         trace.push(hardcopy(right.shift()));
//       }
//     }
   
//     while (left.length){
//     description.push("3");
//     trace.push(hardcopy(left.shift()));
//     } 
    
//     while (right.length){
//     description.push("4");
//     trace.push(hardcopy(right.shift()));
//     }

//     return { trace: trace, description: description };

//   }
// import React from 'react';
// import {color} from '../../../mainPages/Procedure';
// import ProcedureSubPage from '../ProcedureSubPage';
// import { SwitchAnimation } from '../../../../components/SwitchAnimation/SwitchAnimation';
// import SwitchSort from '../../../../components/SwitchSort/SwitchSort';
// import MergeSort from '../../../../components/SwitchAnimation/SortingAlgorithms/MergeSort/MergeSort';

// let arr = [2, 1, 6, 10, 9, 12, 8, 3];
// let props = MergeSort(arr);

// const introMessage = <div>
//                 <h1>Merge sort</h1>
//                 {/* <h2><font color = "white"> hello world </font></h2> */}
//                 <p style={{textAlign:"left"}}>A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.</p>
//             </div>;

// const intro = {
//     introMessage: introMessage,
//     animation: <SwitchAnimation {...props} width={500}/>,
// }

// const operate = <SwitchSort sort={"Merge"}/>;



// export default function ProcedureMerge(props) {

//     const progress = localStorage.getItem("merge") ? JSON.parse(localStorage.getItem("merge")) : [false, false, false];

//     const data = {
//         color: color,
//         algorithm: "merge",
//         progress: progress,
//         history: props.history,      
//         intro: intro,
//         operate: operate,
//     }

//     return(
//         <div>
//             <ProcedureSubPage {...data} />
//         </div>
//     );
// }


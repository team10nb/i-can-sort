import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// import { BrowserRouter } from "react-router-dom";
// import Routers from "./Routers";
import { SwitchAnimation } from "./components/SwitchAnimation/SwitchAnimation";
import "./styles.css";
import BubbleSort from "./components/SwitchAnimation/SortingAlgorithms/BubbleSort/BubbleSort";
import SelectionSort from "./components/SwitchAnimation/SortingAlgorithms/SelectionSort/SelectionSort";
import InsertionSort from "./components/SwitchAnimation/SortingAlgorithms/InsertionSort/InsertionSort"

let arr = [2,1,6,10,9,12,8,3];


// ****************************************************

// 改为BubbleSort，SelectionSort或InsertionSort可观看对应动画；
// let full = InsertionSort(arr);
let full = SelectionSort(arr);
// let full = BubbleSort(arr);

// 每个bar应该怎么变动。
const trace = full.trace;

// 显示在屏幕上的description。
const description = full.description;

const props = {trace, description};
const App = () => <SwitchAnimation {...props}/>;

ReactDOM.render(
    // <React.StrictMode>
    // <BrowserRouter>
    <App />,

    // <Routers />
    // </BrowserRouter>,
    // </React.StrictMode>,
    document.getElementById("root")
);

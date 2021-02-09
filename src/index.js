import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// import { BrowserRouter } from "react-router-dom";
// import Routers from "./Routers";
import { SwitchAnimation } from "./components/SwitchAnimation/SwitchAnimation";
import SwitchSort from "./components/SwitchSort/SwitchSort";
import "./styles.css";
import BubbleSort from "./components/SwitchAnimation/SortingAlgorithms/BubbleSort/BubbleSort";
import SelectionSort from "./components/SwitchAnimation/SortingAlgorithms/SelectionSort/SelectionSort";
import InsertionSort from "./components/SwitchAnimation/SortingAlgorithms/InsertionSort/InsertionSort";

import IntroBubble from "./components/Introduction/BubbleSort";
import IntroInsertion from "./components/Introduction/InsertionSort";
import IntroSelection from "./components/Introduction/SelectionSort";

let arr = [2, 1, 6, 10, 9, 12, 8, 3];

// ****************************************************

// 改为BubbleSort，SelectionSort或InsertionSort可观看对应动画；
// let full = InsertionSort(arr);
// let props = SelectionSort(arr);
// let full = BubbleSort(arr);

// const App = () => <SwitchAnimation {...props} width={600}/>;
// const App = () => <SwitchSort sort='Insertion' />;

const App = () => <IntroBubble />;
const App = () => <IntroSelection />;
const App = () => <IntroInsertion />;




ReactDOM.render(
    // <React.StrictMode>
    // <BrowserRouter>
    <App />,

    // <Routers />
    // </BrowserRouter>,
    // </React.StrictMode>,
    document.getElementById("root")
);

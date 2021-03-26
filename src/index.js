import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import ProcedureOperation from "./components/ProcedureOperation/ProcedureOperation";
// import { SwitchAnimation } from "./components/SwitchAnimation/SwitchAnimation";
import "./styles.css";
import App from './App';
import IntroBubble from "./components/Introduction/BubbleSort";
import IntroInsertion from "./components/Introduction/InsertionSort";
import IntroSelection from "./components/Introduction/SelectionSort";

let arr = [2, 1, 6, 10, 9, 12, 8, 3];

// 改为BubbleSort，SelectionSort或InsertionSort可观看对应动画；
// let full = InsertionSort(arr);
// let props = SelectionSort(arr);
// let full = BubbleSort(arr);

// const App = () => <SwitchAnimation />;

// ReactDOM.render(
//     <App />,
//     // <React.StrictMode>
//     // <BrowserRouter>
 
//     // <Routers />
//     // </BrowserRouter>,
//     // </React.StrictMode>,
//     document.getElementById("root")
// );
localStorage.clear();

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Routers from "./Routers";
// import { SwitchAnimation } from "./components/SwitchAnimation/SwitchAnimation";
import "./styles.css";

// const App = () => <SwitchAnimation />;

ReactDOM.render(
    // <App />,
    // <React.StrictMode>
    <BrowserRouter>

    <Routers />
    </BrowserRouter>,
    // </React.StrictMode>,
    document.getElementById("root")
);

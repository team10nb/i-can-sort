import * as React from "react";
import { render } from "react-dom";
import { SwitchAnimation } from "./components/SwitchAnimation/SwitchAnimation";

import "./styles.css";

const App = () => <SwitchAnimation />;

render(<App />, document.getElementById("root"));

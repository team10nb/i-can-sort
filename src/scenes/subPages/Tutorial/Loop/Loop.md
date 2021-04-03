
### **Developer**
Ruizi Han

Reference: MATERIAL-UI (https://material-ui.com)


###  **Introduction**

This page is a subpage of Tutorial module. It uses animation and pseudocode to explain for loop and while loop.

###  **Import**

```html
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { color } from "../../../mainPages/Tutorial";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import TutorialSubPage from "../TutorialSubpage";
import { LoopForHelp, LoopWhileHelp } from "./LoopHelp";
import TipFrame from "../../../../components/TipFrame/TipFrame";
import ForLoop from './LoopExample/ForLoop';
import WhileLoop from "./LoopExample/WhileLoop";
```

###  **Components**

| Name | Description | Child components |
| ---- | ----------- | ---------------- |
| TutorialSubPage |Provide App bar on the top and a home button|  AppBar, Toolbar                |
| TipFrame |Provide a pop-up window with tips about this page|       /          |
| LoopHelp |Help button for this page, which contains the explanation of for loop and while loop|ExplanationFrame |
| ForLoop |For loop example with animation and pseudocode|AnimationWithCode |
| WhileLoop |While loop example with animation and pseudocode|AnimationWithCode |




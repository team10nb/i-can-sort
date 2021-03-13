
### **Developer**

Shiliang Chen, Yijie Lu

Reference: MATERIAL-UI (https://material-ui.com)



###  **Introduction**

A popup to introduce basic idea of Correctness and legal/illegal input with an example algorithm.

###  **Import**

```html
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import Backdrop from "@material-ui/core/Backdrop";
import logo0 from "../../Resource/inputExp0.png";
import logo1 from "../../Resource/inputExp1.png";
import logo2 from "../../Resource/inputExp2.jpg";
import logo3 from "../../Resource/inputExp3.png";
import logo4 from "../../Resource/inputExp4.jpg";
import { color } from "../../scenes/mainPages/Correctness";
```

###  **Props**


| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |



###  **Methods**

| Name | Props | Return | Description |
| ---- | ----- | ------ | ----------- |
|getStepContent|step|    react component CardActionArea     |     According to the step number given, return a specific page of instruction      |

###  **Demo**

```jsx
<CorrectnessHelp

/>
```


### **Developer**
Yijie Lu

Reference: MATERIAL-UI (https://material-ui.com)



###  **Introduction**

This is a correctness tutorial. Users can get information about correctness from here.

###  **Import**

```html
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Chip from "@material-ui/core/Chip";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import HomeIcon from "@material-ui/icons/Home";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Input from "src/scenes/subPages/Correctness/Tutorial/Input/Input";
import Example from "src/scenes/subPages/Correctness/Tutorial/Example";
import PartialDef from "src/scenes/subPages/Correctness/Tutorial/Parital_Def";
import TotalDef from "src/scenes/subPages/Correctness/Tutorial/Total_Def";
import Termination from "src/scenes/subPages/Correctness/Tutorial/Termination/Termination";
```

###  **Components**

| Name | Description | Child components |
| ---- | ----------- | ---------------- |
| AppBar1 |    a bar contains each subpage's name     |                   
| Drawer |    a drawer show the level of subpage     |       List        |
| List   |    a list of each subpage's name         |          
| AppBar2 |   a bar show page number and give access to the last and the next page  |\   

###  **Subpages**

| Name   | Description | 
| ----   | ----------- | 
| Termination         | two examples show the termination knowledge
| Introduction        |     introduction of correctness           |
| Partial Correctness |   knowledge of partial correctness        | 
| Total Correctness   |    knowledge of total correctness         |
| Example             | three examples of each algorithm type     |

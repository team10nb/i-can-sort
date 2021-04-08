
### **Developer**
Yani Huang, ruizi han

Reference: MATERIAL-UI (https://material-ui.com)


###  **Introduction**

This page is a subpage of Tutorial module. It introduces the terminologies of pseudo-code.

###  **Import**

```html
import { makeStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Chip from '@material-ui/core/Chip';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HomeIcon from '@material-ui/icons/Home';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { color } from 'src/scenes/mainPages/Tutorial';
import Expressions from 'src/scenes/subPages/Tutorial/Terminology/Expressions.jsx';
import IfThenElse from 'src/scenes/subPages/Tutorial/Terminology/IfThenElse.jsx';
import Method from 'src/scenes/subPages/Tutorial/Terminology/MethodCall.jsx';
import ReturnValue from 'src/scenes/subPages/Tutorial/Terminology/ReturnValue.jsx';
import ProofHelp from "src/scenes/subPages/Tutorial/Terminology/TerminologyHelp";
```

###  **Components**

| Name | Description | Child components |
| ---- | ----------- | ---------------- |
| AppBar1 |    a bar contains each subpage's name     |       \          |
| Drawer |    a drawer show the level of subpage     |       List        |
| List   |    a list of each subpage's name         |         \ |
| AppBar2 |   a bar show page number and give access to the last and the next page|  \ |
| TutorialSubPage |Provide App bar on the top and a home button|  AppBar, Toolbar       

###  **Subpages**

| Name   | Description | 
| ----   | ----------- | 
| Expressions   | Common algorithm expressions using in this software |
| ControlFlow        |     introduction of 'if-then-else' control flow in pseudo code         |
| ReturnValue |   introduction of concept of return value in pseudo code       | 
| MethodCall   |    introduction of concept of method call in pseudo code          |




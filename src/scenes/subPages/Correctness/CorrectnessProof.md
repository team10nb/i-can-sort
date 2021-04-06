
### **Developer**
Yijie Lu, Shiliang Chen

Reference: MATERIAL-UI (https://material-ui.com)



###  **Introduction**

This is a correctness proof. Users can get information about correctness's proof of eacch sorting algortihm.

###  **Import**

```html
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Chip from "@material-ui/core/Chip";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import HomeIcon from "@material-ui/icons/Home";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { BubbleProof, SelectionProof, InsertionProof, QuickProof, HeapProof, MergeProof} from "src/components/CorrectnessProof/CorrectnessProof";
import ProofHelp from "src/components/CorrectnessProof/ProofHelp";
```

###  **Components**

| Name | Description | Child components|
| ---- | ----------- | ----------------|
| AppBar1 |    a bar contains each subpage's name     |        |   
|Drawer |    a drawer show the level of subpage     |       List        |
| List   |    a list of each subpage's name         |            |
| AppBar2 |   a bar show page number and give access to the last and the next page|    |   

###  **SubPages**

| Name   | Description | 
| ----   | ----------- | 
| Bubble | Bubble's proof|
| Selection | Selection's proof|
| Insertion | Insertion's proof|
| Quick | Quick's proof|
| Merge | Merge's proof|
| Heap | Heap's proof|


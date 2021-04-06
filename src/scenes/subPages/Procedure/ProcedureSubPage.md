
### **Developer**
Yuting Jiang, Yijie Lu

Reference: MATERIAL-UI (https://material-ui.com)


###  **Introduction**

This is a template for procedure subpages. Consists of three subpages, which are Introduction, Operation, and Implementation.

###  **Import**

```html
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
```

###  **Components**

| Name | Description | Child components |
| ---- | ----------- | ---------------- |
| AppBar | The bar contains three subpage's title      | HomeButton, Tab           | 
| Introduction Card | Contain introduction for a sorting algorithm        |                  | 
| Animation Card | Contain an example animation of a sorting algorithm        |                  | 

###  **Applications**

| Name | Description | 
| ---- | ----------- | 
| ProcedureBubble | The subpage for leaning Bubble sort |  
| ProcedureInsertion | The subpage for leaning Insertion sort |  
| ProcedureSelection | The subpage for leaning Selection sort |  
| ProcedureHeap | The subpage for leaning Heap sort |  
| ProcedureMerge | The subpage for leaning Merge sort |  
| ProcedureQuick | The subpage for leaning Quick sort |  



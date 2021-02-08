### **Developer**

Shiliang Chen, Yuting Jiang

Reference: MATERIAL-UI (https://material-ui.com)

###  **Introduction**

Used in conjunction with a Module component to indicate the learning progress of that Module.

###  **Import**

```html
import { makeStyles, withStyles} from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
```

###  **Props**
width, color, progress, preOne

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| width | number |         | The length of the progress bar. |
| color | string | #3f51b5 | The color of the progress bar. |
| progress| number | 100 | The progress of the progress bar, from 0 to 100. |
| preOne | bool |         | If true, increase the width by 6px. |


###  **Demo**

```jsx
<ModuleProgress width={500} color={'#1565c0'} progress={30} preOne = {false}/>
```
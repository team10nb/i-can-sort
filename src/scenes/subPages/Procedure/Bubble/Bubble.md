



### **Developer**

Yuting Jiang, Yijie Lu

Reference: MATERIAL-UI (https://material-ui.com)


###  **Introduction**

store the parameters that Bubble interface should use

###  **Import**

```html
import { makeStyles } from '@material-ui/core/styles';
import ProcedureSubPage from 'src/scenes/subPages/Procedure/ProcedureSubPage.jsx';
```

###  **Props**


| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
|  arr    | number[]    |    [2, 1, 6, 10, 9, 12, 8, 3]     |     use for create a default bar        |
|introMessage| JSX.Element | |explanation for Bubble sort|
|intro.animation| JSX.Element||apply animation to the interface|
|operate|JSX.Element||oprerate the animation|


###  **Methods**


| Name | Props | Return | Description |
| ---- | ----- | ------ | ----------- |
|  procedureBubble    |  data     |  bubble's subpage      |  show the bubble's subpage           |

###  **Demo**

```jsx
<ProcedureBubble/>
```
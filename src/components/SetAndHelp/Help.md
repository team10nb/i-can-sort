

### **Developer**

Yuting Jiang, Yijie Lu

Reference: MATERIAL-UI (https://material-ui.com)



###  **Introduction**

It is a help button, after clicking it, the explanation of each interface's component will be shown. 

###  **Import**

```html
import { makeStyles } from '@material-ui/core/styles';

```

###  **Props**

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
|      |     |         |            |

###  **Methods**

| Name | Props | Return | Description |
| ---- | ----- | ------ | ----------- |
|  getStepContent   |   step    |  string      |    identify which step now.          |

###  **Demo**

```jsx
const data ={
    logo0 : "../../Resource/Chelp1.png", 
    logo1 : "../../Resource/Chelp2.png", 
    logoFinal : "../../Resource/Chelp3.png", 
    color : "#ff6f00"
    };
<Help {...data}/>
```

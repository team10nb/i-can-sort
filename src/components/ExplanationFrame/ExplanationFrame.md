

### **Developer**

Yijie Lu

Reference: MATERIAL-UI (https://material-ui.com)



###  **Introduction**

It is a interface for all the explanation window. By passing the props, using it as a interface.

###  **Import**

```html
import { makeStyles } from '@material-ui/core/styles';
import logoFinal from "../../../../Resource/ForLoop.png";
```

###  **Props**

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
|color              |  string      |   \ |     the color of the explanation window            |
|logon              |  string      |   \ |     pictures used in the explanation window        |
|contentn           |  JSX.Element |   \ |   contents uesd in the explanation window          |
|stepNumber         |  number      |   \ | the number of pages used in the explanation window |
|picHeight          |  string      |   \ | the height a picture defined                       |
|contentMarginBottom| stirng       |  \  | the marginbottom a content defined                 |
|contentMarginTop   | stirng       |  \  | the margintop a content defined                    |
|avatarMarginLeft   | stirng       |  \  | the marginleft a avatar defined                    |
|avatarMarginTop    | stirng       |  \  | the margintop a avatar defined                     |


###  **Methods**

| Name | Props | Return | Description |
| ---- | ----- | ------ | ----------- |
|  getStepContent   |   step    |  string      |    identify which step now.          |

###  **Demo**

```jsx
const data = {
        color:"#4caf50",
        logoFinal:'../../Resource/ForLoop.png',
        stepNumber:1,
        picHeight:"350px",
        avatarMarginLeft:"9px",
        avatarMarginTop:"9px",
      };
<ExplanationFrame {...data}/>
```

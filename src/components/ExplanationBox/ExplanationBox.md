### **Developer**

Ruizi Han, Shiliang Chen

Reference: MATERIAL-UI (https://material-ui.com)

### **Introduction**

An Explanation box in order to be the background of a set of explanations.

### **Import**

```html
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
```

### **Props**

| Name         | Type   | Default | Description                                        |
| ------------ | ------ | ------- | -------------------------------------------------- |
| children     | object | null    | Description content as children         |
| width        | number | 0       | Indicate the width of the Explanation bar.         |

### **Demo**

```jsx
<div style={{backgroundColor: "grey", height:"40px", width:"500px"}}>
<ExplanationBox width="55px">
                Expanation box with background color white
            </ExplanationBox>
</div>
```

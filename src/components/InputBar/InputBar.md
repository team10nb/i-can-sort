### **Developer**

Ruizi Han, Shiliang Chen

Reference: MATERIAL-UI (https://material-ui.com)

### **Introduction**

A input bar with a button for user to define the array of numbers.

### **Import**

```html
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {
    makeStyles,
    withStyles,
} from "@material-ui/core/styles";
```

### **Props**

| Name         | Type   | Default | Description                                        |
| ------------ | ------ | ------- | -------------------------------------------------- |
| storeInput | fn     |         | To store the input into an array.         |
| checkFormat | fn     |         | A function to check whether the input is correct.         |
| wrongMsg         | string | 0       | Error message. |
| defaultArr         | string | 0       | Indicate the default set array of numbers in the form of string. |
| isValid          | boolean | 0       | Whether the content is valid by definition.               |

### **Demo**

```jsx
<InputBar
    defaultArr={[1,2,3,4,5,6,7]}
    isValid={false}
    wrongMsg={"Error message"}
/>
```

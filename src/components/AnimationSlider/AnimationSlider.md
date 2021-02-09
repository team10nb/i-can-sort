### **Developer**

Ruizi Han, Shiliang Chen

Reference: MATERIAL-UI (https://material-ui.com)

### **Introduction**

A progress bar with a slider for user to control the progress of the animation by dragging the slider.

### **Import**

```html
import { makeStyles, withStyles } from "@material-ui/core/styles"; 
import Slider from "@material-ui/core/Slider";
```

### **Props**

| Name         | Type   | Default | Description                                        |
| ------------ | ------ | ------- | -------------------------------------------------- |
| handleChange | fn     |         | Handle change of the slider by user event.         |
| step         | number | 0       | Indicate how length of each step. |
| max          | number | 0       | Indicate the maximum number of step.               |
| value        | number | 0       | Indicate the current value of step.                |
| width        | number | 0       | Indicate the width of the progress bar.            |

### **Demo**

```jsx
<AnimationSlider step={1} max={15} value={5} width={800} />
```

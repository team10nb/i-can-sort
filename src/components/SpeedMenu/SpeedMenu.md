### **Developer**

Ruizi Han, Shiliang Chen

Reference: MATERIAL-UI (https://material-ui.com)

### **Introduction**

Menu of speed.

It is used to adjust the speed of the animation.

### **Import**

```html
import Button from "@material-ui/core/Button"; 
import Menu from "@material-ui/core/Menu"; 
import MuiMenuItem from "@material-ui/core/MenuItem";
import { makeStyles, withStyles } from "@material-ui/core/styles"; 
import Tooltip from "@material-ui/core/Tooltip"; 
import Zoom from "@material-ui/core/Zoom";
```

### **Props**

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |

| handleClick | fn | | Handle clicking speed button. |
| handleClose | fn | | Handle closing speed menu. |
| speed | number | 0 | Indicate the speeding of playing animation. |
| anchorEl | object | null | Indicate the openning speed menu. |

### **Demo**

```jsx
<SpeedMenu speed={'2x'} />
```

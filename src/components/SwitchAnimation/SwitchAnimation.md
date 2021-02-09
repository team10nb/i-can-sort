### **Developer**

Ruizi Han, Shiliang Chen

Reference: MATERIAL-UI (https://material-ui.com)

### **Introduction**

Animation component which contains a control bar, a slider and a description box.

### **Import**

```html
import Zoom from "@material-ui/core/Zoom"; 
import SpeedMenu from "../SpeedMenu/SpeedMenu"; 
import Tooltip from "@material-ui/core/Tooltip";
import ReplayIcon from "@material-ui/icons/Replay"; 
import { makeStyles } from "@material-ui/core/styles"; 
import IconButton from "@material-ui/core/IconButton";
import SkipNextIcon from "@material-ui/icons/SkipNext"; 
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious"; 
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled"; 
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
```

### **Props**

| Name             | Type   | Default | Description                                                   |
| ---------------- | ------ | ------- | ------------------------------------------------------------- |
| width        | number | 0       | The width of this component                   |
| trace         | object | null    | Indicate the sorting process                             |
| description         | [string] | []    | Contain array of descriptions                             |

### **Demo**

```jsx
import BubbleSort from "../SwitchAnimation/SortingAlgorithms/BubbleSort/BubbleSort";

const trace = BubbleSort([2, 1, 6, 10, 9, 12, 8, 3]);
<SwitchAnimation {...trace} width={600} />
```

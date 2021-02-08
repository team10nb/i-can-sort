### **Developer**

Ruizi Han, Shiliang Chen

Reference: MATERIAL-UI (https://material-ui.com)

### **Introduction**

Used in conjunction with a SwitchAnimation component to allow user to control the animation.

Features: play, pause, step forward/backward, reset, adjust speed

### **Import**

```html
import Zoom from "@material-ui/core/Zoom"; import SpeedMenu from
"../SpeedMenu/SpeedMenu"; import Tooltip from "@material-ui/core/Tooltip";
import ReplayIcon from "@material-ui/icons/Replay"; import { makeStyles } from
"@material-ui/core/styles"; import IconButton from
"@material-ui/core/IconButton"; import SkipNextIcon from
"@material-ui/icons/SkipNext"; import SkipPreviousIcon from
"@material-ui/icons/SkipPrevious"; import PlayCircleFilledIcon from
"@material-ui/icons/PlayCircleFilled"; import PauseCircleFilledIcon from
"@material-ui/icons/PauseCircleFilled";
```

### **Props**

handleResetClick, stepForward, stepBackward, pause, resume, isPlaying, playDisabled, backwardDisabled, handleClick, handleClose, anchorEl, playSpeed

| Name             | Type   | Default | Description                                                   |
| ---------------- | ------ | ------- | ------------------------------------------------------------- |
| handleResetClick | fn     |         | Handle clicking reset button.                                 |
| stepForward      | fn     |         | Handle clicking step forward button.                          |
| stepBackward     | fn     |         | Handle clicking step backward button.                         |
| pause            | fn     |         | Handle clicking pause button.                                 |
| resume           | fn     |         | Handle clicking resume button.                                |
| handleClick      | fn     |         | Handle clicking speed button.                                 |
| handleClose      | fn     |         | Handle closing speed menu.                                    |
| isPlaying        | bool   | false   | If true, the animation is playing.                            |
| playDisabled     | bool   | false   | If true, the play button and step forward button is disabled. |
| backwardDisabled | bool   | false   | If true, the step backward button is disabled.                |
| playSpeed        | number | 0       | Indicate the speeding of playing animation.                   |
| anchorEl         | object | null    | Indicate the openning speed menu.                             |

### **Demo**

```jsx
<AnimationControl playSpeed={1} />
```

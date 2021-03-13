### **Developer**

Shiliang Chen, Yijie Lu

Reference: 

MATERIAL-UI (https://material-ui.com)

Framer Motion (https://framer.com/motion)

### **Introduction**

Animated Tick and Cross svg icons

### **Import**

```html
import * as React from "react";
import { useEffect, useState } from "react";
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform,
  useMotionValue
} from "framer-motion";
```

### **Props**

| Name         | Type   | Default | Description                                        |
| ------------ | ------ | ------- | -------------------------------------------------- |
| isComplete        | boolean | false  | If the svg icon's animation is complete.            |

### **Demo**

```jsx
import {Tick, Cross} from './TickCross';
<div>
<Tick isComplete = {true} />
<Cross isComplete = {true} />
</div>
```

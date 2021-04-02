
### **Developer**

Shiliang Chen, Yijie Lu

Reference: 

MATERIAL-UI (https://material-ui.com)

Framer Motion (https://framer.com/motion)

###  **Introduction**

A popup which asks users whether a beginner or have knowledge, and jump to Tutorial page or Procedure page.

###  **Import**

```html
import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import { motion } from "framer-motion";
```




###  **Demo**

```jsx
// import { BrowserRouter as Router,Route, Switch} from 'react-router-dom';
// <Router>
// < FirstInBackdrop/>
// </Router>
const str = "< FirstInBackdrop/>";
<div> This is a popup windows only appears when users open the software for the first time.
Please use it like this: <br/>
{str}
</div>

```

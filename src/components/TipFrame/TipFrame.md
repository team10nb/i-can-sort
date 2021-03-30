### **Developer**

Yuting Jiang

Reference: MATERIAL-UI (https://material-ui.com)

###  **Introduction**

It is used to pop up a windows and show some tips.

###  **Import**

```html
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Backdrop from '@material-ui/core/Backdrop';
```

###  **Props**

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| message| string |         | Message of the popup tip window |
| size | structure | full screen | Size of backdrop        |
| btnColor | string |  "white"   | Color of the button           |

###  **Demo**

```jsx

import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const classes = useStyles();
const [open, setOpen] = React.useState(false);
const handleClose = () => {
    setOpen(false);
};
const handleToggle = () => {
    setOpen(!open);
};
const message="Hello! This is a TipFrame!";

    <div>
      <Button variant="outlined" color="primary" onClick={handleToggle}>
        Show TipFrame
      </Button>
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <TipFrame message={message} btnColor={"blue"}/>
      </Backdrop>
    </div>


```
### **Developer**

Shiliang Chen, Yuting Jiang

Reference:

MATERIAL-UI (https://material-ui.com)

fontsource

### **Introduction**

Used in conjunction with a Module component as a button for user to enter a specific module of an sorting algorithm.

This button contains an image and a gif to indicate the sorting process. Gif will be shown when the cursor hovers.

### **Import**

```html
import { makeStyles } from "@material-ui/core/styles"; import ButtonBase from
"@material-ui/core/ButtonBase"; import Typography from
"@material-ui/core/Typography"; import "@fontsource/roboto";
```

### **Props**

| Name    | Type   | Default | Description                                                                   |
| ------- | ------ | ------- | ----------------------------------------------------------------------------- |
| width   | number |         | The length of the button.                                                     |
| height  | number |         | The height of the button.                                                     |
| color   | string | #3f51b5 | The color of the border.                                                      |
| preOne  | bool   | false   | If true, increase the width by 6px, indicating this is the last accessed one. |
| image   | object |         | The image and gif to be displayed on the button.                              |
| onClick | fn     |         | The function to be triggered when the button is clicked.                      |

### **Demo**

```jsx

const image = {
        static: "./logo512.png",
        gif: "catch.gif",
        title: "Bubble sort",
        width: "20%",
};
<ModuleButton width={200} height={200} color={'#1565c0'} preOne = {false} image={image}/>
```


### **Developer**
Yuting Jiang

Reference: MATERIAL-UI (https://material-ui.com)



###  **Introduction**

This is the tutorial main page. It consists of three modules, set and help buttons, and the Section Navigation.

###  **Import**

```html
import { Link } from "react-router-dom";
import Set from "src/components/SetAndHelp/Set";
import Help from "src/components/SetAndHelp/Help";
import Module from "src/components/Module/Module";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { motion } from "framer-motion";
```

###  **Components**

| Name | Description | Child components |
| ---- | ----------- | ---------------- |
| Module |    This button contains an image and a gif to indicate the sorting process. Gif will be shown when the cursor hovers.|          
| Setting Button |    It is a set button. By clicking it, users can change language, background music and see some information about the team.|\
| Help Button |    It is a help button, after clicking it, the explanation of each interface's component will be shown.        |\
| Section Navigation  |    a navigation used to switch different pages        |\      


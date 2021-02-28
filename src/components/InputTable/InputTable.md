
### **Developer**

Shiliang Chen, Yijie Lu

Reference: MATERIAL-UI (https://material-ui.com)



###  **Introduction**

Input table is used for store the lagal input, illegal input, and their result. It is the component of InputTutorial. 

###  **Import**

```html
import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
```

###  **Props**


| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
|legalShuffle      |() => void|                                    |click shuffle can get legal input|
|illlegalShuffle   |() => void|                                    |click shuffle can get illlegal input|
|inputLegalString  |string[]  |["2,1,6,10","9,12,8,3","3,2,17,10",]|the lagal string table used |
|inputIllegalString|string[]  |["2,a,6,10","9,*,&,3","3,#,&,10",]  |the illagal string table used |
|legalArrays       |number[][]|["2,1,6,10","9,12,8,3","3,2,17,10",]|the lagal array animation should operate |
|isCompleteIllegal |boolean[] |[false,false,false,]                |the signal when should the cross svg be visible |
|isCompleteLegal   |boolean[] |[false,false,false,]                |the signal when should the tick svg be visible |
|legalClick        |() => void|                                    |click create should let the animation display |
|illegalClick      |() => void|                                    |click create should let the animation display |


###  **Methods**

| Name | Props | Return | Description |
| ---- | ----- | ------ | ----------- |
|createData|str|    string     |     get the string from the string[]      |
|InputTable|props|    a input table     |     a table store the lagal input, illegal input, and their result.      |

###  **Demo**

```jsx
<InputTable
    inputLegalString={["2,1,6,10","9,12,8,3","3,2,17,10",]}
    inputIllegalString={["2,a,6,10","9,*,&,3","3,#,&,10",]}
    legalArrays={["2,1,6,10","9,12,8,3","3,2,17,10",]}
    isCompleteIllegal={[false,false,false,]}
    isCompleteLegal={[false,false,false,]}
/>
```

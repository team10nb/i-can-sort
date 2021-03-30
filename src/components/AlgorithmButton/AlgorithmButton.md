### **Developer**

Yuting Jiang

Reference: MATERIAL-UI (https://material-ui.com)

###  **Introduction**

Used in Correctness-Tutoial-Example page.
To Show an example algorithm.

###  **Import**

```html
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
```

###  **Props**

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| title | string |         | Title of the algorithm button            |
| code | string |         | Code of the algorithm           |
| paddingLeft | number |    0     | The distance to its left element           |
| paddingRight | number |    0     | The distance to its right element                |
| onClick | fn |         | Handle onClick event            |

###  **Demo**

```jsx
const title_interminate =
    <h3>Example1<br />
    </h3>

const code_interminate =
    <pre style={{ marginTop: -20 }}>
        {`
factorial (int n){
  int result = 1;
  for (int i=1; ; i++){
    result = result * i;
  }
  return result;
}
`}
    </pre>;

<AlgorithmButton title={title_interminate} code={code_interminate} paddingLeft={0} paddingRight={0} />
```
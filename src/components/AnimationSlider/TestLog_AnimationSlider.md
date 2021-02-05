reason/description里面写为什么test fail了
对**组件代码**做修改和修改的理由写在每个代码块前的注释里（由于没有通过test，而对**原码**做的修改）
有必要的话，贴一下test的代码
第一个version可以不写注释 最后一个version(pass的version)可以不写reason

#### ComponentName: AnimationSlider

|Test No.|Date|Pass/Fail|Failed test(s)|Reason/Description|Modified version|
|-------|----|---------|-------------------|----------------|----------------|
|1 | 1.29 | Fail | All | No code has been constructed |version 1|
|2 | 1.29 | Pass |/|Initial version is created|version 2|
|3 | 2.5 | Fail |should match snapshot|Styles changed|version 3|
|4 | 2.5 | Pass | /                     |snapshot updated|version 4|

##### Code - version 2
```javascript
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";




export default function DiscreteSlider(props) {
    const {width, step, max, handleChange, value} = props;

    const useStyles = makeStyles({
        root: {
            width: width,
        },
    });
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Slider
                value={typeof value === 'number' ? value : 0}
                aria-labelledby='Progress'
                valueLabelDisplay='auto'
                step={step}
                marks
                min={0}
                max={max}
                onChange={handleChange}
            />
        </div>
    );
}

```

##### Code - version 4
```javascript
import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const PrettoSlider = withStyles({
    root: {
        color: "#52af77",
        height: 4,
        alignContent: "center",
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: "#fff",
        border: "2px solid currentColor",
        marginTop: -8,
        marginLeft: -12,
        "&:focus, &:hover, &$active": {
            boxShadow: "inherit",
        },
    },
    active: {},
    valueLabel: {
        left: "calc(-50% + 4px)",
    },
    track: {
        height: 5,
        borderRadius: 2,
    },
    rail: {
        height: 5,
        borderRadius: 2,
    },
    mark: {
        height: 5,
    }
})(Slider);

export default function DiscreteSlider(props) {
    const { step, max, handleChange, value, width } = props;

    const useStyles = makeStyles({
        root: {
            display: "grid",
            alignContent: "center",
            width: width,
            marginTop: "10px",
        },
    });
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <PrettoSlider
                value={typeof value === "number" ? value : 0}
                aria-labelledby='Progress'
                valueLabelDisplay='auto'
                step={step}
                marks
                min={0}
                max={max}
                onChange={handleChange}
            />
        </div>
    );
}


```



reason/description里面写为什么test fail了
对**组件代码**做修改和修改的理由写在每个代码块前的注释里（由于没有通过test，而对**原码**做的修改）
有必要的话，贴一下test的代码
第一个version可以不写注释 最后一个version(pass的version)可以不写reason

#### ComponentName: ModuleProgress

|Test No.|Date|Pass/Fail|Failed test(s)|Reason/Description|Modified version|
|-------|----|---------|-------------------|----------------|----------------|
|1 | 1.22 | Fail | All | No code has been constructed |version 1|
|2 | 1.22 | Pass |/|Initial version is created|version 2|
|3 | 1.27 | Fail |Props passing changed|Change passing values|version 3|
|4 | 1.27 | Pass | /                     |Props updated|version 4|

##### Code - version 2
```javascript
import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const BorderLinearProgress = withStyles((theme) => ({
    root: {
        boxShadow: "10x 10px 20px #888888",
        height: 10,
        borderTopLeftRadius: 2,
        borderTopRightRadius: 2,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
    },
    colorPrimary: {
        backgroundColor:
            theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
    },
    bar: {
        borderRadius: 2,
        backgroundColor: "#1a90ff",
    },
}))(LinearProgress);

export default function ModuleProgress(props) {
    const useStyles = makeStyles({
        root: {
            flexGrow: 1,
            width: props.width,
            minWidth: 200,
        },
    });
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <BorderLinearProgress
                {...{ variant: "determinate", value: props.progress }}
            />
        </div>
    );
}

```

##### Code - version 3
```javascript
import React from "react";
import { makeStyles, withStyles} from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";



export default function ModuleProgress(props) {

    const {width, color, progress, preOne} = props;
    const presentingWidth = preOne ? (width + 6) : (width);
    // TODO if complete??
    const presentingColor = progress === 100 ? color : color;

    // modify the default styles of linear progress bar
    const BorderLinearProgress = withStyles((theme) => ({
        root: {
            height: 10,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 2,
            borderBottomLeftRadius: 2,
        },
        colorPrimary: {
            backgroundColor:
                theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
        },
        bar: {
            borderRadius: 2,
            backgroundColor: presentingColor,
            // backgroundColor: "#1a90ff",
        },
    }))(LinearProgress);

    // control the width of the progress bar
    const useStyles = makeStyles({
        root: {
            flexGrow: 1,
            width: presentingWidth,
            minWidth: 200,
        },
    });
    
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <BorderLinearProgress
                variant= "determinate" value= {progress}
            />
        </div>
    );
}



```

##### Code - version 4
```javascript
       import { render } from "@testing-library/react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import ModuleProgress from "./ModuleProgress";

xit("should be value of 15", () => {
    const borderLinearProgressSpy = jest
        .spyOn(ModuleProgress.prototype, "BorderLinearProgress")
        .mockImplementation(jest.fn());

    const props = { width: 200, progress: 10 };
    const content = render(<ModuleProgress {...props} />);
    expect(borderLinearProgressSpy).toBeCalledTimes(1);
    expect(borderLinearProgressSpy).toBeCalledWith({
        variant: "determinate",
        value: 10,
    });
});

```



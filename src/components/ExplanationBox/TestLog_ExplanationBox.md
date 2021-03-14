#### ComponentName: ExplanationBox

|Test No.|Date|Pass/Fail|Failed test(s)|Reason/Description|Modified version|
|-------|----|---------|-------------------|----------------|----------------|
|1 | 2.3 | Pass | All | Test meets the plan |version 1|
|2 | 2.6 | Fail | Snapshot | console error |/|
|3 | 2.6 | Pass | Snapshot | error fixed and snapshot updated |version 2|

##### Code - version 1
```javascript

    import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import { ClassRounded } from "@material-ui/icons";


const ExplanationBox = withStyles({
    root: {
        fontFamily: "inherit",
        fontSize: "0.5em",
        fontWeight: "700",
        paddingTop: "8px",
        letterSpacing:"1px",
        textAlign: "center",
        borderRadius: "8px",
    },
    variant: "outlined",

})(Paper);


export default function SimplePaper(props) {

  const {color, width, text} = props;
  const useStyles = makeStyles((theme) => ({
    root: {
        display: 'grid',
        '& > *': {
          margin: theme.spacing(1),
          width: theme.spacing(width),
          height: theme.spacing(3),
        //   boxShadow: '2px 3px 4px 2px ' + color, 
          border: '2px solid ' + color,

        },
    },
}));
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <ExplanationBox variant="outlined">7 is bigger than 5, swap</ExplanationBox>
      <ExplanationBox>7 is bigger than 5, swap</ExplanationBox>
      <ExplanationBox elevation={3}>7 is bigger than 5, swap</ExplanationBox> */}
      <ExplanationBox variant="outlined">{props.children}</ExplanationBox>
    </div>
  );
}

```

##### Code - version 2
```javascript

    import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";


const ExplanationBox = withStyles({
    root: {
        fontFamily: "inherit",
        fontSize: "0.5em",
        fontWeight: "700",
        paddingTop: "8px",
        letterSpacing: "1px",
        textAlign: "center",
        borderRadius: "12px",
        // backgroundColor: "white",
        marginTop: "4px",
        marginBottom: "3px",
    },
})(Paper);

export default function SimplePaper(props) {
    const { color, width } = props;
    const useStyles = makeStyles((theme) => ({
        root: {
            display: "grid",
            "& > *": {
                width: theme.spacing(width*1),
                height: theme.spacing(3),
                border: "3px solid " + color,
            },
            justifyContent: "center",
            alignContent: "flex-end",
        },
    }));
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ExplanationBox variant='outlined'>
                {props.children}
            </ExplanationBox>
        </div>
    );
}


```

#### ComponentName: AlgorithmButton

|Test No.|Date|Pass/Fail|Failed test(s)|Reason/Description|Modified version|
|--------|----|---------|--------------|------------------|----------------|
|1       | 2.22 | Fail  | All          | No code has been constructed|     |
|2       | 2.22 | Pass  | /            | /                |version 1       |

**##### Code - version 1**

```javascript
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import backgroundImage from "../../resource/run.png";

export default function AlgorithmButton(props) {
    const { title, code, paddingLeft, paddingRight, onClick } = props;
    const styles = {
        div: {
            textAlign: "left",
            paddingLeft: paddingLeft,
            paddingRight: paddingRight,
        },
    };

    const useStyles = makeStyles(() => ({
        buttonBase: {
            paddingLeft: 20,
            width: 250,
            height: 270,
            borderRadius: 15,
            justifyContent: "left",
            textAlign: "left",
            "&:hover": {
                backgroundImage: `url(${backgroundImage})`,
            },
        },
    }));
    const classes = useStyles();

    return (
        <div style={styles.div}>
            <ButtonBase className={classes.buttonBase} onClick={onClick}>
                <Typography variant="body2" align="left">
                    <span>{title}</span>
                    <span>{code}</span>
                </Typography>
            </ButtonBase>
        </div>
    );
}

```
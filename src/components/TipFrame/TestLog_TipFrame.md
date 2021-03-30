#### ComponentName: TipFrame

|Test No.|Date|Pass/Fail|Failed test(s)|Reason/Description|Modified version|
|--------|----|---------|--------------|------------------|----------------|
|1       | 3.07 | Fail  | All          | No code has been constructed|     |
|2       | 3.07 | Pass  | /            | /                |version 1       |

**##### Code - version 1**

```javascript
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Backdrop from '@material-ui/core/Backdrop';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
    justifyContent: 'center',
  },
}));


export default function TipFrame(props) {
  const { message, size, btnColor } = props;

  const classes = useStyles();

  const styles = {
    snackbar: {
      borderRadius: 30,
      justifyContent: 'left',
      height: 220,
      width: 480,
      backgroundColor: "white",
      color: "black",
      fontSize: 18,
      paddingLeft: 40,
      paddingRight: 40,
      paddingTop: 0,

    },
    button: {
      marginRight: 220,
      marginTop: -40,
      fontWeight: 600,
      backgroundColor: btnColor,
      color: "white",
      fontSize: 15
    }
  }

  const action = (
    <Button style={styles.button}>
      OK
    </Button>
  );

  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <Backdrop style={size} className={classes.backdrop} open={open} onClick={handleClose}>
        <SnackbarContent
          style={styles.snackbar}
          message={message}
          action={action}
        >
        </SnackbarContent>
      </Backdrop>
    </div>
  );
}


```
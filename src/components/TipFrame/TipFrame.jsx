/*
    Author: Yuting Jiang

    A pop up window with a backdrop, used to give tip.
*/

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Backdrop from '@material-ui/core/Backdrop';

//Set css
const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
    justifyContent: 'center',
  },
}));


export default function TipFrame(props) {
  //Get info for TipFrame from props
  const { message, size, btnColor } = props;

  const classes = useStyles();

  //Set css
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

  //Set action for SnackbarContent
  const action = (
    <Button style={styles.button}>
      OK
    </Button>
  );

  //Set state for Backdrop
  const [open, setOpen] = React.useState(true);

  //Close the Backdrop when it is clicked
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

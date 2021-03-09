import React from 'react';
import { color } from "../../scenes/mainPages/Correctness"
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

const styles = {
  root:{
    left:240, 
    top:45, 
    bottom:45,
  },
  snackbar: {
    justifyContent: 'left', 
    height: 200, 
    width: 560, 
    backgroundColor:"white", 
    color:"black", 
    fontSize:18
  },
  button:{
    backgroundColor:color,
    color:"white",
    fontSize:16
  }
}
const action = (
  <Button style={styles.button}>
    ok
  </Button>
);
export default function BackDrop(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const {message} = props;

  return (
    <div>
       <Backdrop style={styles.root} className={classes.backdrop} open={open} onClick={handleClose}>
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
import React from 'react';
import { color } from "../../scenes/mainPages/Tutorial"
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
    borderRadius: 30,
    justifyContent: 'left', 
    height: 220, 
    width: 480, 
    backgroundColor:"white", 
    color:"black", 
    fontSize:18,
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop:0,

  },
  button:{
    marginRight: 200,
    fontWeight: 600,
    backgroundColor:color,
    color:"white",
    fontSize:15
  }
}
const action = (
  <Button style={styles.button}>
    Start Now
  </Button>
);
export default function TerminologyBackDrop(props) {
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

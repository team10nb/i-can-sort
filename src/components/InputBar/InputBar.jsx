import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        // margin: theme.spacing(1),
        width: '60ch',
        height: '10px',
      },
      justifyContent: "center",
      alignContent: "flex-end",
    },
    text: {
        // width:'400px',
        margin:'0 10px',
    },
    button: {
        // height:'56px',
    },
}));



export default function InputBar(props) {
  const { color, defaultArr, isValid, wrongMsg, storeInput, checkFormat } = props;

  const classes = useStyles();

    const error = isValid ? '':'error';
    const label = isValid ? 'Enter your own array':'Invalid Input';
    const helper = isValid ? ' ':wrongMsg;

    
    return (
      <div className={classes.root}>
        <TextField
          error={error}
          label={label}
          type="search"
          helperText={helper}
          variant="outlined"
        //   onChange={(e) => {storeInput(e);}}
          onChange={storeInput}
          onFocus={storeInput}
        //   style={textStyle}
          defaultValue={defaultArr}
          className={classes.text}
        />
        
        <Button 
          variant="contained" 
          color="primary" 
          disableElevation
        //   onClick={this.checkFormat.bind(this)}
        //   onClick={() => {checkFormat();}}
          onClick={checkFormat}

          className={classes.button}
        
        //   style={buttonStyle}
          >
            Create
        </Button>
    </div>
    );
}

// let InputBarChild = forwardRef(InputBar);

// export default InputBarChild;



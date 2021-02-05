import React from 'react';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import {Link} from 'react-router-dom';

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(0),
      },
    },
  }));

  export default function SetAndHelp() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Link to="Setting">
        <IconButton aria-label="setting">
          <SettingsOutlinedIcon />
        </IconButton>
        </Link>
        <IconButton aria-label="help" onClick={() => { alert('help') }}>
          <HelpOutlineOutlinedIcon />
        </IconButton>
      </div>
    );
  }
  

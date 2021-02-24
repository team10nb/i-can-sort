import React from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import InputBox from '../../../../components/InputBox/InputBox';

const useStyles = makeStyles((theme) => ({
    div:{
        display: 'flex',    
        // width: 1020,
        '& > *': {
          margin: theme.spacing(1),
        }
      },
    card:{
        // margintop: 10,
        background: "#F0F0F0",
        width: 550,
        height: 530
    },

    InputBox:{
    marginTop: 5,
    background: "#F0F0F0",
    width: 180,
    // height: 520,
    alignItems:"center",
    },

}));

export default function Input(props) {
    const classes = useStyles();

    return(
        <div className = {classes.div}>
            <Card className = {classes.card}>
                <CardContent></CardContent>
            </Card>
            <InputBox className = {classes.InputBox}/>
        </div>
    );
}


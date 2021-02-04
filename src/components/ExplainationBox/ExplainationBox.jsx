import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import { ClassRounded } from "@material-ui/icons";


const ExplainationBox = withStyles({
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
      {/* <ExplainationBox variant="outlined">7 is bigger than 5, swap</ExplainationBox>
      <ExplainationBox>7 is bigger than 5, swap</ExplainationBox>
      <ExplainationBox elevation={3}>7 is bigger than 5, swap</ExplainationBox> */}
      <ExplainationBox variant="outlined">{props.children}</ExplainationBox>
    </div>
  );
}
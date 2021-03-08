import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import FaceIcon from '@material-ui/icons/Face';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#212121",
  },
  cardOne: {
    display: "flex",
        // '& > *': {
        //     marginLe: theme.spacing(4),
        //   },
        '& > * + *': {     
            marginLeft: theme.spacing(8),
        },
        justifyContent: "center",
    width: 650,
    height: 400,
    backgroundColor: "white",
    opacity:0.8,
    borderRadius:"20px",
  },
  cardTwo:{
    width: 230,
    height: 230,
    backgroundColor:"#1565c0",
    color:"white",
    borderRadius:"30px", 
  },
  content1:{
    marginTop:"69px"
  },
  content2:{
    marginTop: "47px",       
  },
  icon:{
    color:"white",
    fontSize :"3rem"
  }
}));


export default function FirstInBackdrop(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const onClick1 = () => {
    //return to tutorial main page 
    localStorage.setItem("first", JSON.stringify(0));
    window.location.href = "/TutorialMainPage";
  };
  // const onClick2 = () => {
  //   //return to procedure main page 
  //   localStorage.setItem("first", JSON.stringify(0));
  //   window.location.href = "/ProcedureMainPage";
  // };
  const onClick = localStorage.setItem("first", JSON.stringify(0));
  return (
    <div>
      <Backdrop className={classes.backdrop} open={open} >
        <Card className = {classes.cardOne}>
        
          <ButtonBase >
            <Link to="./TutorialMainPage" style={{textDecoration:"none"}}>
                       
            <Card className = {classes.cardTwo} >
              <CardContent className = {classes.content1}>
                <Typography variant="h6" gutterBottom>I am a Freshman, go to tutorial first!
                </Typography>
              </CardContent>
            </Card>
            </Link>
          </ButtonBase>
          
          
          <ButtonBase >
            <Link to="./ProcedureMainPage" style={{textDecoration:"none"}}>
            
            <Card className = {classes.cardTwo} >         
              <CardContent className = {classes.content2}>
              <Typography variant="h6" gutterBottom>I have already know the basic knowledge, quickly start now!
              </Typography>
              </CardContent>
            </Card>
            </Link>
          </ButtonBase>
          
        </Card>
      </Backdrop>
    </div>
  );
}





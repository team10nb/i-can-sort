/*
    Author: Yijie Lu
*/

import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#212121",
  },
  cardBackground: {
    display: "flex",
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
  cardOne:{
    width: 230,
    height: 230,
    backgroundColor:"#4caf50",
    color:"white",
    borderRadius:"30px", 
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
    marginTop: "55px",       
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
    localStorage.setItem("first", JSON.stringify(0));
    window.location.href = "/TutorialMainPage";
  };
  const onClick = localStorage.setItem("first", JSON.stringify(0));
  return (
    <div>
      <Backdrop className={classes.backdrop} open={open} >
      <motion.div
  initial={{ opacity: 0.2, scale: 0 }}
  animate={{
    opacity: 1,
    scale: 1,
    
  }}
  transition={{
    type: "spring",
    stiffness: 150,
    damping: 15,
    mass: 0.1,
    
  }}
>
        <Card className = {classes.cardBackground}>
        
        
          <ButtonBase >
            <Link to="./TutorialMainPage" style={{textDecoration:"none"}}>
            <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{
            y: 0,
    opacity: 1
            
          }}
          transition={{
            delay: 0.4
          }}
        >
            <Card className = {classes.cardOne} >
              <CardContent className = {classes.content1}>
                <Typography variant="h6" gutterBottom style={{fontFamily:"inherit", fontWeight:"600"}}>I'm new at this, go to Tutorial first!
                </Typography>
              </CardContent>
            </Card>
            </motion.div>
            </Link>
          </ButtonBase>
          
          

          <ButtonBase >
            <Link to="./ProcedureMainPage" style={{textDecoration:"none"}}>
            <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{
            y: 0,
    opacity: 1
            
          }}
          transition={{
            delay: 0.6
          }}
        >
            <Card className = {classes.cardTwo} >         
              <CardContent className = {classes.content2}>
              <Typography variant="h6" gutterBottom style={{fontFamily:"inherit", fontWeight:"600"}}>I've got' basic knowledge, start now!
              </Typography>
              </CardContent>
            </Card></motion.div>
            </Link>
          </ButtonBase>
          
        </Card>
        </motion.div>
      </Backdrop>
    </div>
  );
}





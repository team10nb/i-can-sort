/*
    Author: Yani Huang
*/
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import bulb from "../../../../Resource/bulb.png";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import BackDrop from '../../../../components/BackDrop/BackDrop';
import {color} from '../../../mainPages/Tutorial';


const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: '#4caf50',
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  function createData(name, meaning) {
    return { name, meaning };
  }
  
  const rows = [
    createData('a = b', 'a equals to b'),
    createData('a > b / a < b ', 'a is bigger than b / a is less than b'),
    createData('a && b', 'a AND b'),
    createData('a || b', 'a OR b'),
    createData('Arr[X]','The Xth element of array. e.g.: Arr = [1,2,3] Arr[0] = 1')
    
  ];
  
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

export default function Expressions(props) {
    const styles ={
        root:{
            display: "flex",
            '& > *': 
            {     
                marginRight: 10,
            },
            backgroundColor:"#EFEFEF", 
            height:"500px",
            width:"750px",
            marginLeft:"15px",
            // marginRight:"20px",

        },
        title:{
            fontSize: 20,
            textAlign: 'center'
        },
        subtitle:{
            fontSize: 15,
            fontWeight: "bold",
            marginLeft: '20px',
        },
        div:{
            paddingLeft:"35px",
            fontSize: 15,
            lineHeight: '2em',
            fontWeight: "400",
            marginLeft: '20px',
        },
        card1:{
            backgroundColor:"#EFEFEF", 
            height:500, 
            width:"55%",
            paddingLeft:"30px",
            paddingTop:"25px"
        },
        card2:{
            backgroundColor:"#EFEFEF", 
            height:500, 
            width:"45%",
            paddingTop:"44px",
            paddingLeft:"20px",
            paddingRight:"30px"
        },
    } 
    const classes = useStyles();
    const message = 
    <p>
        This module will mainly introduce you basic knowlege of <font style={{fontWeight:'bold'}}>pseudocode</font>. You will get to learn syntax of Structured Basic style pseudocode. Hope you Enjoy!
    </p>

    const size = {
      left:240, 
      top:45, 
      bottom:45,
    }
  
    return(
        <div>
          <BackDrop 
            message={message}
            size={size}
            btnColor={color}
          />
         <Card style={styles.root}>
            <CardContent>
            {/* <img src={bulb} height={30} width={30}/> */}
            <h1 style={styles.title}>Expressions</h1>
            {/* <br></br> */}
            <div style={styles.div}>
            In computer science, an <font style = {{fontWeight:'bold'}}>expression</font> is a syntactic entity in a programming language that may be evaluated to determine its value. <br/>Here are some explanations of commen expressions:
            </div>
            <br></br>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center"  width = "280px">Expression</StyledTableCell>
                            <StyledTableCell align="center">Meaning</StyledTableCell>
                        </TableRow>
                    </TableHead>
                <TableBody>
                    {rows.map((row) => (
                    <StyledTableRow key={row.name}>
                    <StyledTableCell  align="center" width = "280px" component="th" scope="row">
                        {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.meaning}</StyledTableCell>
                    </StyledTableRow>
                    ))}
                    </TableBody>
                 </Table>
            </TableContainer>
            </CardContent>
         </Card>
        </div>
    );
}


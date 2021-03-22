import React from 'react';
import Card from '@material-ui/core/Card';
import TerminologyBackDrop from '../../../../components/TutorialTerminology/TerminologyBackDrop';
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
            marginLeft:"22px",
            marginRight:"20px",

        },
        title:{
            fontSize: 20,
            textAlign: 'center'
        },
        subtitle:{
            fontSize: 15,
            fontWeight: "bold",
        },
        div:{
            fontSize: 15,
            lineHeight: '2em',
            fontWeight: "400",
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
        This module will mainly introduce you basic knowlege of <font style={{fontWeight:'bold'}}>pesudocodes</font>. You will get to learn syntax of Structured Basic style pseudocode. Hope you Enjoy!
    </p>
    return(
        <div>
        <TerminologyBackDrop message={message}/>
         <Card style={styles.root}>
            <CardContent>
            <img src={bulb} height={30} width={30}/>
            <h1 style={styles.title}>- Expressions -</h1>
            <br></br>
            <div style={styles.div}>
                Expressions are used to used to _______________. Here are some explanations of commen expressions:
            </div>
            <br></br>
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


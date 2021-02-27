/*
    Author: Yijie Lu, Shiliang Chen
*/

import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import {color} from '../../scenes/mainPages/Correctness';
import {Tick, Cross} from '../TickCross/TickCross';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    buttons: {
        display:"flex",
        marginLeft: 28,
        marginTop: 20,
        marginBottom: 10,
    },
    title:{
        display:"flex",
        marginLeft: 35,
        fontFamily: "inherit",
        fontWeight: "700",
        fontSize:"16px"
    },
    div1:{
        display:"flex",
        marginTop: 0,
        '& > *': {
        margin: theme.spacing(1),
        },
        marginBottom:"19px"
      },
    
   
    button:{
        height:10
    }
    
    
    }));

function createData(str) {
    return {str};
}
      
export default function InputTable(props) {
    const classes = useStyles();

    const {
        legalShuffle,
        illegalShuffle,
        inputLegalString,
        inputIllegalString, 
        isCompleteLegal, 
        isCompleteIllegal, 
        legalClick, 
        illegalClick
    } = props;

    useEffect(() => {
        console.log(isCompleteIllegal)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isCompleteIllegal]);

    const legalRows = [
        createData(inputLegalString[0]),
        createData(inputLegalString[1]),
        createData(inputLegalString[2]),
    ]

    const illegalRows = [
        createData(inputIllegalString[0]),
        createData(inputIllegalString[1]),
        createData(inputIllegalString[2]),

    ]

    return(
        <div className = {classes.root}>
            <div>
                <div className = {classes.title}>  
                Legal Input
                </div>
                
                <div className = {classes.buttons}>                  
                    <Button 
                        variant="contained" 
                        style={{backgroundColor:color, color:"#FFFFFF", marginRight: 10, height: 30, width: 80}}
                        onClick = {legalShuffle}
                        
                    >
                        shuffle
                    </Button>
                    <IconButton 
                        variant="contained" 
                        size = 'small'
                        style={{backgroundColor:color, color:"#FFFFFF"}} 
                        onClick={legalClick}
                        
                    >
                        <PlayArrowIcon  />
                    </IconButton>                   
                </div>
                <div className = {classes.div1}>
                    <TableContainer component={Paper} >
                        <Table className={classes.table} size="small" aria-label="a dense table">
                            <TableHead>
                            <TableRow >
                                <TableCell >Input</TableCell>
                                <TableCell align="center" >Result</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                
                                {legalRows.map((row, key) => (
                                    <TableRow key={key + "legal"} >
                                        <TableCell component="th" scope="row" >
                                            <div style={{width:"60px", fontWeight:"700"}}>{row.str}</div>
                                        </TableCell>
                                        <TableCell align="center"  > <Tick isComplete={isCompleteLegal[key]}/></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
            <Typography variant="overline" display="block" gutterBottom>
               
            </Typography>
            <div className = {classes.title}>
                Illegal Input
            </div>
            
            <div>
                <div className = {classes.buttons}>
                <Button 
                        variant="contained" 
                        style={{backgroundColor:color, color:"#FFFFFF", marginRight: 10, height: 30, width: 80}}
                        onClick = {illegalShuffle}
                    >
                        shuffle
                    </Button>
                    <IconButton 

                        variant="contained" 
                        size = 'small'
                        style={{backgroundColor:color, color:"#FFFFFF"}} 
                        onClick={illegalClick}
                        
                    >
                        <PlayArrowIcon  />
                    </IconButton>               
                </div>
                <div className = {classes.div1}>
                    <TableContainer component={Paper} >
                        <Table className={classes.table} size="small" aria-label="a dense table">
                            <TableHead>
                            <TableRow>
                                <TableCell>Input</TableCell>
                                <TableCell align="center">Result</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                {illegalRows.map((row, key) => (
                                    <TableRow key={key + "illegal"} >
                                        <TableCell component="th" scope="row" >
                                        <div style={{width:"60px", fontWeight:"700"}}>{row.str}</div>
                                        </TableCell>
                                        <TableCell align="center" > <Cross isComplete={isCompleteIllegal[key]}/></TableCell>
                                    </TableRow>
                                ))}   
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
            
            
        </div>
    );
}

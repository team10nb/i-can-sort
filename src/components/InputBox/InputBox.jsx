import React, { useEffect, useState } from 'react';
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
import './Input.css'

const useStyles = makeStyles((theme) => ({
    // root:{
    //     maxHeight: 530
    // },

    div1:{
        display:"flex",
        marginTop: 0,
        '& > *': {
        margin: theme.spacing(1),
        },
      },
    
    table:{
        // maxheight: 170,
        maxheight:50,
        maxwidth: 100
    },

   
    button:{
        height:10
    }
    
    
    }));

    function createData(str) {
        return {str};
      }
      
export default function InputBox(props) {
    const classes = useStyles();
    let classname = 'table';
    let rowclassname = 'tr';
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

    const [isComplete, setIsComplete] = useState(false);

    return(
        <div className = {classes.root}>
            <div>
                <Typography variant="overline" display="block" gutterBottom>  
                Legal Input
                </Typography>
                
                <div className = {classes.div1}>                  
                    <Button 
                        variant="contained" 
                        style={{backgroundColor:color, color:"#FFFFFF"}}
                        onClick = {legalShuffle}
                        
                    >
                        shuffle
                    </Button>
                    <IconButton 
                        variant="contained" 
                        style={{backgroundColor:color, color:"#FFFFFF"}} 
                        onClick={legalClick}
                        
                    >
                        <PlayArrowIcon style={{ fontSize: 13}}/>
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
                                            {row.str}
                                        </TableCell>
                                        <TableCell align="center" > <Tick isComplete={isCompleteLegal[key]}/></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    {/* <table className = {classname}>
                        <tr>
                            <th>Input</th>
                            <th>Result</th>
                        </tr>
                            {legalRows.map((row, key) => (
                                    <tr key={key + "legal"} className = {rowclassname}>
                                        <td component="th" scope="row" >
                                            {row.str}
                                        </td>
                                        <td align="center" > <Tick isComplete={isCompleteLegal[key]}/></td>
                                    </tr>
                            ))}
                        
                    </table> */}
                </div>
            </div>
            <Typography variant="overline" display="block" gutterBottom>
               
            </Typography>
            <Typography variant="overline" display="block" gutterBottom>
                Illegal Input
            </Typography>
            
            <div>
                <div className = {classes.div1}>
                <Button 
                        variant="contained" 
                        style={{backgroundColor:color, color:"#FFFFFF"}}
                        onClick = {illegalShuffle}
                    >
                        shuffle
                    </Button>
                    <IconButton 

                        variant="contained" 
                        style={{backgroundColor:color, color:"#FFFFFF"}} 
                        onClick={illegalClick}
                        
                    >
                        <PlayArrowIcon style={{ fontSize: 13}}/>
                    </IconButton>               
                </div>
                <div>
                    <TableContainer component={Paper} >
                        <Table className={classes.table} size="small" aria-label="a dense table">
                            <TableHead>
                            <TableRow>
                                <TableCell>Input</TableCell>
                                <TableCell align="center">Result</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {/* {illegalArrays.map((val, key) => (
                                    <TableRow key={key + "illegal"} className = {classes.row}>
                                        <TableCell component="th" scope="row" >
                                            {val.toString()}
                                        </TableCell>
                                        <TableCell align="center" > <Cross isComplete={isCompleteIllegal[key]}/></TableCell> */}
                                {illegalRows.map((row, key) => (
                                    <TableRow key={key + "illegal"} >
                                        <TableCell component="th" scope="row" >
                                            {row.str}
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

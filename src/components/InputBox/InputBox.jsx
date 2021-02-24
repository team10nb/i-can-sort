import React, { useEffect } from 'react';
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
    

    div1:{
        display:"flex",
        marginTop: 0,
        '& > *': {
        margin: theme.spacing(1),
        },
      },
    
    table:{
        height: 170,
        width: 180
    },

    row:{
       height: 10,
    },

    button:{
        height:10
    }
    
    
    }));

    function createData(name) {
        return {name};
      }
      
      const rows = [
        createData('1,2,3,4'),
        createData('5,6,7,8'),
        createData('1,2,3,4'),
      ];

export default function InputTable(props) {
    const classes = useStyles();
    const {legalArrays, illegalArrays, isCompleteLegal, isCompleteIllegal, legalClick, illegalClick} = props;
    useEffect(() => {
        console.log(isCompleteIllegal)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isCompleteIllegal]);
    
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
                <div>
                    <TableContainer component={Paper} >
                        <Table className={classes.table} size="small" aria-label="a dense table">
                            <TableHead>
                            <TableRow className = {classes.row}>
                                <TableCell >Input</TableCell>
                                <TableCell align="center" >Result</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                {legalArrays.map((val, key) => (
                                    <TableRow key={key + "legal"} className = {classes.row}>
                                        <TableCell component="th" scope="row" >
                                            {val.toString()}
                                        </TableCell>
                                        <TableCell align="center" > <Tick isComplete={isCompleteLegal[key]}/></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
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
                            {illegalArrays.map((val, key) => (
                                    <TableRow key={key + "illegal"} className = {classes.row}>
                                        <TableCell component="th" scope="row" >
                                            {val.toString()}
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

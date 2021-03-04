import React from 'react';
import {
    makeStyles,
} from "@material-ui/core/styles";
import SwitchAnimation from '../../../../components/SwitchAnimation/SwitchAnimation';
import SwitchSort from '../../../../components/SwitchSort/SwitchSort';
import DynamicCode from '../../../../components/DynamicCode/DynamicCode';
import BubbleSort from '../../../../components/SwitchAnimation/SortingAlgorithms/BubbleSort/BubbleSort';

const useStyles = makeStyles((theme) => ({

    root:{
        display: "flex",
        // '& > *': {
        //     marginTop: theme.spacing(4),
        //   },
        '& > * + *': {     
            marginLeft: theme.spacing(2),
        },
       
    },

}));


export default function Termination() {
    const classes = useStyles();

    const arr = [2, 6, 9, 10, 3];
    const blockNums = [1, 4, 3, 4, 3, 4, 3, 4, 5, 7, 4, 3, 4, 3, 4, 5, 7, 4, 3, 4, 5, 7, 4, 3, 7, 7, 8];

    const {trace, description} = BubbleSort(arr);
    const width = 320; 
    const explainationBoxHeight = 3;

    const props = {
        trace,
        description,
        width,
        explainationBoxHeight,
        blockNums
    };

    return(
        <div className = {classes.root}>
            <DynamicCode {...props}/>
            <DynamicCode {...props}/>
        </div>
        

    );
}

import React from 'react';
import SwitchAnimation from '../../../../components/SwitchAnimation/SwitchAnimation';
import SwitchSort from '../../../../components/SwitchSort/SwitchSort';
import DynamicCode from '../../../../components/DynamicCode/DynamicCode';
import BubbleSort from '../../../../components/SwitchAnimation/SortingAlgorithms/BubbleSort/BubbleSort';


export default function Termination() {

    const arr = [2, 6, 9, 12, 3];
    const blockNums = [1, 4, 3, 4, 3, 4, 3, 4, 5, 7, 4, 3, 4, 3, 4, 5, 7, 4, 3, 4, 5, 7, 4, 3, 7, 7, 8];

    const {trace, description} = BubbleSort(arr);
    const width = 900; 
    const explainationBoxHeight = 3;

    const props = {
        trace,
        description,
        width,
        explainationBoxHeight,
        blockNums
    };

    return(
        <DynamicCode {...props}/>
    );
}

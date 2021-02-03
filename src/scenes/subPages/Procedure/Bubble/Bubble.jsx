import { CardContent } from '@material-ui/core';
import React from 'react';
import {color} from '../../../mainPages/Procedure';
import {intro} from './Introduction/Introduction';
import {operate} from './Operation/Operation';
// import {CardContent} from '../../../mainPages/Procedure';
import ProcedureSubPage from '../ProcedureSubPage';

export default function ProcedureBubble(props) {

    const data = {
        color: color,
        progress: 70,
        history: props.history,      
        intro: intro,
        operate: operate,
    }

    return(
        <div>
            <ProcedureSubPage {...data} />
        </div>
    );
}


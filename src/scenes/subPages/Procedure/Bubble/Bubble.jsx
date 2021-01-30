import React from 'react';
import {color} from '../../../mainPages/Procedure';
import ProcedureSubPage from '../ProcedureSubPage';

export default function ProcedureBubble(props) {

    const data = {
        color: color,
        process: 30,
        history: props.history,
    }

    return(
        <div>
            <ProcedureSubPage {...data} />
        </div>
    );
}



import React from 'react';
import SubScenes from './SubScenes'
// import ButtonGroup from '@material-ui/core/ButtonGroup';
export default function Procedure() {
    const props = {
        color: "primary"
    };
    return(
        <div>
            <SubScenes {...props} />
        </div>
    );
}
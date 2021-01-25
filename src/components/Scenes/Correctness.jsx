import React from 'react';
import Scenes from './SubScenes'
// import ButtonGroup from '@material-ui/core/ButtonGroup';
export default function Procedure() {
    const props = {
        color: "secondary"
    };
    return(
        <div>
            <Scenes {...props} />
        </div>
    );
}
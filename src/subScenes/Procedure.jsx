import React from 'react';
import Scenes from './SubScenes'

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
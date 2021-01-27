import React from 'react';
import Scenes from './Scenes'

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
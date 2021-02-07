import React from 'react';
import {color} from '../../../mainPages/Correctness';

export default function CorrectnessSubPage() {
    const props = {
        color: color,
    };
    return(
        <div>
            <Scenes {...props} />
        </div>
    );
}


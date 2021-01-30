import React from 'react';
import Scenes from '../SubScenes'
import {color} from '../../mainPages/Efficiency';

export default function EfficiencySubPage() {
    const props = {
        color: color,
    };
    return(
        <div>
            <Scenes {...props} />
        </div>
    );
}


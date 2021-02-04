import React from 'react';
// import { SwitchAnimation } from "./components/SwitchAnimation/SwitchAnimation";
import { SwitchAnimation } from '../../../../../components/SwitchAnimation/SwitchAnimation';

const introMessage = <div>
                <h1>Bubble sort</h1>
                {/* <h2><font color = "white"> hello world </font></h2> */}
                <p style={{textAlign:"left"}}>A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.</p>
            </div>;

const intro = {
    introMessage: introMessage,
    animation: <SwitchAnimation/>,
}

export {intro};
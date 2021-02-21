import React from 'react';
import { render } from '@testing-library/react';
import ProcedureSubPage from './ProcedureSubPage';
import BubbleIntro from '../../../components/Introduction/BubbleSort';
import SwitchSort from '../../../components/SwitchSort/SwitchSort';
const props = {
    color: "#FFFFFF",
    algorithm: "bubble",
    progress:localStorage.getItem("bubble") ? JSON.parse(localStorage.getItem("bubble")) : [false, false, false],
    
    intro:{
        introMessage: 'intro',
        animation: <BubbleIntro />,
    },
    operate:<SwitchSort sort={"Bubble"}/>
}

test('should match Snapshot', () => {
    const content = render(<ProcedureSubPage {...props}/>);
    expect(content).toMatchSnapshot();
})

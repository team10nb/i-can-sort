import React from 'react';
import { render } from '@testing-library/react';
import ProcedureSubPage from './ProcedureSubPage';
import BubbleIntro from '../../../components/ProcedureIntroduction/BubbleSort';
import ProcedureOperation from '../../../components/ProcedureOperation/ProcedureOperation';
const props = {
    color: "#FFFFFF",
    algorithm: "bubble",
    progress:localStorage.getItem("bubble") ? JSON.parse(localStorage.getItem("bubble")) : [false, false, false],
    
    intro:{
        introMessage: 'intro',
        animation: <BubbleIntro />,
    },
    operate:<ProcedureOperation sort={"Bubble"}/>
}

jest.mock("react-swipeable-views", () => {
    return {
        __esModule: true,
        default: () => <div>mockCorrectnessIntroduction</div>,
    }
});
jest.mock("@material-ui/core/styles", () => {
    return {
        ...jest.requireActual('@material-ui/core/styles'),
        ThemeProvider: () => <div>mockCorrectnessIntroduction</div>,
    }
});


test('should match Snapshot', () => {
    
    const content = render(<ProcedureSubPage {...props}/>);
    expect(content).toMatchSnapshot();
})

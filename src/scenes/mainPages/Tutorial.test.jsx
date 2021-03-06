import React from 'react';
import { render } from '@testing-library/react';
import { StaticRouter } from 'react-router'
import TutorialMainPage from './Tutorial';
import {TutorialChoiceMenu, color} from './Tutorial';

test('should export theme color', () =>{
    const testColor = color;
    const TutorialThemeColor = '#4caf50';
    expect(testColor).toBe(TutorialThemeColor);
})

test('should contain TutorialChoiceMenu', () => {
    const {getByText} = render(
        <StaticRouter>
            <TutorialChoiceMenu />
        </StaticRouter>
    );
    getByText("Tutorial");
    getByText("Procedure");
    getByText("Correctness");
})

test('should match Snapshot', () => {
    const props = { location: "/", }
    const content = render(
        <StaticRouter>
            <TutorialMainPage {...props}/>
        </StaticRouter>
    );
    expect(content).toMatchSnapshot();
})
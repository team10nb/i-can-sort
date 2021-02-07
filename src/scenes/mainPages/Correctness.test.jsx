import React from 'react';
import { render } from '@testing-library/react';
import { StaticRouter } from 'react-router'
import CorrectnessMainPage from './Correctness';
import { color, CorrectnessChoiceMenu } from './Correctness';

test('should export theme color', () =>{
    const testColor = color;
    const CorrectnessThemeColor = '#ff6f00';
    expect(testColor).toBe(CorrectnessThemeColor);
})

test('should contain CorrectnessChoiceMenu', () => {
    const {getByText} = render(
        <StaticRouter>
            <CorrectnessChoiceMenu />
        </StaticRouter>
    );
    getByText("Tutorial");
    getByText("Procedure");
    getByText("Efficiency");
    getByText("Correctness");
    getByText("Exercise");
})

test('should match Snapshot', () => {
    const props = { location: "/", }
    const content = render(
        <StaticRouter>
            <CorrectnessMainPage {...props}/>
        </StaticRouter>
    );
    expect(content).toMatchSnapshot();
})
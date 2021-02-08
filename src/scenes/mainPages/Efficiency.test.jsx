import React from 'react';
import { render } from '@testing-library/react';
import { StaticRouter } from 'react-router'
import EfficiencyMainPage from './Efficiency';
import {EfficiencyChoiceMenu, color} from './Efficiency';

test('should export theme color', () =>{
    const testColor = color;
    const EfficiencyThemeColor = '#4caf50';
    expect(testColor).toBe(EfficiencyThemeColor);
})

test('should contain CorrectnessChoiceMenu', () => {
    const {getByText} = render(
        <StaticRouter>
            <EfficiencyChoiceMenu />
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
            <EfficiencyMainPage {...props}/>
        </StaticRouter>
    );
    expect(content).toMatchSnapshot();
})
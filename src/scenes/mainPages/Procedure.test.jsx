import React from 'react';
import { render } from '@testing-library/react';
import { color, ProcedureChoiceMenu } from './Procedure';
import ProcedureMainPage from './Procedure';
import { StaticRouter } from 'react-router'

test('should export theme color', () =>{
    const testColor = color;
    const procedureThemeColor = '#1565c0';
    expect(testColor).toBe(procedureThemeColor);
})

test('should contain ProcedureChoiceMenu', () => {
    const {getByText} = render(
        <StaticRouter>
            <ProcedureChoiceMenu />
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
            <ProcedureMainPage {...props}/>
        </StaticRouter>
    );
    expect(content).toMatchSnapshot();
})
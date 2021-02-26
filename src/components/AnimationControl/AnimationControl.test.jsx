/*
    Author: Shiliang Chen, Ruizi Han
*/

import { render } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import AnimationControl from "./AnimationControl";

const handleResetClick = jest.fn();
const stepForward = jest.fn();
const stepBackward = jest.fn();
const pause = jest.fn();
const resume = jest.fn();
const handleClick = jest.fn();
const handleClose = jest.fn();


const props = { handleResetClick, stepForward, stepBackward, pause, resume, handleClick, handleClose};



test('should contain 5 buttons', () => {
    const {getAllByRole} = render(<AnimationControl {...props}/>);
    const buttons = getAllByRole('button');
    expect(buttons.length).toBe(5);
})

test('should call functions', () => {
    const {getAllByRole} = render(<AnimationControl {...props}/>);
    const buttons = getAllByRole('button');

    userEvent.click(buttons[0]);
    userEvent.click(buttons[1]);
    userEvent.click(buttons[2]);
    userEvent.click(buttons[3]);
    userEvent.click(buttons[4]);

    expect(handleResetClick).toBeCalledTimes(1);
    expect(stepForward).toBeCalledTimes(1);
    expect(stepBackward).toBeCalledTimes(1);
    expect(resume).toBeCalledTimes(1);
    expect(handleClick).toBeCalledTimes(1);
    
})

test('should match AnimationControl snapshot', () => {
    const content = render(<AnimationControl {...props}/>);
    expect(content).toMatchSnapshot();
})

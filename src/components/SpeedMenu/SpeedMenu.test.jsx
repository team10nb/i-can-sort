/*
    Author: Shiliang Chen, Ruizi Han
*/

import { render } from "@testing-library/react";
import SpeedMenu from "../SpeedMenu/SpeedMenu";
import userEvent from "@testing-library/user-event";


let anchorEl = null;
const handleClick = jest.fn((event)=>{anchorEl = event.currentTarget});
const handleClose = jest.fn((event)=>{anchorEl = null});
const speed = "speedMenu";
const props = {handleClick, handleClose, speed, anchorEl}

test('should have buttons', () => {
    const content = render(<SpeedMenu {...props}/>);
    const button = content.getByText("speedMenu");
    userEvent.click(button);
    content.getByText("0.25x");
    content.getByText("0.5x");
    content.getByText("1x");
    content.getByText("2x");
    content.getByText("4x");
});

test('should call handleClick and close', () => {
    const content = render(<SpeedMenu {...props}/>);
    const button = content.getByText("speedMenu");
    userEvent.click(button);
    const speedOption = content.getByText("0.25x");
    content.getByText("0.5x");
    content.getByText("1x");
    content.getByText("2x");
    content.getByText("4x");
    userEvent.click(speedOption);
    expect(handleClick).toBeCalledTimes(1);
    expect(handleClose).toBeCalledTimes(1);
})

test('should match SpeedMenu snapshot', () => {
    const content = render(<SpeedMenu {...props}/>);
    expect(content).toMatchSnapshot();
})



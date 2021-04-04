/*
    Author: Yijie Lu, Ruizi Han
*/

import { Input } from "@material-ui/core";
import { render } from "@testing-library/react";
import InputBar from "./InputBar";
import userEvent from "@testing-library/user-event";

const mockHandleChange = jest.fn();
const mockCheckFormat = jest.fn();
const mockShuffle = jest.fn();

const props = {
    defaultArr: "2,1,6,10,9,12,8,3",
    isValid: true,
    wrongMsg: "Please enter no more than 15 numbers that between 1-30.",
    handleChange: mockHandleChange,
    checkFormat: mockCheckFormat,
    shuffle: mockShuffle,
    inputString: "inputString",
};

it("should contain buttons", () => {
    const { getAllByRole } = render(<InputBar {...props} />);
    const buttons = getAllByRole("button");
    expect(buttons.length).toBe(2);
});

it("should call functions", () => {
    const { getAllByRole } = render(<InputBar {...props} />);
    const buttons = getAllByRole("button");

    userEvent.click(buttons[0]);
    userEvent.click(buttons[1]);

    expect(mockCheckFormat).toBeCalledTimes(1);
    expect(mockShuffle).toBeCalledTimes(1);
});

it("should match snapshot", () => {
    const content = render(<InputBar {...props} />);
    expect(content).toMatchSnapshot();
});

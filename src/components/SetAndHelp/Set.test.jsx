/*
    Author: Yijie Lu
*/
import { render } from "@testing-library/react";
import Set from "./Set";

const mockHandleClick = jest.fn();

const props = {
    toggleDrawer: mockHandleClick,
};

test("should contain 1 buttons", () => {
    const { getAllByRole } = render(<Set {...props} />);
    const buttons = getAllByRole("button");
    expect(buttons.length).toBe(1);
});

test("set button should match Snapshot", () => {
    const content = render(<Set {...props} />);
    expect(content).toMatchSnapshot();
});

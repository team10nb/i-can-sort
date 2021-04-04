/*
    Author: Shiliang Chen, Yijie Lu
*/
import FirstInBackdrop from "./FirstInBackdrop";
import { render } from "@testing-library/react";

jest.mock("react-router-dom", () => {
    return {
        Link: () => <div>mockLink</div>,
    };
});

test("should match FirstInBackdrop snapshot", () => {
    const content = render(<FirstInBackdrop />);
    expect(content).toMatchSnapshot();
});

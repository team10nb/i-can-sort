/*
    Author: Yuting Jiang
*/

import { render } from "@testing-library/react";
import TipFrame from "./TipFrame";

test("should contain message", () => {
    const message = "message";

    const { getByText } = render(<TipFrame message={message} />);
    getByText("message");
});

test("should contain button", () => {
    const message = "message";

    const { getByText } = render(<TipFrame message={message} />);
    getByText("OK");
});

test("should match Snapshot", () => {
    const message = "message";

    const content = render(<TipFrame message={message} />);
    expect(content).toMatchSnapshot();
});

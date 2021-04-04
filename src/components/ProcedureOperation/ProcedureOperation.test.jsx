/*
    Author: Shiliang Chen, Ruizi Han
*/

import { render } from "@testing-library/react";
import ProcedureOperation from "./ProcedureOperation";
import * as InputBar from "../InputBar/InputBar";
import * as SwitchAnimation from "../SwitchAnimation/SwitchAnimation";

const props = {
    sort: "Bubble",
};

it("should call InputBar", () => {
    jest.restoreAllMocks();
    const inputSpy = jest
        .spyOn(InputBar, "default")
        .mockImplementation(() => <div>mockInputBar</div>);
    const { getByText } = render(<ProcedureOperation {...props} />);
    getByText("mockInputBar");
    expect(inputSpy).toBeCalledTimes(1);
});

it("should call SwitchAnimation", () => {
    jest.restoreAllMocks();
    const switchSpy = jest
        .spyOn(SwitchAnimation, "default")
        .mockImplementation(() => <div>mockSwitchAnimation</div>);
    const { getByText } = render(<ProcedureOperation {...props} />);
    getByText("mockSwitchAnimation");
    expect(switchSpy).toBeCalledTimes(1);
});

it("should match snapshot", () => {
    jest.restoreAllMocks();
    const content = render(<ProcedureOperation {...props} />);
    expect(content).toMatchSnapshot();
});

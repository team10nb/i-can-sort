/*
    Author: Shiliang Chen, Yuting Jiang
*/

import { render } from "@testing-library/react";
import Module from "./Module";
import * as ModuleButtons from "../ModuleButton/ModuleButton";

jest.mock("../ModuleProgress/ModuleProgress", () => {
    return {
        __esModule: true,
        default: () => <div>mockModuleProgress</div>,
    }
});

test("should call two modules", () => {
    const buttonSpy = jest
        .spyOn(ModuleButtons, "default")
        .mockImplementation(() => <div>mockModuleButton</div>);

    const content = render(<Module />);

    content.getByText("mockModuleProgress");
    content.getByText("mockModuleButton");

    expect(buttonSpy).toBeCalledTimes(1);

    expect(content).toMatchSnapshot();
    
});

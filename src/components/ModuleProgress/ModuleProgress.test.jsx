/*
    Author: Shiliang Chen, Yuting Jiang
*/

import { render } from "@testing-library/react";
import ModuleProgress from "./ModuleProgress";

test("should match Snapshot", () => {


    const props = { width: 200, progress: 10 };
    const content = render(<ModuleProgress {...props} />);
    expect(content).toMatchSnapshot();
});

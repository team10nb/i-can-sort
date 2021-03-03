/*
    Author: Shiliang Chen, Yijie Lu
*/

import TickCross from "./TickCross";
import { render } from "@testing-library/react";

jest.mock("framer-motion", () => {
    return {
        motion: {path: () => <div>mockModuleProgress</div>},
    }
});

test( 'should match TickCross snapshot', () => {
    const content = render(<TickCross/>);

    expect(content).toMatchSnapshot();
})

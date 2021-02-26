/*
    Author: Ruizi Han, Shiliang Chen
*/

import { render } from "@testing-library/react";
import ExplainationBox from "./ExplainationBox";

const props = {
    width: 60,
};

it('should match snapshot', () => {

    const content = render(<ExplainationBox {...props} />);
    expect(content).toMatchSnapshot();
})

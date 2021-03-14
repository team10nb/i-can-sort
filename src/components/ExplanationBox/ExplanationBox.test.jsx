/*
    Author: Ruizi Han, Shiliang Chen
*/

import { render } from "@testing-library/react";
import ExplanationBox from "./ExplanationBox";

const props = {
    width: 60,
};

it('should match snapshot', () => {

    const content = render(<ExplanationBox {...props} />);
    expect(content).toMatchSnapshot();
})

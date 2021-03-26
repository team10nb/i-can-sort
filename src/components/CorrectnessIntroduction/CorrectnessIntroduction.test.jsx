/*
    Author: Shiliang Chen, Yijie Lu
*/

import { render } from "@testing-library/react";
import CorrectnessIntroduction from "./CorrectnessIntroduction";
import * as InputTables from "../InputTable/InputTable";

test( 'should call InputTable', () => {
    const inputTableSpy = jest
        .spyOn(InputTables, "default")
        .mockImplementation(() => <div>mockInputTable</div>);


    const content = render(<CorrectnessIntroduction/>);

    expect(inputTableSpy).toBeCalled();

})

test( 'should match CorrectnessIntroduction snapshot', () => {
    const inputTableSpy = jest
        .spyOn(InputTables, "default")
        .mockImplementation(() => <div>mockInputTable</div>);


    const content = render(<CorrectnessIntroduction/>);

    expect(content).toMatchSnapshot();

})

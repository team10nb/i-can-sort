/*
    Author: Shiliang Chen, Yijie Lu
*/

import { render } from "@testing-library/react";
import InputTutorial from "./InputTutorial";
import * as InputTables from "../InputTable/InputTable";

test( 'should call InputTable', () => {
    const inputTableSpy = jest
        .spyOn(InputTables, "default")
        .mockImplementation(() => <div>mockInputTable</div>);


    const content = render(<InputTutorial/>);

    expect(inputTableSpy).toBeCalled();

})

test( 'should match InputTutorial snapshot', () => {
    const inputTableSpy = jest
        .spyOn(InputTables, "default")
        .mockImplementation(() => <div>mockInputTable</div>);


    const content = render(<InputTutorial/>);

    expect(content).toMatchSnapshot();

})

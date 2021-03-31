/*
    Author: Shiliang Chen, Yijie Lu
*/

import { render } from "@testing-library/react";
import Input from "./Input";
import * as InputTables from "../../../../../components/InputTable/InputTable";

test( 'should call InputTable', () => {
    const inputTableSpy = jest
        .spyOn(InputTables, "default")
        .mockImplementation(() => <div>mockInputTable</div>);


    const content = render(<Input/>);

    expect(inputTableSpy).toBeCalled();

})

test( 'should match snapshot', () => {
    const inputTableSpy = jest
        .spyOn(InputTables, "default")
        .mockImplementation(() => <div>mockInputTable</div>);


    const content = render(<Input/>);

    expect(content).toMatchSnapshot();

})

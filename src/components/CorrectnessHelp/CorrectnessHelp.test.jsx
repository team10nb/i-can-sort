/*
    Author: Shiliang Chen, Yijie Lu
*/
import CorrectnessHelp from "./CorrectnessHelp";
import { render } from "@testing-library/react";



test( 'should contain buttons', () => {
    const content = render(<CorrectnessHelp  />)
    const { getAllByRole} = content;


    const buttons = getAllByRole("button");
    expect(buttons.length).toBe(1);

})

test( 'should match CorrectnessHelp snapshot', () => {
    const content = render(<CorrectnessHelp   />);
    expect(content).toMatchSnapshot();

})

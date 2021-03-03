/*
    Author: Shiliang Chen, Yijie Lu
*/
import InputTable from "./InputTable";
import { render } from "@testing-library/react";

jest.mock("../TickCross/TickCross",()=>{
    return {
        Tick: () => <div>mockTick</div>,
        Cross: () => <div>mockCross</div>,

    }
})


const props = {
    inputLegalString:["2,1,6,10","9,12,8,3","3,2,17,10",],
    inputIllegalString:["2,a,6,10","9,*,&,3","3,#,&,10",],
    legalArrays:["2,1,6,10","9,12,8,3","3,2,17,10",],
    isCompleteIllegal:[false,false,false,],
    isCompleteLegal:[false,false,false],
}


test( 'should contain title & button', () => {
    const content = render(<InputTable {...props}  />)
    const {getByText, getAllByText, getAllByRole} = content;
    getByText("Legal Input");
    getByText("Illegal Input");

    getAllByText("Input");
    getAllByText("Result");

    const buttons = getAllByRole("button");
    expect(buttons.length).toBe(4);

})

test( 'should match InputTable snapshot', () => {
    const content = render(<InputTable {...props}  />);
    expect(content).toMatchSnapshot();

})

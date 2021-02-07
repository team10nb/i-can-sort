
import { render } from "@testing-library/react";
import ProcedureSubPage from "./ProcedureSubPage";

const mockHandleClick = jest.fn();
//
const props = { 
    handleChange: mockHandleClick, 
    color: '#1565c0', 
    };

test('should match snapshot', () => {
//
    const content = render(<ProcedureSubPage {...props}/>);
    expect(content).toMatchSnapshot();

})

// test('should call home button',() => {
    
//     const {getAllByRole} = render(<ProcedureSubPage {...props}/>);
//     const buttons = getAllByRole('button');
//     expect(buttons.length).toBe(1);

// })




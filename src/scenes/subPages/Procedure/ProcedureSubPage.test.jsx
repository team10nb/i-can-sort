
import { render } from "@testing-library/react";
import ProcedureSubPage from "./ProcedureSubPage";

const handleClick = jest.fn();
const color = '#1565c0';
const props = { handleClick, color};

test('should match snapshot', () => {

    const content = render(<ProcedureSubPage {...props}/>);
    expect(content).toMatchSnapshot();

})

test('should call  button',() => {
    
    const {getAllByRole} = render(<ProcedureSubPage {...props}/>);
    const buttons = getAllByRole('button');
    expect(buttons.length).toBe(1);

})


import { render } from '@testing-library/react';
import Set from './SetAndHelp';
import Help from './SetAndHelp'


test('set should contain two buttons', () => {
    const toggleDrawer = jest.fn();
    const {getAllByRole} = render(<Set {...toggleDrawer}/>);
    const buttons = getAllByRole('button');
    expect(buttons.length).toBe(2);
})

test('help should contain two buttons', () => {
    const handleClick = jest.fn();
    const {getAllByRole} = render(<Help {...handleClick}/>);
    const buttons = getAllByRole('button');
    expect(buttons.length).toBe(2);
})



test('set button should match Snapshot', () => {
    
    const mockHandleClick = jest.fn();
    
   
    const props = {
        arialabel: "setting",
        onClick: mockHandleClick,
    };
//
    const content = render(<Set {...props} />);
    expect(content).toMatchSnapshot();
})

test('help button should match Snapshot', () => {
    
    const mockHandleClick = jest.fn();
    
   
    const props = {
        arialabel: "help",
        onClick: mockHandleClick,
    };
//
const content = render(<Help {...props} />);
expect(content).toMatchSnapshot();
})



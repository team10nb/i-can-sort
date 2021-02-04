import { render } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import Set from './SetAndHelp';
import Help from './SetAndHelp'
import IconButton from '@material-ui/core/IconButton';

// test('set button should call onClick', () => {
    
//     const mockHandleClick = jest.fn();
    
    
//     const props = {
//         // arialabel: "help",
//         onClick: mockHandleClick,
//     };

//     const {getByText} = render(<Set {...props} />);
//     const button = getByText();
//     userEvent.click(button);
//     expect(mockHandleClick).toBeCalledTimes(1);

// })

xit('set button should match Snapshot', () => {
    
    const mockHandleClick = jest.fn();
    
   
    const props = {
        arialabel: "setting",
        onClick: mockHandleClick,
    };
//
    const content = render(<Set {...props} />);
    expect(content).toMatchSnapshot();
})

xit('help button should match Snapshot', () => {
    
    const mockHandleClick = jest.fn();
    
   
    const props = {
        arialabel: "help",
        onClick: mockHandleClick,
    };
//
const content = render(<Help {...props} />);
expect(content).toMatchSnapshot();
})



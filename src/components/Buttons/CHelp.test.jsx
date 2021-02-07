import { render } from '@testing-library/react';
import CHelp from './CHelp';

const mockHandleClick = jest.fn();
    

const props = {
    color: '#1565c0',
    handleOpen: mockHandleClick,
};
test('should contain 1 buttons', () => {
    const {getAllByRole} = render(<CHelp {...props}/>);
    const buttons = getAllByRole('button');
    expect(buttons.length).toBe(1);
})

test('help button should match Snapshot', () => {
    
 
const content = render(<CHelp {...props} />);
expect(content).toMatchSnapshot();
})
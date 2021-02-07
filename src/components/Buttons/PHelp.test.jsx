import { render } from '@testing-library/react';
import PHelp from './PHelp';

const mockHandleClick = jest.fn();
    

const props = {
    color: '#ff6f00',
    handleOpen: mockHandleClick,
};

test('should contain 1 buttons', () => {
    const {getAllByRole} = render(<PHelp {...props}/>);
    const buttons = getAllByRole('button');
    expect(buttons.length).toBe(1);
})

test('help button should match Snapshot', () => {  
    
const content = render(<PHelp {...props} />);
expect(content).toMatchSnapshot();
})
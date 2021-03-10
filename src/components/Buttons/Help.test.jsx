/*
    Author: Yijie Lu
*/
import { render } from '@testing-library/react';
import Help from './Help';

const mockHandleClick = jest.fn();
    

const props = {
    color: '#1565c0',
    handleOpen: mockHandleClick,
};
test('should contain 1 buttons', () => {
    const {getAllByRole} = render(<Help {...props}/>);
    const buttons = getAllByRole('button');
    expect(buttons.length).toBe(1);
})

test('help button should match Snapshot', () => {
    
 
const content = render(<Help {...props} />);
expect(content).toMatchSnapshot();
})

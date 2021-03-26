/*
    Author: Yijie Lu
*/
import { render } from '@testing-library/react';
import ExplanationFrame from './ExplanationFrame';

const mockHandleClick = jest.fn();
    
const data = {
    color:"#4caf50",
    logoFinal:'../../resource/ForLoop.png',
    stepNumber:1,
    picHeight:"350px",
    avatarMarginLeft:"9px",
    avatarMarginTop:"9px",
    handleOpen: mockHandleClick,
  };

test('should contain 1 buttons', () => {
    const {getAllByRole} = render(<ExplanationFrame {...data}/>);
    const buttons = getAllByRole('button');
    expect(buttons.length).toBe(1);
})

test('help button should match Snapshot', () => {
const content = render(<ExplanationFrame {...data} />);
expect(content).toMatchSnapshot();
})

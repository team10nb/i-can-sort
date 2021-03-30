/*
    Author: Yuting Jiang
*/

import { render } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import AlgorithmButton from './AlgorithmButton';

test('should contain title and code', () => {
    
    const mockHandleClick = jest.fn();
    const title = "title";
    const code = "code";

    const {getByText} = render(<AlgorithmButton title={title} code={code} onClick={mockHandleClick} />);
    getByText("title");
    getByText("code");

})

test('should call onClick', () => {
    
    const mockHandleClick = jest.fn();
    const title = "title";

    const {getByText} = render(<AlgorithmButton title={title} onClick={mockHandleClick} />);
    const button = getByText("title");
    userEvent.click(button);
    expect(mockHandleClick).toBeCalledTimes(1);

})


test('should match Snapshot', () => {
    
    const mockHandleClick = jest.fn();
    const title = "title";
    const code = "code";

    const content = render(<AlgorithmButton title={title} code={code} onClick={mockHandleClick} />);
    expect(content).toMatchSnapshot();

})


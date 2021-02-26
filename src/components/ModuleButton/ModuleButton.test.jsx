/*
    Author: Shiliang Chen, Yuting Jiang
*/

import { render } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import ModuleButton from './ModuleButton';

test('should contain Bubble Sort', () => {
    
    const mockHandleClick = jest.fn();
    
    const image = {
        static: "./logo512.png",
        gif: "sorting.gif",
        title: "Bubble sort",
    };

    const props = {
        image: image,
        width: 200,
        height: 200,
        onClick: mockHandleClick,
    };

    const {getByText} = render(<ModuleButton {...props} />);
    getByText("Bubble sort");
    

})

test('should call onClick', () => {
    
    const mockHandleClick = jest.fn();
    
    const image = {
        static: "./logo512.png",
        gif: "sorting.gif",
        title: "Bubble sort",
    };

    const props = {
        image: image,
        width: 200,
        height: 200,
        onClick: mockHandleClick,
    };

    const {getByText} = render(<ModuleButton {...props} />);
    const button = getByText("Bubble sort");
    userEvent.click(button);
    expect(mockHandleClick).toBeCalledTimes(1);

})


test('should match Snapshot', () => {
    
    const mockHandleClick = jest.fn();
    
    const image = {
        static: "./logo512.png",
        gif: "sorting.gif",
        title: "Bubble sort",
    };

    const props = {
        image: image,
        width: 200,
        height: 200,
        onClick: mockHandleClick,
    };

    const content = render(<ModuleButton {...props} />);
    expect(content).toMatchSnapshot();

})


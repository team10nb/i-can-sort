
import { render } from '@testing-library/react';
import CorrectnessTutorial from './CorrectnessTutorial';

jest.mock("./Tutorial/Input/Input", () => {
    return {
        __esModule: true,
        default: () => <div>mockInput</div>,
    }
});

test('should contain buttons', () => {
    const {getAllByText} = render(        
            <CorrectnessTutorial />
    );
    getAllByText("Termination");
    getAllByText("Introduction");
    getAllByText("Partial Correctness");
    getAllByText("Total Correctness");
    getAllByText("Example");

    getAllByText("Next");
    getAllByText("Back");
})

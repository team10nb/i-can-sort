import { render } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import CorrectnessTutorial from './CorrectnessTutorial';

// const handleNext = jest.fn();
// let anchorEl = null;
const handleNext = jest.fn();

const props = handleNext;

test('should contain buttons', () => {
    const {getAllByText} = render(        
            <CorrectnessTutorial />
    );
    getAllByText("Input");
    getAllByText("Input_Def");
    getAllByText("Termination");
    getAllByText("Termination_Def");
    getAllByText("Conclusion");
    getAllByText("Partial Correctness");
    getAllByText("Total Correctness");
    getAllByText("Partial_Example");
    getAllByText("Total_Example");
    getAllByText("Correctness_Intro");
    getAllByText("Next");
    getAllByText("Back");
})



test('should match Snapshot', () => {
    const content = render(<CorrectnessTutorial />);
    expect(content).toMatchSnapshot();
})


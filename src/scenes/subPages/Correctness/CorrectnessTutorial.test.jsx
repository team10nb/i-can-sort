
import { render } from '@testing-library/react';
import CorrectnessTutorial from './CorrectnessTutorial';

jest.mock("../../../components/InputTutorial/InputTutorial", () => {
    return {
        __esModule: true,
        default: () => <div>mockInputTutorial</div>,
    }
});

test('should contain buttons', () => {
    const {getAllByText} = render(        
            <CorrectnessTutorial />
    );
    // getAllByText("Input");
    // getAllByText("Input_Def");
    getAllByText("Termination");
    // getAllByText("Termination_Def");
    getAllByText("Introduction");
    getAllByText("Partial Correctness");
    getAllByText("Total Correctness");
    // getAllByText("Partial_Example");
    getAllByText("Example");
    
    // getAllByText("Correctness_Intro");

    getAllByText("Next");
    getAllByText("Back");
})



// test('should match Snapshot', () => {
//     const content = render(<CorrectnessTutorial />);
//     expect(content).toMatchSnapshot();
// })


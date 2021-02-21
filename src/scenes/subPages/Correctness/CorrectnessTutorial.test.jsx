import { render } from '@testing-library/react';
import CorrectnessTutorial from './CorrectnessTutorial';



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


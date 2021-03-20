/*
    Author: Shiliang Chen, Yijie Lu
*/
import FirstInBackdrop from "./FirstInBackdrop";
import { render } from "@testing-library/react";

jest.mock("react-router-dom",()=>{
    return {
        Link: () => <div>mockLink</div>,

    }
})

// test( 'should contain buttons', () => {
//     const content = render(<FirstInBackdrop  />)
//     const {getByText, getAllByText, getAllByRole} = content;
//     getByText("I'm new at this, go to Tutorial first!");
//     getByText("I've got' basic knowledge, start now!");




// })

test( 'should match FirstInBackdrop snapshot', () => {
    const content = render(<FirstInBackdrop   />);
    expect(content).toMatchSnapshot();

})

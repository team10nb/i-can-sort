import { render } from "@testing-library/react";
import Bubble from "./Bubble";


const props = { 
    color: '#1565c0',
    progress: 70,    
    intro: 'hello world',
    operate: 'hello world',
};

test('should match snapshot', () => {

    const content = render(<Bubble {...props}/>);
    expect(content).toMatchSnapshot();

})



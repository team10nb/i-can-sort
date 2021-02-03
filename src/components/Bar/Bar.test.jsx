import { render } from "@testing-library/react";
import Bar from "./Bar";

it('should match snapshot', () => {
    const color = 'red';
    const num = 90;
    const bar = render(<Bar color={color} num={num}/>);
    expect(bar).toMatchSnapshot();
})
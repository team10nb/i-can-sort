import { render } from "@testing-library/react";
import SwitchAnimation from "../SwitchAnimation/SwitchAnimation";
import * as AnimationSliders from "../AnimationSlider/AnimationSlider";
import * as AnimationControls from "../AnimationControl/AnimationControl";

const trace = [
    [
        { height: "50px", backgroundColor: "#FF008C", key: '1' },
        { height: "30px", backgroundColor: "#D309E1", key: '2' },
        { height: "90px", backgroundColor: "#9C1AFF", key: '3' },
        { height: "10px", backgroundColor: "#7700FF", key: '4' },
        { height: "20px", backgroundColor: "#66AA00", key: '5' },
    ],[
        { height: "50px", backgroundColor: "#FF008C", key: '1' },
        { height: "30px", backgroundColor: "#D309E1", key: '2' },
        { height: "90px", backgroundColor: "#9C1AFF", key: '3' },
        { height: "10px", backgroundColor: "#7700FF", key: '4' },
        { height: "20px", backgroundColor: "#66AA00", key: '5' },
    ],

];

const description = ["", ""];

const props = {description, trace}

test('should call AnimationSlider', () => {
    jest.restoreAllMocks();
    const sliderSpy = jest.spyOn(AnimationSliders, "default").mockImplementation(() => <div>mockAnimationSlider</div>);
    const content = render(<SwitchAnimation {...props}/>);
    content.getByText("mockAnimationSlider");
    expect(sliderSpy).toBeCalledTimes(1);
})

test('should call AnimationControl', () => {
    jest.restoreAllMocks();
    const controlSpy = jest.spyOn(AnimationControls, "default").mockImplementation(() => <div>mockAnimationControl</div>);

    const {getByText} = render(<SwitchAnimation {...props}/>);
    getByText("mockAnimationControl");
    expect(controlSpy).toBeCalledTimes(1);
});

test('should match snapshot', () => {
    jest.restoreAllMocks();
    // jest.resetModules();
    const content = render(<SwitchAnimation {...props}/>);

    expect(content).toMatchSnapshot();
})

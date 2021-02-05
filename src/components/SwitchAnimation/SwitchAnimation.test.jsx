import { render } from "@testing-library/react";
import SwitchAnimation from "./SwitchAnimation";
import * as AnimationSliders from "../AnimationSlider/AnimationSlider";
import * as AnimationControls from "../AnimationControl/AnimationControl";

test('should call AnimationSlider', () => {
    const sliderSpy = jest.spyOn(AnimationSliders, "default").mockImplementation(() => <div>mockAnimationSlider</div>);

    const {getByText} = render(<SwitchAnimation />);
    getByText("mockAnimationSlider");
    expect(sliderSpy).toBeCalledTimes(1);
})

test('should call AnimationControl', () => {
    jest.restoreAllMocks();
    const controlSpy = jest.spyOn(AnimationControls, "default").mockImplementation(() => <div>mockAnimationControl</div>);

    const {getByText} = render(<SwitchAnimation />);
    getByText("mockAnimationControl");
    expect(controlSpy).toBeCalledTimes(1);
});

test('should match snapshot', () => {
    jest.restoreAllMocks();
    // jest.resetModules();
    const content = render(<SwitchAnimation />);

    expect(content).toMatchSnapshot();
})

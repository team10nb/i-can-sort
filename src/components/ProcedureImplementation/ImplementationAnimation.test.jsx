/*
    Author: Ruizi Han
*/

import { render } from "@testing-library/react";
import ImplementationAnimation from './ImplementationAnimation';
import * as InputBar from "../InputBar/InputBar";
import * as AnimationSliders from "../AnimationSlider/AnimationSlider";
import * as AnimationControls from "../AnimationControl/AnimationControl";
import * as ExplanationBoxes from "../ExplanationBox/ExplanationBox";
import BubbleSort from "../SwitchAnimation/SortingAlgorithms/BubbleSort/BubbleSort";
import { Bubble } from "./PseudoCode";

const props = {
    title: "test",
    algorithm: "test",
    sort: BubbleSort,
    Code: Bubble,
};

it('should call InputBar', () => {
    jest.restoreAllMocks();
    const inputSpy = jest.spyOn(InputBar, "default").mockImplementation(() => <div>mockInputBar</div>);
    const {getByText} = render(<ImplementationAnimation {...props} />);
   
    getByText("mockInputBar");
    expect(inputSpy).toBeCalledTimes(3);
})

test('should call AnimationSlider', () => {
    jest.restoreAllMocks();
    const sliderSpy = jest.spyOn(AnimationSliders, "default").mockImplementation(() => <div>mockAnimationSlider</div>);
    const content = render(<ImplementationAnimation {...props}/>);
    
    content.getByText("mockAnimationSlider");
    expect(sliderSpy).toBeCalledTimes(3);
})

test('should call AnimationControl', () => {
    jest.restoreAllMocks();
    const controlSpy = jest.spyOn(AnimationControls, "default").mockImplementation(() => <div>mockAnimationControl</div>);

    const {getByText} = render(<ImplementationAnimation {...props}/>);
    getByText("mockAnimationControl");
    expect(controlSpy).toBeCalledTimes(3);
});

test('should call ExplanationBox', () => {
    jest.restoreAllMocks();
    const controlSpy = jest.spyOn(ExplanationBoxes, "default").mockImplementation(() => <div>mockExplanationBox</div>);

    const {getByText} = render(<ImplementationAnimation {...props}/>);
    getByText("mockExplanationBox");
    expect(controlSpy).toBeCalledTimes(3);
});

test('should match snapshot', () => {
    jest.restoreAllMocks();
    const content = render(<ImplementationAnimation {...props}/>);

    expect(content).toMatchSnapshot();
})

import { render } from "@testing-library/react";
import Module from "./Module";

const image = {
    static: "./logo512.png",
    gif: "catch.gif",
    title: "Bubble sort",
    width: "20%",
};

const props = {
    image: image,
    width: 200,
    height: 200,
    handleClick: jest.fn(),
    progress: 15,
};

test('should call two modules', () => {

    // console.log(Module)
    // const buttonSpy = jest.spyOn(ModuleButtonn, "ModuleButton").mockImplementation("() => () => <div/>");
    // const progressSpy = jest.spyOn(ModuleProgress).mockImplementation(jest.fn());

    const content = render(<Module {...props}/>);
    expect(content).toMatchSnapshot();
    // expect(ModuleButton).toBeCalledTimes(1);
    // expect(progressSpy).toBeCalledTimes(1);

})

import { render } from "@testing-library/react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import ModuleProgress from "./ModuleProgress";

xit("should be value of 15", () => {
    const borderLinearProgressSpy = jest
        .spyOn(ModuleProgress.prototype, "BorderLinearProgress")
        .mockImplementation(jest.fn());

    const props = { width: 200, progress: 10 };
    const content = render(<ModuleProgress {...props} />);
    expect(borderLinearProgressSpy).toBeCalledTimes(1);
    expect(borderLinearProgressSpy).toBeCalledWith({
        variant: "determinate",
        value: 10,
    });
});

import { render } from "@testing-library/react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import * as ModuleProgress from "./ModuleProgress";
import * as LinearProgresses from "@material-ui/core/LinearProgress";


xit("should be value of 15", () => {
    console.log(LinearProgresses)
    const borderLinearProgressSpy = jest
        .spyOn(LinearProgresses, "default")
        .mockImplementation((props => <div>props.progress</div>));

    const props = { width: 200, progress: 10 };
    const content = render(<ModuleProgress.default {...props} />);
    expect(borderLinearProgressSpy).toBeCalledTimes(1);
    expect(borderLinearProgressSpy).toBeCalledWith({
        variant: "determinate",
        value: 10,
    });
});

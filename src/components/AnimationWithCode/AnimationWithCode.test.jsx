/*
    Author: Ruizi Han
*/

import { render } from "@testing-library/react";
import { makeStyles } from "@material-ui/core/styles";
import AnimationWithCode from "../AnimationWithCode/AnimationWithCode";
import * as AnimationSliders from "../AnimationSlider/AnimationSlider";
import * as AnimationControls from "../AnimationControl/AnimationControl";

const trace = [
    [
        { height: "50", backgroundColor: "#FF008C", key: '1' },
        { height: "30", backgroundColor: "#D309E1", key: '2' },
        { height: "90", backgroundColor: "#9C1AFF", key: '3' },
        { height: "10", backgroundColor: "#7700FF", key: '4' },
        { height: "20", backgroundColor: "#66AA00", key: '5' },
    ],[
        { height: "50", backgroundColor: "#FF008C", key: '1' },
        { height: "30", backgroundColor: "#D309E1", key: '2' },
        { height: "90", backgroundColor: "#9C1AFF", key: '3' },
        { height: "10", backgroundColor: "#7700FF", key: '4' },
        { height: "20", backgroundColor: "#66AA00", key: '5' },
    ],

];

const description = ["", ""];

const blockNums = [1, 2];

const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginTop: theme.spacing(3),
        },
        width: 380,
    },
    bars: {
        listStyle: "none",
        padding: 0,
        margin: 0,
        position: "relative",
        display: "flex",
        flexWrap: "wrap-reverse",
        justifyContent: "center",
    },
    bar: {
        listStyle: "none",
        padding: 0,
        margin: 0,
        boxShadow: "0px 0px 2px 2px #88888833",
        borderRadius: "10px",
        marginTop: 50,
        marginBottom: "-5px",
        marginRight: "15px",
        marginLeft: "15px",
        width: "30px",
        height: "140px",
        fontSize: "0.1em",
        justifyContent: "center",
    },
    slider: {
        marginLeft: 28,
        marginTop: 10,
    },
}));

const Code = (props) => {
    const { blockNum } = props;

    const useStyles = makeStyles((theme) => ({
        background: {
            backgroundColor: "#FEE5D4",
            borderRadius: 5,
            marginTop: -6,
            letterSpacing: 0.5,
            fontFamily: "Space Mono",
            lineHeight: "22px",
            fontSize: "12px",
            paddingLeft: "5px",
        },
        noBackground: {
            marginTop: -6,
            letterSpacing: 0.5,
            fontFamily: "Space Mono",
            lineHeight: "22px",
            fontSize: "12px",
            paddingLeft: "5px",
        },
    }));
    
    const classes = useStyles();

    const testCode =
        <div>
            <pre className={blockNum === 1 ? classes.background : classes.noBackground}>
                {`test`}
            </pre>
            <pre className={blockNum === 2 ? classes.background : classes.noBackground}>
                {`test`}
            </pre>
        </div>

    return (
        <div>{testCode}</div>
    )
}

const props = {
    trace,
    description,
    width: 320,
    blockNums,
    useStyles,
    Code,
    title: "For Loop",
};

test('should call AnimationSlider', () => {
    jest.restoreAllMocks();
    const sliderSpy = jest.spyOn(AnimationSliders, "default").mockImplementation(() => <div>mockAnimationSlider</div>);
    const content = render(<AnimationWithCode {...props}/>);
    content.getByText("mockAnimationSlider");
    expect(sliderSpy).toBeCalledTimes(1);
});

test('should call AnimationControl', () => {
    jest.restoreAllMocks();
    const controlSpy = jest.spyOn(AnimationControls, "default").mockImplementation(() => <div>mockAnimationControl</div>);

    const {getByText} = render(<AnimationWithCode {...props}/>);
    getByText("mockAnimationControl");
    expect(controlSpy).toBeCalledTimes(1);
});

test('should match snapshot', () => {
    jest.restoreAllMocks();
    // jest.resetModules();
    const content = render(<AnimationWithCode {...props}/>);

    expect(content).toMatchSnapshot();
});
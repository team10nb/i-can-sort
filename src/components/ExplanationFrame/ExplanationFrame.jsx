/*
    Author: Yijie Lu, Shiliang Chen

    This is a popup windows which would display pages of expanation to a specific module.
    A icon button would call this popup.
    material-ui library is used for UI.
*/
import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import Zoom from "@material-ui/core/Zoom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import Backdrop from "@material-ui/core/Backdrop";

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: "#212121",
    },

    card: {
        maxWidth: 580,
        height: 570,
        borderRadius: "30px",
    },

    icon: {
        color: "#696969",
    },
    actionArea: {
        minWidth: 395,
        minHeight: 570,
    },

    button: {
        display: "flex",
        "& > *": {
            marginBottom: theme.spacing(2.5),
            marginLeft: theme.spacing(3),
        },
        "& > * + *": {
            marginLeft: theme.spacing(55),
        },
    },

    resetbutton: {
        "& > *": {
            marginRight: theme.spacing(61),
            marginTop: theme.spacing(0),
        },
    },
}));

//corresponding page
function getStepContent(step, props) {
    const {
        logo0,
        logo1,
        logo2,
        logo3,
        stepNumber,
        content0,
        content1,
        content2,
    } = props;
    if (stepNumber === 5) {
        switch (step) {
            case 0:
                return (
                    <CardActionArea
                        style={{
                            width: "580px",
                            height: "415px",
                            marginBottom: "15px",
                        }}
                    >
                        <img src={logo0} alt="logo0" width="587" heigh="300" />
                    </CardActionArea>
                );
            case 1:
                return (
                    <CardActionArea
                        style={{
                            width: "580px",
                            height: "415px",
                            marginBottom: "15px",
                        }}
                    >
                        <img src={logo1} alt="logo1" width="587" heigh="300" />
                    </CardActionArea>
                );
            case 2:
                return (
                    <CardActionArea
                        style={{
                            width: "580px",
                            height: "415px",
                            marginBottom: "15px",
                        }}
                    >
                        <img src={logo2} alt="logo2" width="587" heigh="300" />
                        <CardContent>{content2}</CardContent>
                    </CardActionArea>
                );
            case 3:
                return (
                    <CardActionArea
                        style={{
                            width: "580px",
                            height: "415px",
                            marginBottom: "15px",
                        }}
                    >
                        <img src={logo3} alt="logo3" width="587" heigh="300" />
                    </CardActionArea>
                );
            default:
                return "Unknown step";
        }
    } else if (stepNumber === 3) {
        switch (step) {
            case 0:
                return (
                    <CardActionArea
                        style={{ height: "415px", marginBottom: "15px" }}
                    >
                        <img src={logo0} alt="logo0" width="587px" />
                        <CardContent>{content0}</CardContent>
                    </CardActionArea>
                );
            case 1:
                return (
                    <CardActionArea
                        style={{
                            width: "580px",
                            height: "415px",
                            marginBottom: "15px",
                        }}
                    >
                        <img src={logo1} alt="logo1" width="587px" />
                        <CardContent>{content1}</CardContent>
                    </CardActionArea>
                );
            default:
                return "Unknown step";
        }
    } else if (stepNumber === 2) {
        switch (step) {
            case 0:
                return (
                    <CardActionArea
                        style={{ height: "415px", marginBottom: "15px" }}
                    >
                        <img src={logo0} alt="logo0" width="587px" />
                    </CardActionArea>
                );
            default:
                return "Unknown step";
        }
    }
}

export default function ExplanationFrame(props) {
    const {
        color,
        logoFinal,
        stepNumber,
        contentFinal,
        picHeight,
        contentMarginBottom,
        contentMarginTop,
        avatarMarginLeft,
        avatarMarginTop,
        name,
    } = props;

    const classes = useStyles();

    let firstIn = true;

    if (name === "CorrectnessHelp") {
        firstIn = localStorage.getItem("IntroFirst")
            ? JSON.parse(localStorage.getItem("IntroFirst"))
            : null;
    } else if (name === "Proof") {
        firstIn = localStorage.getItem("ProofFirst")
            ? JSON.parse(localStorage.getItem("ProofFirst"))
            : null;
    } else if (name === "Term") {
        firstIn = localStorage.getItem("TermFirst")
            ? JSON.parse(localStorage.getItem("TermFirst"))
            : null;
    }

    const [open, setOpen] = React.useState(firstIn === 1 ? true : false);

    const [value, setValue] = React.useState(0);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setValue(2);
        if (name === "CorrectnessHelp") {
            localStorage.setItem("IntroFirst", JSON.stringify(0));
        } else if (name === "Proof") {
            localStorage.setItem("ProofFirst", JSON.stringify(0));
        } else if (name === "Term") {
            localStorage.setItem("TermFirst", JSON.stringify(0));
        }
    };

    const [activeStep, setActiveStep] = React.useState(0);

    const steps = stepNumber;

    //handle the page switch
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const handleReset = () => {
        setActiveStep(0);
    };

    const theme = useTheme();
    const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
    };

    const card = (
        <Backdrop className={classes.backdrop} open={open}>
            <Card className={classes.card}>
                <div
                    style={{
                        marginLeft: avatarMarginLeft,
                        marginTop: avatarMarginTop,
                    }}
                >
                    <IconButton
                        value={value}
                        index={2}
                        aria-label="close"
                        onClick={handleClose}
                    >
                        <HighlightOffIcon
                            style={{ color: color, opacity: 0.8, fontSize: 40 }}
                        />
                    </IconButton>
                </div>
                {activeStep === steps - 1 ? (
                    <div>
                        <div>
                            <CardActionArea
                                style={{
                                    height: picHeight,
                                    marginBottom: "15px",
                                }}
                            >
                                <img
                                    src={logoFinal}
                                    alt="logoFinal"
                                    width="587px"
                                />
                                <CardContent
                                    style={{
                                        marginBottom: contentMarginBottom,
                                        marginTop: contentMarginTop,
                                    }}
                                >
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        component="p"
                                    >
                                        {contentFinal}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </div>
                        {steps === 1 ? (
                            <div />
                        ) : (
                            <div className={classes.button}>
                                <IconButton
                                    onClick={handleReset}
                                    style={{
                                        backgroundColor: color,
                                        opacity: 0.5,
                                    }}
                                    size="small"
                                >
                                    <RotateLeftIcon
                                        style={{
                                            color: "white",
                                            fontSize: "40px",
                                        }}
                                    />
                                </IconButton>
                            </div>
                        )}
                    </div>
                ) : (
                    <div>
                        <div>{getStepContent(activeStep, props)}</div>
                        <div className={classes.button}>
                            {activeStep === 0 ? (
                                <IconButton
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    style={{
                                        backgroundColor: color,
                                        opacity: 0,
                                    }}
                                    size="small"
                                >
                                    <ChevronLeftIcon
                                        style={{
                                            color: "white",
                                            fontSize: "40px",
                                        }}
                                    />
                                </IconButton>
                            ) : (
                                <IconButton
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    style={{
                                        backgroundColor: color,
                                        opacity: 0.5,
                                    }}
                                    size="small"
                                >
                                    <ChevronLeftIcon
                                        style={{
                                            color: "white",
                                            fontSize: "40px",
                                        }}
                                    />
                                </IconButton>
                            )}

                            <IconButton
                                onClick={handleNext}
                                style={{ backgroundColor: color, opacity: 0.5 }}
                                size="small"
                            >
                                <ChevronRightIcon
                                    style={{ color: "white", fontSize: "40px" }}
                                />
                            </IconButton>
                        </div>
                    </div>
                )}
            </Card>
        </Backdrop>
    );

    return (
        <div style={{ height: "48px" }}>
            {value === 2 ? (
                <Zoom
                    in={value === 2}
                    timeout={transitionDuration}
                    style={{
                        transitionDelay: `${
                            value === 2 ? transitionDuration.exit : 0
                        }ms`,
                    }}
                    unmountOnExit
                >
                    <Tooltip title="Help" placement="bottom" arrow>
                        <IconButton aria-label="Help" onClick={handleClickOpen}>
                            <HelpOutlineOutlinedIcon className={classes.icon} />
                        </IconButton>
                    </Tooltip>
                </Zoom>
            ) : (
                <Tooltip title="Help" placement="bottom" arrow>
                    <IconButton aria-label="Help" onClick={handleClickOpen}>
                        <HelpOutlineOutlinedIcon className={classes.icon} />
                    </IconButton>
                </Tooltip>
            )}

            {card}
        </div>
    );
}

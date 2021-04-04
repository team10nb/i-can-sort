/*
    Author: Yijie Lu, Shiliang Chen
    It is for users who are the first time to access to the software
*/

import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        marginLeft:-475,
        width:2000,
        color: "#212121",
    },
    cardBackground: {
        width: 650,
        height: 460,
        backgroundColor: "rgba(255,255,255,0.8)",
        borderRadius: "20px",
    },
    buttonBase: {
        display: "flex",
        "& > * + *": {
            marginLeft: theme.spacing(8),
        },
        justifyContent: "center",
    },
    cardOne: {
        opacity: 1,
        width: 230,
        height: 230,
        backgroundColor: "#4caf50",
        color: "white",
        borderRadius: "30px",
        "&:hover": {
            transform: "scale(1.05, 1.05)",
        },
        "&:active": {
            transform: "scale(1, 1 )",
        },
        transition: "0.5s",
    },
    cardTwo: {
        width: 230,
        height: 230,
        backgroundColor: "#1565c0",
        color: "white",
        borderRadius: "30px",
        "&:hover": {
            transform: "scale(1.05, 1.05)",
        },
        "&:active": {
            transform: "scale(1, 1 )",
        },
        transition: "0.5s",
    },
    title: {
        marginTop: "33px",
    },
    tip: {
        marginLeft: 52,
        marginRight: 50,
        marginBottom: 23,
        justifyContent: "center",
        textAlign: "center",
    },
    content1: {
        marginTop: "50px",
        borderRadius: "30px",
    },
    content2: {
        marginTop: "52px",
        borderRadius: "30px",
    },
    icon: {
        color: "white",
        fontSize: "3rem",
    },
}));

export default function FirstInBackdrop(props) {
    const classes = useStyles();
    //decide whether it is because users erase history
    const snack = localStorage.getItem("snack")
        ? JSON.parse(localStorage.getItem("snack"))
        : null;
    // eslint-disable-next-line
    const [open, setOpen] = React.useState(true);
    const [appear, setAppear] = React.useState(true);
    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        localStorage.setItem("snack", JSON.stringify(0));
        setAppear(false);
    };
    const onClick = () =>  { localStorage.setItem("first", JSON.stringify(false));}
    return (
        <div>
            <Backdrop className={classes.backdrop} open={open}>
                <motion.div
                    initial={{ opacity: 0.2, scale: 0 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 150,
                        damping: 15,
                        mass: 0.1,
                    }}
                >
                    <Card className={classes.cardBackground}>
                        <div>
                            <Typography
                                variant="h4"
                                gutterBottom
                                style={{
                                    fontFamily: "Quicksand",
                                    fontWeight: "600",
                                    color: "#0e4686",
                                }}
                                className={classes.title}
                            >
                                Welcome!
                            </Typography>
                            <Typography
                                gutterBottom
                                style={{
                                    fontFamily: "Quicksand",
                                    fontWeight: "600",
                                    color: "#0e4686",
                                }}
                                className={classes.tip}
                            >
                                You can learn sorting in Procedure section. <br />
                                Ideas of correctness is available in Correctness section.<br />
                                Do you have any experience on programming?{" "}
                                <br />
                            </Typography>
                        </div>

                        <div className={classes.buttonBase}>
                            <ButtonBase style={{ borderRadius: "30px" }} onClick={onClick}>
                                <Link
                                    to="/TutorialMainPage"
                                    style={{ textDecoration: "none" }}
                                >
                                    <motion.div
                                        initial={{ y: -50, opacity: 0 }}
                                        animate={{
                                            y: 0,
                                            opacity: 1,
                                        }}
                                        transition={{
                                            delay: 0.4,
                                        }}
                                    >
                                        <Card className={classes.cardOne}>
                                            <CardContent
                                                className={classes.content1}
                                            >
                                                <Typography
                                                    variant="h6"
                                                    gutterBottom
                                                    style={{
                                                        fontFamily: "inherit",
                                                        fontWeight: "600",
                                                    }}
                                                >
                                                    No. I'm new at programming, go
                                                    to Tutorial first!
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </Link>
                            </ButtonBase>
                            <ButtonBase style={{ borderRadius: "30px" }} onClick={onClick}>
                                <Link
                                    to="./ProcedureMainPage"
                                    style={{ textDecoration: "none" }}
                                >
                                    <motion.div
                                        initial={{ y: -50, opacity: 0 }}
                                        animate={{
                                            y: 0,
                                            opacity: 1,
                                        }}
                                        transition={{
                                            delay: 0.6,
                                        }}
                                    >
                                        <Card className={classes.cardTwo}>
                                            <CardContent
                                                className={classes.content2}
                                            >
                                                <Typography
                                                    variant="h6"
                                                    gutterBottom
                                                    style={{
                                                        fontFamily: "inherit",
                                                        fontWeight: "600",
                                                    }}
                                                >
                                                    Yes. I've got basic knowledge,
                                                    start now!
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </Link>
                            </ButtonBase>
                        </div>
                    </Card>
                </motion.div>
                {snack === 1 ? (
                    <Snackbar open={appear} onClose={handleClose} style={{bottom:"80px"}}>
                        <Alert onClose={handleClose} severity="success">
                            Successfully reset history!
                        </Alert>
                    </Snackbar>
                ) : (
                    <div />
                )}
            </Backdrop>
        </div>
    );
}

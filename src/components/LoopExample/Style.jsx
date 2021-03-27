/*
    Author: Yijie Lu, Ruizi Han

    Styles used by ForLoop and WhileLoop example.
*/

import { makeStyles } from "@material-ui/core/styles";

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
        marginBottom: -10,
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
        marginTop: 32,
        marginBottom: "7px",
        marginRight: "15px",
        marginLeft: "15px",
        width: "30px",
        height: "140px",
        fontSize: "0.1em",
        justifyContent: "center",
    },
    barNumber: {
        fontSize: "16px",
        marginTop: "-23px",
        textAlign: "center",
        fontWeight: "600",
    },
    cardOne: {
        width: 380,
        height: 240,
        display: 'grid',
        alignContent: 'flex-end',
        justifyContent: 'center',
        background: "#F0F0F0",
    },
    cardTwo: {
        width: 380,
        height: 240,
        background: "#F0F0F0",
    },
    slider: {
        // marginLeft: 82,
        marginBottom: -10,
    },
    control: {
        marginBottom: 5,
    },
    title: {
        display: "flex",
        fontFamily: "inherit",
        fontWeight: "700",
        fontSize: "18px",
        justifyContent: "center",
        marginTop: 14,
    },
    explanation: {
        fontFamily: "inherit",
        fontSize: "16px",
        fontWeight: "700",
        letterSpacing: "1px",
        textAlign: 'center',
        marginBottom: -8,
    }
}));



export { useStyles };
/*
    Author: Yijie Lu, Shiliang Chen
*/
import React from "react";
import Typography from "@material-ui/core/Typography";
import logo0 from "../../resource/inputExp0.png";
import logo1 from "../../resource/inputExp1.png";
import logo2 from "../../resource/inputExp2.jpg";
import logo3 from "../../resource/inputExp3.png";
import logo4 from "../../resource/inputExp4.jpg";
import { color } from "../../scenes/mainPages/Correctness";
import ExplanationFrame from "../ExplanationFrame/ExplanationFrame";

const content2 = (
    <Typography
        variant="body2"
        color="textSecondary"
        component="p"
        style={{ marginLeft: "20px" }}
    >
        By inputting a number from 1 to 7, the algorithm will output the week
        name from Sunday to Saturday.
    </Typography>
);

const content4 = (
    <Typography
        variant="body2"
        color="textSecondary"
        component="p"
        style={{ marginLeft: "20px" }}
    >
        For this page, the legal input set of this algorithm is positive
        intergers 1 to 7.<br></br>
        Any input other than these numbers are illegal. This algorithm is
        correct since it can generate correct week name for any legal input.
    </Typography>
);

export default function CorrectnessHelp() {
    const data = {
        color: color,
        logo0: logo0,
        logo1: logo1,
        logo2: logo2,
        logo3: logo3,
        logoFinal: logo4,
        stepNumber: 5,
        content2: content2,
        contentFinal: content4,
        picHeight: "415",
        contentMarginBottom: "0",
        contentMarginTop: "0",
        avatarMarginLeft: "9px",
        avatarMarginTop: "9px",
    };

    return (
        <div>
            <ExplanationFrame {...data} />
        </div>
    );
}

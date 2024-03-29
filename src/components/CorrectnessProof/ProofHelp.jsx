/*
    Author: Shiliang Chen, Yijie Lu

    Help popup for expaining proof module.
    material-ui library is used for UI.
*/
import React from "react";
import Typography from "@material-ui/core/Typography";
import logo0 from "../../resource/correctnessProve0.png";
import logo1 from "../../resource/correctnessProve1.png";
import { color } from "../../scenes/mainPages/Correctness";
import ExplanationFrame from "../ExplanationFrame/ExplanationFrame";

const content1 = (
    <Typography
        variant="body2"
        color="textSecondary"
        component="p"
        style={{ marginLeft: "23px", marginRight: "18px" }}
    >
        When a specific statement is being executed, the pseudo-code and
        assertion will be highlighted to show you the proof process step by
        step. <br />
        Note this is not a formal proof. Plain language is used for
        demonstration purposes.
    </Typography>
);

export default function Explanation() {
    const data = {
        color: color,
        logo0: logo0,
        logoFinal: logo1,
        stepNumber: 2,
        contentFinal: content1,
        picHeight: "415",
        contentMarginBottom: "0",
        contentMarginTop: "0",
        avatarMarginLeft: "9px",
        avatarMarginTop: "9px",
        name: "Proof",
    };

    return (
        <div>
            <ExplanationFrame {...data} />
        </div>
    );
}

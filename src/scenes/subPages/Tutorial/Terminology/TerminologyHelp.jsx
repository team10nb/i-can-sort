/*
    Author: Shiliang Chen, Yijie Lu

    Help popup for expaining terminology module.
*/
import React from "react";
import Typography from "@material-ui/core/Typography";
import logo0 from "../../../../resource/TerminologyHelp.png";
import logo1 from "../../../../resource/TerminologyHelp1.png";
import { color } from "../../../mainPages/Tutorial";
import ExplanationFrame from "../../../../components/ExplanationFrame/ExplanationFrame";

const content1 = (
    <Typography
        variant="body2"
        color="textSecondary"
        component="p"
        style={{ marginLeft: "23px", marginRight: "18px" }}
    >
        Choose any one of these four section to begin your tutorial of terminology.
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
        name: "Term"
    };

    return (
        <div>
            <ExplanationFrame {...data} />
        </div>
    );
}

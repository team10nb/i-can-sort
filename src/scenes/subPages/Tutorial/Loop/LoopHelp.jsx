/*
    Author: Yijie Lu, Shiliang Chen
*/
import React from "react";
import logo0 from "../../../../resource/ForLoop.png";
import logo1 from "../../../../resource/WhileLoop.png";
import { color } from "../../../mainPages/Tutorial";
import ExplanationFrame from "../../../../components/ExplanationFrame/ExplanationFrame";

export function LoopForHelp() {
    const data = {
        color: color,
        logoFinal: logo0,
        stepNumber: 1,
        picHeight: "400px",
        avatarMarginLeft: "9px",
        avatarMarginTop: "9px",
    };
    return (
        <div>
            <ExplanationFrame {...data} />
        </div>
    );
}

export function LoopWhileHelp() {
    const data = {
        color: color,
        logoFinal: logo1,
        stepNumber: 1,
        picHeight: "400px",
        avatarMarginLeft: "9px",
        avatarMarginTop: "9px",
    };

    return (
        <div>
            <ExplanationFrame {...data} />
        </div>
    );
}

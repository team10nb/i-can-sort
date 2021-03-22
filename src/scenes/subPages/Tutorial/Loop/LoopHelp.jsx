/*
    Author: Yijie Lu, Shiliang Chen
*/
import React from "react";
import logo0 from "../../../../Resource/ForLoop.png";
import logo1 from "../../../../Resource/WhileLoop.png";
import { color } from "../../../mainPages/Tutorial";
import ExplanationFrame from "../../../../components/ExplanationFrame/ExplanationFrame";


export function LoopForHelp() {
    const data = {
        color:color,
        logoFinal:logo0,
        stepNumber:1,
        picHeight:"350px",
        avatarMarginLeft:"9px",
        avatarMarginTop:"9px",
      }
    return (
        <div>
            <ExplanationFrame {...data} />
        </div>
    );
}

export function LoopWhileHelp() {
    const data = {
        color:color,
        logoFinal:logo1,
        stepNumber:1,
        picHeight:"350px",
        avatarMarginLeft:"9px",
        avatarMarginTop:"9px",
      }

    return (
        <div>
            <ExplanationFrame {...data} />
        </div>
    );
}

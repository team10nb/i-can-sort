/*
    Author: Yuting Jiang, Yijie Lu

    The procedure subpage of bubble sort.
*/

import React from "react";
import { color } from "../../../mainPages/Procedure";
import ProcedureSubPage from "../ProcedureSubPage";
import ProcedureOperation from "../../../../components/ProcedureOperation/ProcedureOperation";
import BubbleIntro from "../../../../components/ProcedureIntroduction/BubbleSort";
import { BubbleImplementation } from "../../../../components/ProcedureImplementation/ProcedureImplementation";

const introMessage = (
    <div>
        <h1>Bubble sort</h1>
        <p style={{ textAlign: "justify", fontSize: 18, letterSpacing: 0.5, marginTop:"-7px" }}>
            Bubble sort is a simple sorting algorithm that repeatedly steps
            through the list, compares adjacent elements and swaps them if they
            are in the wrong order. 
            <br/><br/>The pass through the list is repeated until
            the list is sorted. The algorithm, which is a comparison sort, is
            named for the way smaller or larger elements "bubble" to the top of
            the list. See explanations step by step on the right.
        </p>
    </div>
);

const intro = {
    introMessage: introMessage,
    animation: <BubbleIntro />,
};

const operate = <ProcedureOperation sort={"Bubble"} />;

export default function ProcedureBubble(props) {
    const progress = localStorage.getItem("bubble")
        ? JSON.parse(localStorage.getItem("bubble"))
        : [false, false, false];

    const data = {
        color: color,
        algorithm: "bubble",
        progress: progress,
        history: props.history,
        intro: intro,
        operate: operate,
        Implementation: <BubbleImplementation />,
    };

    return (
        <div>
            <ProcedureSubPage {...data} />
        </div>
    );
}

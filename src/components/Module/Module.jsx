/*
    Author: Shiliang Chen, Yuting Jiang

    Combine ModuleButton and ModuleProgress
*/

import React from "react";
import ModuleProgress from "../ModuleProgress/ModuleProgress";
import ModuleButton from "../ModuleButton/ModuleButton";

export default function Module(props) {

    //Combine ModuleButton and ModuleProgress
    return (
        <div style={{display:"inline-block", margin:10, }}>
            <ModuleButton {...props} />
            <ModuleProgress {...props} />
        </div>
    );
}

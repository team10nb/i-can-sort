import React from "react";
import ModuleProgress from "../ModuleProgress/ModuleProgress";
import ModuleButton from "../ModuleButton/ModuleButton";

export default function Module(props) {

    return (
        <div style={{display:"inline-block", margin:20, }}>
            <ModuleButton {...props} />
            <ModuleProgress {...props} />
        </div>
    );
}

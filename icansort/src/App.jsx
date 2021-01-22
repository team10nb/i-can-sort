import React from "react";
import Module from "./components/Module/Module";

function App() {
    const [progress, setProgress] = React.useState(10);
    const [progress2, setProgress2] = React.useState(15);

    const handleClick = (setProgress) => () => {
        setProgress((oldProgress) => {
            if (oldProgress === 100) {
                return 0;
            }
            const diff = Math.random() * 10;
            return Math.min(oldProgress + diff, 100);
        });
        console.log(progress);
    };

    const image = {
        static: "./logo512.png",
        gif: "catch.gif",
        title: "Bubble sort",
        width: "20%",
    };
    const image2 = {
        static: "./logo512.png",
        gif: "sorting.gif",
        title: "Bubble sort",
        width: "20%",
    };

    const props = {
        value: 33,
        image: image,
        width: 200,
        height: 200,
        handleClick: handleClick(setProgress),
        progress: progress,
    };
    const props2 = {
        value: 22,
        image: image2,
        width: 200,
        height: 200,
        handleClick: handleClick(setProgress2),
        progress: progress2,
    };

    return (
        <div>
            <Module {...props} />
            <Module {...props2} />
            <Module {...props} />
            <Module {...props2} />
        </div>
    );
}

export default App;

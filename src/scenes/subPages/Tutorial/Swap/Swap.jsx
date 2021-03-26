import React from "react";
import { color } from "../../../mainPages/Tutorial";
import TutorialSubPage from "../TutorialSubpage";
import TutorialSwap from "../../../../components/TutorialSwap/TutorialSwap";

export default function Swap(props) {

    localStorage.setItem("tutorialSwap", JSON.stringify(100));

    const data = {
        color: color,
        history: props.history,
        message: "Swap a & b"
    };

    const SwapAnimation = () => {

        const blockNums = [1, 2, 3, 4, 5, 6];

        const trace = [
            [
                {
                    value: 0,
                    height: 0,
                    backgroundColor: "#FF008C",
                    key: 0,
                    y: 0,
                },
                {
                    value: 0,
                    height: 0,
                    backgroundColor: "#D309E1",
                    key: 1,
                    y: 0,
                },
                {
                    value: 0,
                    height: 0,
                    backgroundColor: "#9C1AFF",
                    key: 2,
                    y: 0,
                },
            ],
            [
                {
                    value: 0,
                    height: 0,
                    backgroundColor: "#FF008C",
                    key: 0,
                    y: 0,
                },
                {
                    value: 5,
                    height: 100,
                    backgroundColor: "#D309E1",
                    key: 1,
                    y: 0,
                },
                {
                    value: 0,
                    height: 0,
                    backgroundColor: "#9C1AFF",
                    key: 2,
                    y: 0,
                },
            ],
            [
                {
                    value: 0,
                    height: 0,
                    backgroundColor: "#FF008C",
                    key: 0,
                    y: 0,
                },
                {
                    value: 5,
                    height: 100,
                    backgroundColor: "#D309E1",
                    key: 1,
                    y: 0,
                },
                {
                    value: 10,
                    height: 200,
                    backgroundColor: "#9C1AFF",
                    key: 2,
                    y: 0,
                },
            ],
            [
                {
                    value: 5,
                    height: 100,
                    backgroundColor: "#D309E1",
                    key: 0,
                    y: 0,
                },
                {
                    value: 5,
                    height: 100,
                    backgroundColor: "#D309E1",
                    key: 1,
                    y: 0,
                },
                {
                    value: 10,
                    height: 200,
                    backgroundColor: "#9C1AFF",
                    key: 2,
                    y: 0,
                },
            ],
            [
                {
                    value: 5,
                    height: 100,
                    backgroundColor: "#D309E1",
                    key: 0,
                    y: 0,
                },
                {
                    value: 10,
                    height: 200,
                    backgroundColor: "#9C1AFF",
                    key: 1,
                    y: 0,
                },
                {
                    value: 10,
                    height: 200,
                    backgroundColor: "#9C1AFF",
                    key: 2,
                    y: 0,
                },
            ],
            [
                {
                    value: 5,
                    height: 100,
                    backgroundColor: "#D309E1",
                    key: 0,
                    y: 0,
                },
                {
                    value: 10,
                    height: 200,
                    backgroundColor: "#9C1AFF",
                    key: 1,
                    y: 0,
                },
                {
                    value: 5,
                    height: 100,
                    backgroundColor: "#D309E1",
                    key: 2,
                    y: 0,
                },
            ],
            [
                {
                    value: 5,
                    height: 100,
                    backgroundColor: "#D309E1",
                    key: 0,
                    y: 0,
                },
                {
                    value: 10,
                    height: 200,
                    backgroundColor: "#9C1AFF",
                    key: 1,
                    y: 0,
                },
                {
                    value: 5,
                    height: 100,
                    backgroundColor: "#D309E1",
                    key: 2,
                    y: 0,
                },
            ],
        ];

        const description = [
            "temp for saving value temporaryly",
            "Assume a is 5",
            "Assume b is 10",
            "Assign 5 of a to temp",
            "Assign 10 of b to a",
            "Assign 5 of temp to b",
            "Now values of a & b are swapped"
        ];

        const table = [
            [
                <tr>
                <td style={styles.td}>{0}</td>
                <td style={styles.td}>{0}</td>
                <td style={styles.td}>{0}</td>
                </tr>
            ],
            [
                <tr>
                <td style={styles.td}>{0}</td>
                <td style={styles.td}>{5}</td>
                <td style={styles.td}>{0}</td>
                </tr>
            ],
            [
                <tr>
                <td style={styles.td}>{0}</td>
                <td style={styles.td}>{5}</td>
                <td style={styles.td}>{10}</td>
                </tr>
            ],
            [
                <tr>
                <td style={styles.td}>{5}</td>
                <td style={styles.td}>{5}</td>
                <td style={styles.td}>{10}</td>
                </tr>
            ],
            [
                <tr>
                <td style={styles.td}>{5}</td>
                <td style={styles.td}>{10}</td>
                <td style={styles.td}>{10}</td>
                </tr>
            ],
            [
                <tr>
                <td style={styles.td}>{5}</td>
                <td style={styles.td}>{10}</td>
                <td style={styles.td}>{5}</td>
                </tr>
            ],
        ]

        const props = {
            trace,
            description,
            width: "320px",
            explainationBoxHeight: "3",
            blockNums,
            table: table,
        };

        return <TutorialSwap {...props} />;
    };

    return (
        <div>
            <TutorialSubPage {...data}/>
            <SwapAnimation />
        </div>
    );
}


const styles = {
    td:{
        textAlign:"center",
        width:50
    },
}

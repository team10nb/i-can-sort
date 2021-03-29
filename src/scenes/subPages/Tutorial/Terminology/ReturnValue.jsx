/*
    Author: Yani Huang
*/
import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

export default function ReturnValue(props) {
    const styles = {
        root: {
            display: "flex",
            "& > *": {
                marginRight: 10,
            },
            backgroundColor: "#EFEFEF",
            height: "525px",
            width: "750px",
            marginLeft: "15px",
        },
        ExampleCard: {
            paddingLeft: "px",
            paddingTop: "5px",
            marginLeft: "270px",
            width: "200px",
            backgroundColor: "#FFFFFF",
        },
        title: {
            fontSize: 20,
            textAlign: "center",
        },
        subtitle: {
            fontSize: 15,
            fontWeight: "bold",
            marginLeft: "20px",
        },
        div: {
            fontSize: 15,
            lineHeight: "2em",
            fontWeight: "400",
            marginLeft: "20px",
        },
        sample: {
            fontSize: 13,
            lineHeight: "2em",
            fontWeight: "400",
            backgroundColor: "white",
            borderRadius: "15px",
            paddingLeft: "15px",
            paddingTop: "10px",
            paddingBottom: "10px",
            marginLeft: "260px",
            marginTop: "20px",
            marginBottom: "20px",
            width: "220px",
            fontFamily: "Space Mono",
        },
    };

    return (
        <div>
            <Card style={styles.root}>
                <CardContent>
                    <h1 style={styles.title}>Return Value</h1>
                    <br></br>
                    <div style={styles.div}>
                        Standard Pseudocode use{" "}
                        <font style={{ fontWeight: "bold" }}>
                            Return [expression]
                        </font>{" "}
                        to present the output of an algorithm. See the example
                        below:
                    </div>
                    <br></br>

                    <div style={styles.sample}>
                        Algorithm: Return_A<br></br>Input: an integer A<br></br>
                        Output: An integer A<br></br>A = 0 <br></br> B = 2{" "}
                        <br></br> A = A + B <br></br> Return A
                    </div>

                    <br></br>

                    <br></br>
                    <div style={styles.div}>
                        The example above will return an integer A, which should
                        be 2.
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

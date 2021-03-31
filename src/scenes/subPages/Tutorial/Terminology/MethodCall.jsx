/*
    Author: Yani Huang
*/
import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";

export default function Method(props) {
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
            fontSize: 14,
            lineHeight: "2em",
            fontWeight: "400",
            marginLeft: "20px",
        },
        sampleOne: {
            fontSize: 12,
            lineHeight: "2em",
            fontWeight: "400",
            backgroundColor: "white",
            borderRadius: "15px",
            paddingLeft: "15px",
            paddingTop: "10px",
            paddingBottom: "10px",
            marginLeft: "220px",
            width: "300px",
            fontFamily: "Space Mono",
            justifyContent: "centor"
        },
        sampleTwo: {
            fontSize: 12,
            lineHeight: "2em",
            fontWeight: "400",
            backgroundColor: "white",
            borderRadius: "15px",
            paddingLeft: "15px",
            paddingTop: "10px",
            paddingBottom: "10px",
            marginLeft: "295px",
            width: "150px",
            fontFamily: "Space Mono",
        },
        // ExampleCard: {
        //     paddingLeft: "15px",
        //     paddingTop: "0px",
        //     marginLeft: "210px",
        //     width: "600px",
        //     backgroundColor: "#FFFFFF",
        // },
    };

    return (
        <div>
            <Card style={styles.root}>
                <CardContent>
                    <h1 style={styles.title}>Method</h1>
                    <div style={styles.subtitle}>Method Declaration</div>
                    <br></br>
                    <div style={styles.div}>
                        Standard pseudocode should start with a{" "}
                        <font style={{ fontWeight: "bold" }}>
                            method declaration
                        </font>{" "}
                        to explain the name, input and output of the algorithm.
                        See the sample below:
                    </div>
                    <br></br>

                    <div style={styles.sampleOne}>
                        Algorithm: algorithm_name<br></br>Input: [explanation of
                        input]<br></br>Output: [explanation of output]
                    </div>

                    <br/><br/><br/>
                    <Divider variant="middle" />
                    <br/><br/>
                    <div style={styles.subtitle}>Method Call</div>
                    <br></br>
                    <div style={styles.div}>
                        A{" "}
                        <font style={{ fontWeight: "bold" }}>method call</font>{" "}
                        is required while using other methods in pseudocode.
                        Common syntax of a method call is{" "}
                        <font style={{ fontWeight: "bold" }}>algorithm_name (arg1, arg2, ...)</font>.{" "}
                        See example below:
                    </div>
                    <br></br>

                    <div style={styles.sampleTwo}>swap(a, b)</div>
                </CardContent>
            </Card>
        </div>
    );
}

/*
    Author: Shiliang Chen, Ruizi Han
*/

import React, { useState } from "react";
import SwitchAnimation from "../SwitchAnimation/SwitchAnimation";
import InputBar from "../InputBar/InputBar";
import BubbleSort from "../SwitchAnimation/SortingAlgorithms/BubbleSort/BubbleSort";
import SelectionSort from "../SwitchAnimation/SortingAlgorithms/SelectionSort/SelectionSort";
import InsertionSort from "../SwitchAnimation/SortingAlgorithms/InsertionSort/InsertionSort";
import QuickSort from "../SwitchAnimation/SortingAlgorithms/QuickSort/QuickSort";
import HeapSort from "../SwitchAnimation/SortingAlgorithms/HeapSort/HeapSort";
import MergeSort from "../SwitchAnimation/SortingAlgorithms/MergeSort/MergeSort";
import {random} from "lodash";

export default function SwitchSort(props) {
    const { sort } = props;

    // The user input
    const [str, setStr] = useState("2,1,6,10,9,12,8,3");
    // The array gained from processed user input
    const [arr, setArr] = useState([2, 1, 6, 10, 9, 12, 8, 3]);
    // The bool value which represent whether user input is valid or not
    const [isValid, setIsValid] = useState(true);
    // The wrong message 
    const [wrongMsg, setWrongMsg] = useState(" ");

    // The maximum value of input number
    const MAXNUMBER = 25;
    // The minimun value of input number
    const MINNUMBER = 1;
    // The maximum length of input array
    const MAXLENGTH = 15;

    // store user input
    const handleChange = (e) => {
        setStr(e.target.value);
        setIsValid(true);
    };

    // check the format of user input
    const checkFormat = () => {
        let s = str.replace(/\s+/g, "");
        s = removeDot(s);
        setStr(s);

        // user only enter one number
        if (s.match(/^[0-9]*$/)) {
            setIsValid(false);
            setWrongMsg("Please enter more than 1 number.");
        }
        // correct format 
        else if (s.match(/^\d+((,|，)\d+)*$/)) {
            const numString = s.split(/[，,]/);
            const nums = numString.map(num => parseInt(num));
            let outRange = false;
            for (let i = 0; i < nums.length; i++) {
                if (nums[i] > MAXNUMBER) {
                    outRange = true;
                    break;
                } else if (nums[i] < MINNUMBER) {
                    outRange = true;
                    break;
                }
            }
            // check if input numbers are valid
            if (nums.length > MAXLENGTH && outRange) {
                setIsValid(false);
                setWrongMsg(
                    "Please enter no more than 15 numbers that between 1-25."
                );
            } else if (nums.length > MAXLENGTH && !outRange) {
                setIsValid(false);
                setWrongMsg("Please enter no more than 15 numbers.");
            } else if (nums.length <= MAXLENGTH && outRange) {
                setIsValid(false);
                setWrongMsg("Please enter numbers that between 1-25.");
            } else {
                setIsValid(true);
                setWrongMsg(" ");
                setArr(nums);
            }
        } else {
            setIsValid(false);
            setWrongMsg("Please follow the correct format."); 
        }
        return 0;
    };

    // to produce a random array
    const shuffle = () => {
        const length = random(3,MAXLENGTH-4);
        let array = [];
        for (let i = 0; i < length; i++) {
            // const element = array[i];
            array.push(random(1,MAXNUMBER-5));
        }
        setIsValid(true);
        setWrongMsg(" ");
        setArr(array);
        setStr(array.join(","));
    }

    // use corresponding algorithm to props
    let trace = "";
    if (sort === "Bubble") {
        trace = BubbleSort(arr);
    } else if (sort === "Insertion") {
        trace = InsertionSort(arr);
    } else if (sort === "Selection") {
        trace = SelectionSort(arr);
    } else if (sort === "Quick") {
        trace = QuickSort(arr);
    } else if (sort === "Heap") {
        trace = HeapSort(arr);
    } else if (sort === "Merge") {
        trace = MergeSort(arr);
    }

    return (
        <div
            style={{
                display: "grid",
                justifyContent: "center",
                alignContent: "flex-end",
                height: 500,
            }}
        >
            <div style={{
                height: 40,
                width:900,
                display: "flex"
            }}>
                <div style={{
                height: 40,
                width: 90,
                fontSize:"26px",
                fontWeight:"500",
                }}>
                {sort }
                </div>
                
            <InputBar
                inputString = {str}
                handleChange={handleChange}
                checkFormat={checkFormat}
                isValid={isValid}
                wrongMsg={wrongMsg}
                shuffle={shuffle}
                max={MAXNUMBER}
                barLength="500px"
            />
            </div>
            <SwitchAnimation {...trace} width={900} explainationBoxHeight={3}/>
        </div>
    );
}

// remove dot(s) of str's right 
function removeDot(s) {
    if (s == null) return "";
    var dot = "，,";
    var str = s;
    if (dot.indexOf(str.charAt(str.length - 1)) !== -1) {
        var i = str.length - 1;
        while (i >= 0 && dot.indexOf(str.charAt(i)) !== -1) {
            i--;
        }
        str = str.substring(0, i + 1);
    }
    return str;
}

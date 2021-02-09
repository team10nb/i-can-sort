import React, { useState } from "react";
import SwitchAnimation from "../SwitchAnimation/SwitchAnimation";
import InputBar from "../InputBar/InputBar";
import BubbleSort from "../SwitchAnimation/SortingAlgorithms/BubbleSort/BubbleSort";
import SelectionSort from "../SwitchAnimation/SortingAlgorithms/SelectionSort/SelectionSort";
import InsertionSort from "../SwitchAnimation/SortingAlgorithms/InsertionSort/InsertionSort";
import {random} from "lodash";

export default function SwitchSort(props) {
    const { sort } = props;

    const [str, setStr] = useState("2,1,6,10,9,12,8,3");
    const [arr, setArr] = useState([2, 1, 6, 10, 9, 12, 8, 3]);
    const [isValid, setIsValid] = useState(true);
    const [wrongMsg, setWrongMsg] = useState(" ");

    const MAXNUMBER = 25;
    const MINNUMBER = 1;
    const MAXLENGTH = 15;

    const handleChange = (e) => {
        setStr(e.target.value);
    };

    //   用正则表达式保证数据
    const checkFormat = () => {
        let s = str.replace(/\s+/g, "");
        s = removeDot(s);
        setStr(s);

        if (s) {
            setIsValid(true);
        }

        // 只有一个数字
        if (s.match(/^[0-9]*$/)) {
            setIsValid(false);
            setWrongMsg("Please enter more than 1 number."); // 只有一个数字
        }
        // 数字,数字,数字
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

            if (nums.length > MAXLENGTH && outRange) {
                setIsValid(false);
                setWrongMsg(
                    "Please enter no more than 15 numbers that between 1-30."
                );
            } else if (nums.length > MAXLENGTH && !outRange) {
                setIsValid(false);
                setWrongMsg("Please enter no more than 15 numbers.");
            } else if (nums.length <= MAXLENGTH && outRange) {
                setIsValid(false);
                setWrongMsg("Please enter numbers that between 1-30.");
            } else {
                setIsValid(true);
                setWrongMsg(" ");
                setArr(nums);
            }
        } else {
            setIsValid(false);
            setWrongMsg("Please follow the correct format."); // 格式不对
        }
        return 0;
    };

    const shuffle = () => {
        const length = random(3,15);
        let array = [];
        for (let i = 0; i < length; i++) {
            const element = array[i];
            array
            .push(random(1,25));
        }
        setIsValid(true);
        setWrongMsg(" ");
        setArr(array);
        setStr(array.join(","));
    }


    let trace = "";
    if (sort === "Bubble") {
        trace = BubbleSort(arr);
    } else if (sort === "Insertion") {
        trace = InsertionSort(arr);
    } else if (sort === "Selection") {
        trace = SelectionSort(arr);
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
                // transform: "rotate(90deg)",
                // marginTop:"35px",
                // marginLeft:"-55px",
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
            />
            </div>
            <SwitchAnimation {...trace} width={900} />
        </div>
    );
}

//去掉右边的空白
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

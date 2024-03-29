/*
    Author: Shiliang Chen, Yijie Lu

    Assertion file containing all the assertions of algorithms.
    material-ui library is used for UI.
*/

import { makeStyles } from "@material-ui/core/styles";
import "../../fonts/fonts.css";
import { color } from "../../scenes/mainPages/Correctness";

// define css classes
const useStyles = makeStyles((theme) => ({
    AssertNoBack: {
        backgroundColor: "#DCDCDC",
        borderRadius: 15,
        marginTop: -8,
        letterSpacing: -0.5,
        fontSize: 12,
        fontWeight: 20,
        fontStyle: "italic",
        fontFamily: "Space Mono",
        textAlign: "left",
        padding: 3,
    },
    AssertBack: {
        backgroundColor: "#DCDCDC",
        borderRadius: 15,
        marginTop: -8,
        letterSpacing: -0.5,
        fontSize: 12,
        fontWeight: 20,
        fontStyle: "italic",
        fontFamily: "Space Mono",
        textAlign: "left",
        color: color,
        padding: 3,
    },
    background: {
        backgroundColor: "#FEE5D4",
        borderRadius: 5,
        marginTop: -8,
        letterSpacing: 0.5,
        fontFamily: "Space Mono",
        lineHeight: "22px",
        fontSize: "13px",
        paddingLeft: "5px",
    },
    noBackground: {
        borderRadius: 5,
        marginTop: -8,
        letterSpacing: 0.5,
        fontFamily: "Space Mono",
        lineHeight: "22px",
        fontSize: "13px",
        paddingLeft: "5px",
    },
}));

const Bubble = (props) => {
    const { blockNum } = props;
    const classes = useStyles();

    const bubbleCode = (
        <div>
            <pre
                className={
                    blockNum === 1 ? classes.background : classes.noBackground
                }
            >
                {`length = Arr.length`}
            </pre>
            <pre
                className={
                    blockNum === 2 ? classes.background : classes.noBackground
                }
            >
                {`for i from length-1 to 1 do`}
            </pre>
            {/* assertion */}
            <pre
                className={
                    blockNum === 2 ? classes.AssertBack : classes.AssertNoBack
                }
            >
                &nbsp;Elements after Arr[i] are sorted if exist
            </pre>
            <pre
                className={
                    blockNum === 3 ? classes.background : classes.noBackground
                }
            >
                {`  for j from 0 to i-1 do`}
            </pre>
            {/* assertion */}
            <pre
                className={
                    blockNum === 3 ? classes.AssertBack : classes.AssertNoBack
                }
            >
                &nbsp;Arr[j] is the largest among Arr[0] to Arr[j]
            </pre>
            <pre
                className={
                    blockNum === 4 ? classes.background : classes.noBackground
                }
            >
                {`    if Arr[j] > Arr[j+1] then`}
            </pre>
            <pre
                className={
                    blockNum === 5 ? classes.background : classes.noBackground
                }
            >
                {`      swap(Arr[j], Arr[j+1])`}
            </pre>
            <pre
                className={
                    blockNum === 6 ? classes.background : classes.noBackground
                }
            >
                {`    end if`}
            </pre>
            {/* assertion */}
            <pre
                className={
                    blockNum === 6 ? classes.AssertBack : classes.AssertNoBack
                }
            >
                &nbsp;Arr[j+1] is the largest among Arr[0] to Arr[j+1]
            </pre>
            <pre
                className={
                    blockNum === 7 ? classes.background : classes.noBackground
                }
            >
                {`  end for`}
            </pre>
            {/* assertion */}
            <pre
                className={
                    blockNum === 7 ? classes.AssertBack : classes.AssertNoBack
                }
            >
                &nbsp;Arr[i] is the largest value among Arr[0] to Arr[i] <br />
                &nbsp;Arr[i] to the end are sorted
            </pre>
            <pre
                className={
                    blockNum === 8 ? classes.background : classes.noBackground
                }
            >
                {`end for`}
            </pre>

            <pre
                className={
                    blockNum === 9 ? classes.background : classes.noBackground
                }
            >
                {`return Arr`}
            </pre>
            {/* assertion */}
            <pre
                className={
                    blockNum === 9 ? classes.AssertBack : classes.AssertNoBack
                }
            >
                &nbsp;From the first to the end of the array are sorted
            </pre>
        </div>
    );

    return bubbleCode;
};

const Selection = (props) => {
    const { blockNum } = props;
    const classes = useStyles();

    const selectionCode = (
        <div>
            <pre
                className={
                    blockNum === 1 ? classes.background : classes.noBackground
                }
            >
                {`n = Arr.length`}
            </pre>
            <pre
                className={
                    blockNum === 2 ? classes.background : classes.noBackground
                }
            >
                {`for j=1 to n-1 do`}
            </pre>
            <pre
                className={
                    blockNum === 3 ? classes.background : classes.noBackground
                }
            >
                {`  smallest = j`}
            </pre>
            <pre
                className={
                    blockNum === 4 ? classes.background : classes.noBackground
                }
            >
                {`  for i = j+1 to n do`}
            </pre>
            <pre
                className={
                    blockNum === 5 ? classes.background : classes.noBackground
                }
            >
                {`    if Arr[i] < Arr[smallest] then`}
            </pre>
            <pre
                className={
                    blockNum === 6 ? classes.background : classes.noBackground
                }
            >
                {`      smallest = i`}
            </pre>
            <pre
                className={
                    blockNum === 7 ? classes.background : classes.noBackground
                }
            >
                {`    end if`}
            </pre>
            {/* assertion */}
            <pre
                className={
                    blockNum === 7 ? classes.AssertBack : classes.AssertNoBack
                }
            >
                &nbsp;Arr[smallest] is the minumum among Arr[0] to Arr[i]
            </pre>
            <pre
                className={
                    blockNum === 8 ? classes.background : classes.noBackground
                }
            >
                {`  end for`}
            </pre>
            <pre
                className={
                    blockNum === 9 ? classes.background : classes.noBackground
                }
            >
                {`  swap(Arr[j],Arr[smallest])`}
            </pre>
            {/* assertion */}
            <pre
                className={
                    blockNum === 9 ? classes.AssertBack : classes.AssertNoBack
                }
            >
                &nbsp;Arr[0] to Arr[j] are all sorted
            </pre>
            <pre
                className={
                    blockNum === 10 ? classes.background : classes.noBackground
                }
            >
                {`end for`}
            </pre>
            <pre
                className={
                    blockNum === 11 ? classes.background : classes.noBackground
                }
            >
                {`return Arr`}
            </pre>
            {/* assertion */}
            <pre
                className={
                    blockNum === 11 ? classes.AssertBack : classes.AssertNoBack
                }
            >
                &nbsp;Repeating ends, the last new minimum is the last <br />
                &nbsp;number, which means all numbers are sorted
            </pre>
        </div>
    );

    return selectionCode;
};

const Insertion = (props) => {
    const { blockNum } = props;
    const classes = useStyles();

    const insertionCode = (
        <div>
            <pre
                className={
                    blockNum === 1 ? classes.background : classes.noBackground
                }
            >
                {`length = Arr.length `}
            </pre>
            <pre
                className={
                    blockNum === 2 ? classes.background : classes.noBackground
                }
            >
                {`for i = 1 to length -1 do`}
            </pre>
            {/* assertion */}
            <pre
                className={
                    blockNum === 8 ? classes.AssertBack : classes.AssertNoBack
                }
            >
                &nbsp;Elements before Arr[i] are sorted
            </pre>
            <pre
                className={
                    blockNum === 3 ? classes.background : classes.noBackground
                }
            >
                {`  preIndex = i - 1`}
            </pre>
            <pre
                className={
                    blockNum === 4 ? classes.background : classes.noBackground
                }
            >
                {`  current = arr[i]`}
            </pre>
            <pre
                className={
                    blockNum === 5 ? classes.background : classes.noBackground
                }
            >
                {`  while preIndex>=0 && current<Arr[preIndex] do`}
            </pre>
            {/* assertion */}
            <pre
                className={
                    blockNum === 5 ? classes.AssertBack : classes.AssertNoBack
                }
            >
                &nbsp;Current is smaller than the preIndex elements
            </pre>
            <pre
                className={
                    blockNum === 6 ? classes.background : classes.noBackground
                }
            >
                {`    Arr[preIndex + 1] = Arr[preIndex]`}
            </pre>
            <pre
                className={
                    blockNum === 7 ? classes.background : classes.noBackground
                }
            >
                {`    preIndex--`}
            </pre>
            <pre
                className={
                    blockNum === 8 ? classes.background : classes.noBackground
                }
            >
                {`  end while`}
            </pre>
            <pre
                className={
                    blockNum === 9 ? classes.background : classes.noBackground
                }
            >
                {`Arr[preIndex + 1] = current`}
            </pre>
            {/* assertion */}
            <pre
                className={
                    blockNum === 9 ? classes.AssertBack : classes.AssertNoBack
                }
            >
                &nbsp;Current and elements before current are all sorted
            </pre>

            <pre
                className={
                    blockNum === 10 ? classes.background : classes.noBackground
                }
            >
                {`end for`}
            </pre>
            <pre
                className={
                    blockNum === 11 ? classes.background : classes.noBackground
                }
            >
                {`return Arr`}
            </pre>
            {/* assertion */}
            <pre
                className={
                    blockNum === 11 ? classes.AssertBack : classes.AssertNoBack
                }
            >
                &nbsp;From the first to the end of the array are sorted <br />
            </pre>
        </div>
    );

    return insertionCode;
};

const Quick = (props) => {
    const { blockNum } = props;
    const classes = useStyles();

    const quickCode = (
        <div>
            {/* <pre className={classes.algo}>
{`Algorithm: QuickSort(Arr)
Input: an array of integers Arr.
Output: The result of sorting Arr.`}
        </pre>
        <pre className={classes.noBackground}>
{`//partition(a,b) is a subset of Arr
//including all elments from Arr[a] to Arr[b].
`}
        </pre> */}
            <pre
                className={
                    blockNum === 1 ? classes.background : classes.noBackground
                }
            >
                {`if leftIndex < rightIndex then`}
            </pre>
            <pre
                className={
                    blockNum === 2 ? classes.background : classes.noBackground
                }
            >
                {`  pivot = partition(Arr, leftIndex, rightIndex)`}
            </pre>
            {/* assertion */}
            <pre
                wordWrap="break-word"
                className={
                    blockNum === 2 ? classes.AssertBack : classes.AssertNoBack
                }
            >
                {` The pivot is at its sorted position `}
            </pre>
            <pre
                className={
                    blockNum === 3 ? classes.background : classes.noBackground
                }
            >
                {`  quickSort(Arr, leftIndex, pivot-1)`}
            </pre>
            {/* assertion */}
            <pre
                wordWrap="break-word"
                className={
                    blockNum === 3 ? classes.AssertBack : classes.AssertNoBack
                }
            >
                {` The left part of pivot is sorted`}
            </pre>
            <pre
                className={
                    blockNum === 4 ? classes.background : classes.noBackground
                }
            >
                {`  quickSort(Arr, pivot-1, rightIndex)`}
            </pre>
            {/* assertion */}
            <pre
                wordWrap="break-word"
                className={
                    blockNum === 4 ? classes.AssertBack : classes.AssertNoBack
                }
            >
                {` The right part of pivot is sorted`}
            </pre>

            <pre
                className={
                    blockNum === 5 ? classes.background : classes.noBackground
                }
            >
                {`end if`}
            </pre>

            {/* assertion */}
            <pre
                wordWrap="break-word"
                className={
                    blockNum === 5 ? classes.AssertBack : classes.AssertNoBack
                }
            >
                &nbsp;All pivots are at sorted position, <br /> which means all
                numbers are sorted
            </pre>
        </div>
    );

    return quickCode;
};

const Heap = (props) => {
    const { blockNum } = props;
    const classes = useStyles();

    const heapCode = (
        <div>
            <pre
                className={
                    blockNum === 1 ? classes.background : classes.noBackground
                }
            >
                {`for i = Arr.length - 1 to 0 do`}
            </pre>
            <pre
                className={
                    blockNum === 2 ? classes.background : classes.noBackground
                }
            >
                {`  maxHeapify(Arr, 0, i)`}
            </pre>
            <pre
                className={
                    blockNum === 3 ? classes.background : classes.noBackground
                }
            >
                {`  swap(Arr[0], Arr[i])`}
            </pre>
            {/* Assertion */}
            <pre
                className={
                    blockNum === 3 ? classes.AssertBack : classes.AssertNoBack
                }
            >
                {`  Elements after Arr[i] are sorted if exist`}
            </pre>
            <pre
                className={
                    blockNum === 4 ? classes.background : classes.noBackground
                }
            >
                {`end for`}
            </pre>
            <pre
                className={
                    blockNum === 5 ? classes.background : classes.noBackground
                }
            >
                {`return Arr`}
            </pre>
            {/* Assertion */}
            <pre
                className={
                    blockNum === 5 ? classes.AssertBack : classes.AssertNoBack
                }
            >
                &nbsp;&nbsp;All nodes are discarded from the heap, the array is{" "}
                <br />
                &nbsp;&nbsp;sorted
            </pre>
        </div>
    );

    return heapCode;
};

const Merge = (props) => {
    const { blockNum } = props;
    const classes = useStyles();

    const mergeCode = (
        <div>
            <pre
                className={
                    blockNum === 1 ? classes.background : classes.noBackground
                }
            >
                {`if leftIndex > rightIndex then`}
            </pre>
            <pre
                className={
                    blockNum === 2 ? classes.background : classes.noBackground
                }
            >
                {`  return Arr`}
            </pre>
            <pre
                className={
                    blockNum === 3 ? classes.background : classes.noBackground
                }
            >
                {`else`}
            </pre>
            {/* Assertion */}
            <pre
                className={
                    blockNum === 3 ? classes.AssertBack : classes.AssertNoBack
                }
            >
                &nbsp;&nbsp;LeftIndex is less than rightIndex
            </pre>
            <pre
                className={
                    blockNum === 4 ? classes.background : classes.noBackground
                }
            >
                {`  midIndex = (leftIndex + rightIndex) / 2`}
            </pre>
            {/* Assertion */}
            <pre
                className={
                    blockNum === 4 ? classes.AssertBack : classes.AssertNoBack
                }
            >
                &nbsp;&nbsp;LeftIndex to rightIndex of array is splited into{" "}
                <br />
                &nbsp;&nbsp;two parts
            </pre>
            <pre
                className={
                    blockNum === 5 ? classes.background : classes.noBackground
                }
            >
                {`  mergeSort(array, leftIndex, midIndex)`}
            </pre>
            {/* Assertion */}
            <pre
                className={
                    blockNum === 5 ? classes.AssertBack : classes.AssertNoBack
                }
            >
                &nbsp;&nbsp;LeftIndex to midIndex of the array (left part){" "}
                <br />
                &nbsp;&nbsp;are sorted
            </pre>
            <pre
                className={
                    blockNum === 6 ? classes.background : classes.noBackground
                }
            >
                {`  mergeSort(array, midIndex+1, rightIndex)`}
            </pre>
            {/* Assertion */}
            <pre
                className={
                    blockNum === 6 ? classes.AssertBack : classes.AssertNoBack
                }
            >
                &nbsp;&nbsp;MidIndex to rightIndex of the array (right part){" "}
                <br />
                &nbsp;&nbsp;are sorted
            </pre>
            <pre
                className={
                    blockNum === 7 ? classes.background : classes.noBackground
                }
            >
                {`  merge(array, leftIndex, midIndex, rightIndex)`}
            </pre>
            {/* Assertion */}
            <pre
                className={
                    blockNum === 7 ? classes.AssertBack : classes.AssertNoBack
                }
            >
                &nbsp;&nbsp;Left part and right part are merged into sorted
                <br />
                &nbsp;&nbsp;leftIndex to rightIndex of array are sorted
            </pre>
            <pre
                className={
                    blockNum === 8 ? classes.background : classes.noBackground
                }
            >
                {`  return Arr`}
            </pre>
            {/* Assertion */}
            <pre
                className={
                    blockNum === 8 ? classes.AssertBack : classes.AssertNoBack
                }
            >
                &nbsp;&nbsp;Start to end of array are sorted, merge sort
                finished
            </pre>
            <pre
                className={
                    blockNum === 0 ? classes.background : classes.noBackground
                }
            >
                {`end if`}
            </pre>
        </div>
    );

    return mergeCode;
};

export { Bubble, Selection, Insertion, Quick, Heap, Merge };

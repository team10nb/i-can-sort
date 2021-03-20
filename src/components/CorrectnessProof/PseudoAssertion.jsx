/*
Author: Ruizi Han, Yani Huang
*/

import { makeStyles } from "@material-ui/core/styles";
import "../../fonts/fonts.css";
import { color } from "../../scenes/mainPages/Correctness";

const useStyles = makeStyles((theme) => ({
    qAssertNoBack: {
        backgroundColor: "#DCDCDC",
        borderRadius: 15,
        marginTop: -8,
        // marginBottom: 3,
        letterSpacing: -0.5,
        fontSize: 12,
        fontWeight: 20,
        fontStyle: "italic",
        // paddingLeft:"5px",
        fontFamily: "Space Mono",
        textAlign: "left",
        padding: 3,
        // textAlign: 'center',
    },
    qAssertBack: {
        backgroundColor: "#DCDCDC",
        borderRadius: 15,
        marginTop: -8,
        // marginBottom: 2,
        letterSpacing: -0.5,
        fontSize: 12,
        fontWeight: 20,
        fontStyle: "italic",
        // paddingLeft:"5px",
        fontFamily: "Space Mono",
        textAlign: "left",
        color: color,
        padding: 3,
        // textAlign: 'center',
    },
    background: {
        backgroundColor: "#FEE5D4",
        borderRadius:5,
        marginTop: -8,
        letterSpacing: 0.5,
        fontFamily: "Space Mono",
        lineHeight: "22px",
        fontSize: "13px",
        paddingLeft: "5px",
    },
    noBackground: {
        borderRadius:5,
        marginTop: -8,
        letterSpacing: 0.5,
        fontFamily:"Space Mono",
        lineHeight:"22px",
        fontSize:"13px",
        paddingLeft:"5px",
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
                {`for i from length to 1 do`}
            </pre>
            <pre
                className={
                    blockNum === 2 ? classes.qAssertBack : classes.qAssertNoBack
                }
            >
                &nbsp;Elements after i th are sorted if exist
            </pre>
            <pre
                className={
                    blockNum === 3 ? classes.background : classes.noBackground
                }
            >
                {`  for j from 0 to i do`}
            </pre>
            <pre
                className={
                    blockNum === 3 ? classes.qAssertBack : classes.qAssertNoBack
                }
            >
                &nbsp;Arr[j] is the largest among the first to j th
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
            <pre
                className={
                    blockNum === 6 ? classes.qAssertBack : classes.qAssertNoBack
                }
            >
                &nbsp;Arr[j+1] is the largest among the first to j+1 th
            </pre>
            <pre
                className={
                    blockNum === 7 ? classes.background : classes.noBackground
                }
            >
                {`  end for`}
            </pre>
            <pre
                className={
                    blockNum === 7 ? classes.qAssertBack : classes.qAssertNoBack
                }
            >
                &nbsp;Arr[i] is the largest among first to Arr[j+1] <br/>
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
            <pre
                className={
                    blockNum === 9 ? classes.qAssertBack : classes.qAssertNoBack
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
                {`    if seq[i] < seq[smallest] then`}
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
            <pre
                className={
                    blockNum === 7 ? classes.qAssertBack : classes.qAssertNoBack
                }
            >
                &nbsp;The last marked number is the minumum <br/>
                &nbsp;among the unsorted numbers
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
            <pre
                className={
                    blockNum === 9 ? classes.qAssertBack : classes.qAssertNoBack
                }
            >
                &nbsp;The new minimum and the numbers <br/>
                &nbsp;before the new minimum are all sorted
            </pre>
            <pre
                className={
                    blockNum === 11 ? classes.background : classes.noBackground
                }
            >
                {`end for`}
            </pre>
            <pre
                className={
                    blockNum === 11 ? classes.qAssertBack : classes.qAssertNoBack
                }
            >
                &nbsp;Repeating ends, the last new minimum is the last <br/>
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
            <pre
                className={
                    blockNum === 8 ? classes.qAssertBack : classes.qAssertNoBack
                }
            >
                &nbsp;Elements before i th are sorted
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
            </pre><pre
                className={
                    blockNum === 5 ? classes.qAssertBack : classes.qAssertNoBack
                }
            >
                &nbsp;current is smaller than the preIndex elements
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
            <pre
                className={
                    blockNum === 9 ? classes.qAssertBack : classes.qAssertNoBack
                }
            >
                &nbsp;current and elements before current, <br/>
                &nbsp;they are all sorted 
            </pre>

            <pre
                className={
                    blockNum === 11 ? classes.background : classes.noBackground
                }
            >
                {`end for`}
            </pre>
            <pre
                className={
                    blockNum === 11 ? classes.qAssertBack : classes.qAssertNoBack
                }
            >
                &nbsp;Elements first to last are all sorted <br/>
                &nbsp;array is all sorted 
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
                {`for each unsorted partition(a,b) do`}
            </pre>
            <pre
                className={
                    blockNum === 2 ? classes.background : classes.noBackground
                }
            >
                {`  pivot = position of a random element`}
            </pre>
            <pre
                className={
                    blockNum === 3 ? classes.background : classes.noBackground
                }
            >
                {`  swap(Arr[pivot], Arr[a])`}
            </pre>
            <pre
                className={
                    blockNum === 4 ? classes.background : classes.noBackground
                }
            >
                {`  storeIndex = x + 1`}
            </pre>
            <pre
                className={
                    blockNum === 5 ? classes.background : classes.noBackground
                }
            >
                {`  for i = x + 1 to b do`}
            </pre>
            <pre
                className={
                    blockNum === 6 ? classes.background : classes.noBackground
                }
            >
                {`    if Arr[i] < Arr[pivot] then`}
            </pre>
            <pre
                className={
                    blockNum === 7 ? classes.background : classes.noBackground
                }
            >
                {`      swap(Arr[i], Arr[storeIndex])`}
            </pre>
            <pre
                className={
                    blockNum === 8 ? classes.background : classes.noBackground
                }
            >
                {`      storeIndex++`}
            </pre>
            {/* assertion */}
            <pre
                className={
                    blockNum === 8 ? classes.qAssertBack : classes.qAssertNoBack
                }
            >
                &nbsp;The element[i] would be swapped with pivot
            </pre>

            <pre
                className={
                    blockNum === 9 ? classes.background : classes.noBackground
                }
            >
                {`    end if`}
            </pre>
            <pre
                className={
                    blockNum === 10
                        ? classes.background
                        : classes.noBackground
                }
            >
                {`  end for`}
            </pre>
            <pre
                className={
                    blockNum === 11
                        ? classes.background
                        : classes.noBackground
                }
            >
                {`  swap(Arr[pivot], Arr[storeIndex - 1])`}
            </pre>
            <pre
                className={
                    blockNum === 12
                        ? classes.background
                        : classes.noBackground
                }
            >
                {`end for`}
            </pre>
            {/* assertion */}
            <pre
                wordWrap="break-word"
                className={
                    blockNum === 12
                        ? classes.qAssertBack
                        : classes.qAssertNoBack
                }
            >
                {` The pivot is at its sorted position `}
            </pre>
            <pre
                className={
                    blockNum === 13
                        ? classes.background
                        : classes.noBackground
                }
            >
                {`return`}
            </pre>
            {/* assertion */}
            <pre
                wordWrap="break-word"
                className={
                    blockNum === 13
                        ? classes.qAssertBack
                        : classes.qAssertNoBack
                }
            >
                &nbsp;All pivots are at sorted position, <br />{" "}
                which means all numbers are sorted
            </pre>
            {/* <pre wordWrap="break-word" className={blockNum===13 ? classes.qAssertBack : classes.qAssertNoBack}>

        </pre> */}
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
                {`  swap(0, i)`}
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
            <pre
                className={
                    blockNum === 4 ? classes.background : classes.noBackground
                }
            >
                {`  midIndex = (leftIndex + rightIndex) / 2`}
            </pre>
            <pre
                className={
                    blockNum === 5 ? classes.background : classes.noBackground
                }
            >
                {`  mergeSort(array, leftIndex, midIndex)`}
            </pre>
            <pre
                className={
                    blockNum === 6 ? classes.background : classes.noBackground
                }
            >
                {`  mergeSort(array, midIndex+1, rightIndex)`}
            </pre>
            <pre
                className={
                    blockNum === 7 ? classes.background : classes.noBackground
                }
            >
                {`  merge(array, leftIndex, midIndex, rightIndex)`}
            </pre>
            <pre
                className={
                    blockNum === 8 ? classes.background : classes.noBackground
                }
            >
                {`  return Arr`}
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

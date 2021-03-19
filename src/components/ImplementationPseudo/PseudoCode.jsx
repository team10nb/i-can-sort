/*
Author: Ruizi Han, Yani Huang
*/

import { makeStyles } from "@material-ui/core/styles";
import "../../fonts/fonts.css";

const useStyles = makeStyles((theme) => ({
    algo:{
        marginTop: -4,
        letterSpacing: -0.5,
        fontSize: 15,
        // paddingLeft:"5px",
        fontFamily: "Space Mono",
        // textAlign: 'center',
    },
    background:{
        backgroundColor: "#cfd9e7",
        marginTop: -6,
        letterSpacing: 0.5,
        fontFamily:"Space Mono",
        lineHeight:"22px",
        fontSize:"12px",
        paddingLeft:"5px",
    },
    noBackground:{
        marginTop: -6,
        letterSpacing: 0.5,
        fontFamily:"Space Mono",
        lineHeight:"22px",
        fontSize:"12px",
        paddingLeft:"5px",
    },  
    hBackground:{
        backgroundColor: "#cfd9e7",
        marginTop: -6,
        letterSpacing: 0,
        fontFamily:"Space Mono",
        lineHeight:"22px",
        fontSize:"12px",
        paddingLeft:"8px", 
    },
    hNoBackground:{
        marginTop: -6,
        letterSpacing: 0,
        fontFamily:"Space Mono",
        lineHeight:"22px",
        fontSize:"12px",
        paddingLeft:"8px", 
    },
    qBackground:{
        backgroundColor: "#cfd9e7",
        marginTop: -11,
        letterSpacing: 0.5,
        fontFamily:"Space Mono",
        lineHeight:"22px",
        fontSize:"12px",
        paddingLeft:"5px",
    },
    qNoBackground:{
        marginTop: -11,
        letterSpacing: 0.5,
        fontFamily:"Space Mono",
        lineHeight:"22px",
        fontSize:"12px",
        paddingLeft:"5px",  
    },
}));

const Bubble = (props)=> {
    const {blockNum} = props;
    const classes = useStyles();

    const bubbleCode = 
    <div>
        <pre className={classes.algo}>
{`Algorithm: BubbleSort(Arr)
Input: an array of integers Arr.
Output: The result of sorting Arr.`}
        </pre>
        <pre className={blockNum===1 ? classes.background : classes.noBackground}>
{`length = Arr.length`}
        </pre>
        <pre className={blockNum===2 ? classes.background : classes.noBackground}>
{`for i from 0 to length-1 do`}
        </pre>
        <pre className={blockNum===3 ? classes.background : classes.noBackground}>
{`  for j from 0 to length-1-i do`}
        </pre>
        <pre className={blockNum===4 ? classes.background : classes.noBackground}>
{`    if Arr[j] > Arr[j+1] then`}
        </pre>
        <pre className={blockNum===5 ? classes.background : classes.noBackground}>
{`      swap(Arr[j], Arr[j+1])`}
        </pre>
        <pre className={blockNum===6 ? classes.background : classes.noBackground}>
{`    end if`}
        </pre>
        <pre className={blockNum===7 ? classes.background : classes.noBackground}>
{`  end for`}
        </pre>
        <pre className={blockNum===8 ? classes.background : classes.noBackground}>
{`end for`}
        </pre>
        <pre className={blockNum===9 ? classes.background : classes.noBackground}>
{`return Arr`}
        </pre>
    </div>
    
    return(
        bubbleCode
    );
}

const Selection = (props)=> {
    const {blockNum} = props;
    const classes = useStyles();

    const selectionCode = 
    <div>
        <pre className={classes.algo}>
{`Algorithm: SelectionSort(Arr)
Input: an array of integers Arr.
Output: The result of sorting Arr.`}
        </pre>
        <pre className={blockNum===1 ? classes.background : classes.noBackground}>
{`n = Arr.length`}
        </pre>
        <pre className={blockNum===2 ? classes.background : classes.noBackground}>
{`for j=1 to n-1 do`}
        </pre>
        <pre className={blockNum===3 ? classes.background : classes.noBackground}>
{`  smallest = j`}
        </pre>
        <pre className={blockNum===4 ? classes.background : classes.noBackground}>
{`  for i = j+1 to n do`}
        </pre>
        <pre className={blockNum===5 ? classes.background : classes.noBackground}>
{`    if seq[i] < seq[smallest] then`}
        </pre>
        <pre className={blockNum===6 ? classes.background : classes.noBackground}>
{`      smallest = i`}
        </pre>
        <pre className={blockNum===7 ? classes.background : classes.noBackground}>
{`    end if`}
        </pre>
        <pre className={blockNum===8 ? classes.background : classes.noBackground}>
{`  end for`}
        </pre>
        <pre className={blockNum===9 ? classes.background : classes.noBackground}>
{`  swap(Arr[j],Arr[smallest])`}
        </pre>
        <pre className={blockNum===10 ? classes.background : classes.noBackground}>
{`end for`}
        </pre>
        <pre className={blockNum===11 ? classes.background : classes.noBackground}>
{`return Arr`}
        </pre>
    </div>

    return(
        selectionCode
    );
}

  
  

const Insertion = (props)=> {
    const {blockNum} = props;
    const classes = useStyles();

    const insertionCode = 
    <div>
        <pre className={classes.algo}>
{`Algorithm: InsertionSort(Arr)
Input: an array of integers Arr.
Output: The result of sorting Arr.`}
        </pre>
        <pre className={blockNum===1 ? classes.background : classes.noBackground}>
{`length = Arr.length `}
        </pre>
        <pre className={blockNum===2 ? classes.background : classes.noBackground}>
{`for i = 1 to length -1 do`}
        </pre>
        <pre className={blockNum===3 ? classes.background : classes.noBackground}>
{`  preIndex = i - 1`}
        </pre>
        <pre className={blockNum===4 ? classes.background : classes.noBackground}>
{`  current = arr[i]`}
        </pre>
        <pre className={blockNum===5 ? classes.background : classes.noBackground}>
{`  while preIndex>=0 && current<Arr[preIndex] do`}
        </pre>
        <pre className={blockNum===6 ? classes.background : classes.noBackground}>
{`    Arr[preIndex + 1] = Arr[preIndex] !!!ADD COMMENT`}
        </pre>
        <pre className={blockNum===7 ? classes.background : classes.noBackground}>
{`    preIndex--`}
        </pre>
        <pre className={blockNum===8 ? classes.background : classes.noBackground}>
{`  end while`}
        </pre>
        <pre className={blockNum===9 ? classes.background : classes.noBackground}>
{`Arr[preIndex + 1] = current`}
        </pre>
        <pre className={blockNum===10 ? classes.background : classes.noBackground}>
{`end for`}
        </pre>
        <pre className={blockNum===11 ? classes.background : classes.noBackground}>
{`return Arr`}
        </pre>
    </div>
    
    return(
        insertionCode
    );

}  

const Quick = (props)=> {
    const {blockNum} = props;
    const classes = useStyles();

    const quickCode = 
    <div>
        <pre className={classes.algo}>
{`Algorithm: QuickSort(Arr)
Input: an array of integers Arr.
Output: The result of sorting Arr.`}
        </pre>
        <pre className={classes.qNoBackground}>
{`//partition(a,b) is a subset of Arr
//including all elments from Arr[a] to Arr[b].
`}
        </pre>
        <pre className={blockNum===1 ? classes.qBackground : classes.qNoBackground}>
{`for each unsorted partition(a,b) do`}
        </pre>
        <pre className={blockNum===2 ? classes.qBackground : classes.qNoBackground}>
{`  pivot = position of randomly selected element`}
        </pre>
        <pre className={blockNum===3 ? classes.qBackground : classes.qNoBackground}>
{`  swap(Arr[pivot], Arr[a])`}
        </pre>
        <pre className={blockNum===4 ? classes.qBackground : classes.qNoBackground}>
{`  storeIndex = x + 1`}
        </pre>
        <pre className={blockNum===5 ? classes.qBackground : classes.qNoBackground}>
{`  for i = x + 1 to b do`}
        </pre>
        <pre className={blockNum===6 ? classes.qBackground : classes.qNoBackground}>
{`    if Arr[i] < Arr[pivot] then`}
        </pre>
        <pre className={blockNum===7 ? classes.qBackground : classes.qNoBackground}>
{`      swap(Arr[i], Arr[storeIndex])`}
        </pre>
        <pre className={blockNum===8 ? classes.qBackground : classes.qNoBackground}>
{`      storeIndex++`}
        </pre>
        <pre className={blockNum===9 ? classes.qBackground : classes.qNoBackground}>
{`    end if`}
        </pre>
        <pre className={blockNum===10 ? classes.qBackground : classes.qNoBackground}>
{`  end for`}
        </pre>
        <pre className={blockNum===11 ? classes.qBackground : classes.qNoBackground}>
{`  swap(Arr[pivot], Arr[storeIndex - 1])`}
        </pre>
        <pre className={blockNum===12 ? classes.qBackground : classes.qNoBackground}>
{`end for`}
        </pre>
        <pre className={blockNum===13 ? classes.qBackground : classes.qNoBackground}>
{`return Arr`}
        </pre>
    </div>

    return(
        quickCode
    );
}



const Heap = (props)=> {
    const {blockNum} = props;
    const classes = useStyles();

    const heapCode = 
    <div>
        <pre className={classes.algo}>
{`Algorithm: HeapSort(Arr)
Input: an array of integers Arr.
Output: The result of sorting Arr.`}
        </pre>
        <pre className={blockNum===1 ? classes.background : classes.noBackground}>
{`Build_max_heap from unordered Arr`}
        </pre>
        <pre className={blockNum===2 ? classes.background : classes.noBackground}>
{`for each unsorted element`}
        </pre>
        <pre className={blockNum===3 ? classes.background : classes.noBackground}>
{`  set the first unsorted element as the maximum`}
        </pre>
        <pre className={blockNum===4 ? classes.background : classes.noBackground}>
{`  for i = 0 to lastSortedIndex - 1`}
        </pre>
        <pre className={blockNum===5 ? classes.background : classes.noBackground}>
{`    if element[n] < element[maximum] then`}
        </pre>
        <pre className={blockNum===6 ? classes.background : classes.noBackground}>
{`      swap(n, maximum)`}
        </pre>
        <pre className={blockNum===7 ? classes.background : classes.noBackground}>
{`      swap(Arr[j],Arr[j-1])`}
        </pre>
        <pre className={blockNum===8 ? classes.hBackground : classes.hNoBackground}>
{`      Discard node n from heap decrementing heap size`}
        </pre>
        <pre className={blockNum===9 ? classes.background : classes.noBackground}>
{`    end if`}
        </pre>
        <pre className={blockNum===10 ? classes.background : classes.noBackground}>
{`  end for`}
        </pre>
        <pre className={blockNum===11 ? classes.background : classes.noBackground}>
{`end for`}
        </pre>
        <pre className={blockNum===12 ? classes.background : classes.noBackground}>
{`return Arr`}
        </pre>
    </div>

    return(
        heapCode
    );
}

const Merge = (props)=> {
    const {blockNum} = props;
    const classes = useStyles();

    const mergeCode = 
    <div>
        <pre className={classes.algo}>
{`Algorithm: MergeSort(Arr)
Input: an array of integers Arr.
Output: The result of sorting Arr.`}
        </pre>
        <pre className={blockNum===1 ? classes.background : classes.noBackground}>
{`if leftIndex > rightIndex then`}
        </pre>
        <pre className={blockNum===2 ? classes.background : classes.noBackground}>
{`  return Arr`}
        </pre>
        <pre className={blockNum===3 ? classes.background : classes.noBackground}>
{`else`}
        </pre>
        <pre className={blockNum===4 ? classes.background : classes.noBackground}>
{`  midIndex = (leftIndex + rightIndex) / 2`}
        </pre>
        <pre className={blockNum===5 ? classes.background : classes.noBackground}>
{`  mergeSort(array, leftIndex, midIndex)`}
        </pre>
        <pre className={blockNum===6 ? classes.background : classes.noBackground}>
{`  mergeSort(array, midIndex+1, rightIndex)`}
        </pre>
        <pre className={blockNum===7 ? classes.background : classes.noBackground}>
{`  merge(array, leftIndex, midIndex, rightIndex)`}
        </pre>
        <pre className={blockNum===8 ? classes.background : classes.noBackground}>
{`  return Arr`}
        </pre>
        <pre className={blockNum===0 ? classes.background : classes.noBackground}>
{`end if`}
        </pre>
    </div>

    return(
        mergeCode
    );
}
    
export {
    Bubble,
    Selection,
    Insertion,
    Quick,
    Heap,
    Merge,
};
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    background:{
        backgroundColor: "#cfd9e7",
        marginTop: -6,
    },
    noBackground:{
        marginTop: -6,
    }       
}));

const Bubble = (props)=> {
    const {blockNum} = props;
    const classes = useStyles();

    const bubbleCode = 
    <div>
        <pre className={blockNum===1 ? classes.background : classes.noBackground}>
{`function bubble_sort (array, length) {`}
        </pre>
        <pre className={classes.noBackground}>
{`  var i, j;`}
        </pre>
        <pre className={blockNum===2 ? classes.background : classes.noBackground}>
{`  for(i from 0 to length-1){`}
        </pre>
        <pre className={blockNum===3 ? classes.background : classes.noBackground}>
{`     for(j from 0 to length-1-i){`}
        </pre>
        <pre className={blockNum===4 ? classes.background : classes.noBackground}>
{`       if (array[j] > array[j+1])`}
        </pre>
        <pre className={blockNum===5 ? classes.background : classes.noBackground}>
{`         swap(array[j], array[j+1])`}
        </pre>
        <pre className={blockNum===6 ? classes.background : classes.noBackground}>
{`    }`}
        </pre>
        <pre className={blockNum===7 ? classes.background : classes.noBackground}>
{`  }`}
        </pre>
        <pre className={blockNum===8 ? classes.background : classes.noBackground}>
{`}`}
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
        <pre className={blockNum===1 ? classes.background : classes.noBackground}>
{`repeat (numOfElements - 1) times{`}
        </pre>
        <pre className={blockNum===1 ? classes.background : classes.noBackground}>
{`  set the first unsorted element as the minimum`}
        </pre>
        <pre className={blockNum===1 ? classes.background : classes.noBackground}>
{`  for each of the unsorted elements{`}
        </pre>
        <pre className={blockNum===1 ? classes.background : classes.noBackground}>
{`    if element < currentMinimum{`}
        </pre>
        <pre className={blockNum===1 ? classes.background : classes.noBackground}>
{`      set element as new minimum`}
        </pre>
        <pre>
{`    }`}            
        </pre>
        <pre className={blockNum===1 ? classes.background : classes.noBackground}>
{`  swap minimum with first unsorted position`}
        </pre>
        <pre>
{`  }`}            
        </pre>
        <pre>
{`}`}            
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
        <pre className={blockNum===1 ? classes.background : classes.noBackground}>
{`mark first element as sorted`}
        </pre>
        <pre className={blockNum===2 ? classes.background : classes.noBackground}>
{`for each unsorted element X{`}
        </pre>
        <pre className={blockNum===3 ? classes.background : classes.noBackground}>
{`  'extract' the element X`}
        </pre>
        <pre className={blockNum===4 ? classes.background : classes.noBackground}>
{`  for j = lastSortedIndex down to 0{`}
        </pre>
        <pre className={blockNum===5 ? classes.background : classes.noBackground}>
{`    if current element j > X`}
        </pre>
        <pre className={blockNum===6 ? classes.background : classes.noBackground}>
{`      move sorted element to the right by 1`}
        </pre>
        <pre>
{`    }`}            
        </pre>
        <pre className={blockNum===7 ? classes.background : classes.noBackground}>
{`    break loop and insert X here`}
        </pre>
        <pre>
{`  }`}            
        </pre>
        <pre>
{`}`}            
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
        <pre className={blockNum===7 ? classes.background : classes.noBackground}>
{`for each (unsorted) partition{`}
        </pre>
        <pre className={blockNum===7 ? classes.background : classes.noBackground}>
{`set first element as pivot`}
        </pre>
        <pre className={blockNum===7 ? classes.background : classes.noBackground}>
{`put the pivot to the leftmost position of the array`}
        </pre>
        <pre className={blockNum===7 ? classes.background : classes.noBackground}>
{`  storeIndex = pivotIndex + 1`}
        </pre>
        <pre className={blockNum===7 ? classes.background : classes.noBackground}>
{`  for i = pivotIndex + 1 to rightmostIndex{`}
        </pre>
        <pre className={blockNum===7 ? classes.background : classes.noBackground}>
{`    if element[i] < element[pivot]{`}
        </pre>
        <pre className={blockNum===7 ? classes.background : classes.noBackground}>
{`      swap(i, storeIndex); storeIndex++`}
        </pre>
        <pre>
{`    }`}            
        </pre>
        <pre className={blockNum===7 ? classes.background : classes.noBackground}>
{`  swap(pivot, storeIndex - 1)`}
        </pre>
        <pre>
{`  }`}            
        </pre>
        <pre>
{`}`}            
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
        <pre className={blockNum===7 ? classes.background : classes.noBackground}>
{`Build_max_heap from unordered array`}
        </pre>
        <pre className={blockNum===7 ? classes.background : classes.noBackground}>
{`for each unsorted element {`}
        </pre>
        <pre className={blockNum===7 ? classes.background : classes.noBackground}>
{`  set the first unsorted element as the maximum`}
        </pre>
        <pre className={blockNum===7 ? classes.background : classes.noBackground}>
{`  for i = 0 down to lastSortedIndex - 1{`}
        </pre>
        <pre className={blockNum===7 ? classes.background : classes.noBackground}>
{`    if element[n] < element[maximum]{`}
        </pre>
        <pre className={blockNum===7 ? classes.background : classes.noBackground}>
{`      swap(n, maximum)`}
        </pre>
        <pre className={blockNum===7 ? classes.background : classes.noBackground}>
{`      Discard node n from heap decrementing heap size`}
        </pre>
        <pre>
{`    }`}            
        </pre>
        <pre>
{`  }`}            
        </pre>
        <pre>
{`}`}            
        </pre>
    </div>

    return(
        heapCode
    );
}

// const Merge = (props)=> {
//     const {blockNum} = props;
//     const classes = useStyles();

//     const mergeCode = 
//     <div>
//         <pre className={blockNum===7 ? classes.background : classes.noBackground}>
// {``}
//         </pre>
//         <pre>
// {`    }`}            
//         </pre>
//         <pre>
// {`  }`}            
//         </pre>
//         <pre>
// {`}`}            
//         </pre>
//     </div>

//     return(
//         mergeCode
//     );
// }
    
export {
    Bubble,
    Selection,
    Insertion,
    Quick,
    Heap,
    // Merge,
};
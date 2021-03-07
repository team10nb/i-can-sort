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
        <div>{bubbleCode}</div>
    )
}

export {
    Bubble,
};
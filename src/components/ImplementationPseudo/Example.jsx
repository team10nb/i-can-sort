import ImplementationPseudo from './ImplementationPseudo';
import { Bubble, Selection, Insertion, Quick, Heap, } from './PseudoCode';
import BubbleSort from '../SwitchAnimation/SortingAlgorithms/BubbleSort/BubbleSort';
import SelectionSort from '../SwitchAnimation/SortingAlgorithms/SelectionSort/SelectionSort';
import InsertionSort from '../SwitchAnimation/SortingAlgorithms/InsertionSort/InsertionSort';

const BubbleExample = () => {
    const Code = Bubble;
    const sort = '- Bubble Sort -';
    const arr = [4, 8, 11, 13, 5];
    const {trace, description, blockNums} = BubbleSort(arr);
    
    const props = {
        sort,
        trace,
        description,
        blockNums,
        Code,
    };

    return <ImplementationPseudo {...props}/>
}


const SelectionExample = () => {
    const Code = Selection;
    const sort = '- Selection Sort -';
    const arr = [4, 8, 11, 13, 5];
    const {trace, description, blockNums} = SelectionSort(arr);
    
    const props = {
        sort,
        trace,
        description,
        blockNums,
        Code,
    };

    return <ImplementationPseudo {...props}/>
}

const InsertionExample = () => {
    const Code = Insertion;
    const sort = '- Insertion Sort -';
    const arr = [4, 8, 11, 13, 5];
    const {trace, description, blockNums} = InsertionSort(arr);
    
    const props = {
        sort,
        trace,
        description,
        blockNums,
        Code,
    };

    return <ImplementationPseudo {...props}/>
}


export {
    BubbleExample,
    SelectionExample,
    InsertionExample,
};
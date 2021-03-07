import ImplementationPseudo from './ImplementationPseudo';
import { Bubble, Selection, Insertion, Quick, Heap, } from './PseudoCode';
import BubbleSort from '../SwitchAnimation/SortingAlgorithms/BubbleSort/BubbleSort';

const BubbleExample = () => {
    const Code = Bubble;
    const sort = 'Bubble Sort';
    const arr = [4, 8, 11, 13, 5];
    // const blockNums = [1, 4, 3, 4, 3, 4, 3, 4, 5, 7, 4, 3, 4, 3, 4, 5, 7, 4, 3, 4, 5, 7, 4, 3, 7, 7, 8];
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
    const Code = Bubble;
    const sort = 'Bubble Sort';
    const arr = [4, 8, 11, 13, 5];
    const blockNums = [1, 4, 3, 4, 3, 4, 3, 4, 5, 7, 4, 3, 4, 3, 4, 5, 7, 4, 3, 4, 5, 7, 4, 3, 7, 7, 8];
    const {trace, description} = BubbleSort(arr);
    
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
    SelectionExample
};
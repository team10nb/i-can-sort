/*
    Author: Ruizi Han, Yani Huang
*/

import ImplementationPseudo from './ImplementationPseudo';
import { Bubble, Selection, Insertion, Quick, Heap, Merge } from './PseudoCode';
import BubbleSort from '../SwitchAnimation/SortingAlgorithms/BubbleSort/BubbleSort';
import SelectionSort from '../SwitchAnimation/SortingAlgorithms/SelectionSort/SelectionSort';
import InsertionSort from '../SwitchAnimation/SortingAlgorithms/InsertionSort/InsertionSort';
import QuickSort from '../SwitchAnimation/SortingAlgorithms/QuickSort/QuickSort';
import HeapSort from '../SwitchAnimation/SortingAlgorithms/HeapSort/HeapSort';
import MergeSort from '../SwitchAnimation/SortingAlgorithms/MergeSort/MergeSort';
import BubbleFile from '../../Resource/bubble.pdf';
import SelectionFile from '../../Resource/selection.pdf';
import InsertionFile from '../../Resource/insertion.pdf';
import QuickFile from '../../Resource/quick.pdf';
import MergeFile from '../../Resource/merge.pdf';
import HeapFile from '../../Resource/heap.pdf';


const BubbleExample = () => {
    const Code = Bubble;
    const title = 'Bubble Sort';
    const algorithm = 'bubble';
    const sort = BubbleSort;

    const arr = [4, 8, 11, 13, 5];
    
    const props = {
        title,
        algorithm,
        sort,
        Code,
        file: BubbleFile,
    };

    return <ImplementationPseudo {...props}/>
}


const SelectionExample = () => {
    const Code = Selection;
    const title = 'Selection Sort';
    const algorithm = 'selection';
    const sort = SelectionSort;

    const arr = [4, 8, 11, 13, 5];
    
    const props = {
        title,
        algorithm,
        sort,
        Code,
        file: SelectionFile,
    };

    return <ImplementationPseudo {...props}/>
}

const InsertionExample = () => {
    const Code = Insertion;
    const title = 'Insertion Sort';
    const algorithm = 'insertion';
    const sort = InsertionSort;

    const arr = [4, 13, 11, 8, 5];
    
    const props = {
        title,
        algorithm,
        sort,
        Code,
        file: InsertionFile,
    };

    return <ImplementationPseudo {...props}/>
}

const QuickExample = () => {
    const Code = Quick;
    const title = 'Quick Sort';
    const algorithm = 'quick';
    const sort = QuickSort;

    const arr = [4, 8, 11, 13, 5];
    
    const props = {
        title,
        algorithm,
        sort,
        Code,
        file: QuickFile,
    };

    return <ImplementationPseudo {...props}/>
}

const MergeExample = () => {
    const Code = Merge;
    const title = 'Merge Sort';
    const algorithm = 'merge';
    const sort = MergeSort;

    const arr = [4, 8, 11, 13, 5];
    
    const props = {
        title,
        algorithm,
        sort,
        Code,
        file: MergeFile,
    };

    return <ImplementationPseudo {...props}/>
}

const HeapExample = () => {
    const Code = Heap;
    const title = 'Heap Sort';
    const algorithm = 'heap';
    const sort = HeapSort;

    const arr = [4, 8, 11, 13, 5];

    const props = {
        title,
        algorithm,
        sort,
        Code,
        file: HeapFile,
    };

    return <ImplementationPseudo {...props}/>
}


export {
    BubbleExample,
    SelectionExample,
    InsertionExample,
    QuickExample,
    HeapExample,
    MergeExample,
};

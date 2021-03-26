/*
    Author: Yani Huang, Ruizi Han
*/

import ImplementationPseudo from "./CorrectnessProof";
import {
    Bubble,
    Selection,
    Insertion,
    Quick,
    Heap,
    Merge,
} from "./PseudoAssertion";
import BubbleSort from "../SwitchAnimation/SortingAlgorithms/BubbleSort/BubbleSort";
import SelectionSort from "../SwitchAnimation/SortingAlgorithms/SelectionSort/SelectionSort";
import InsertionSort from "../SwitchAnimation/SortingAlgorithms/InsertionSort/InsertionSort";
import QuickSort from "../SwitchAnimation/SortingAlgorithms/QuickSort/QuickSort";
import HeapSort from "../SwitchAnimation/SortingAlgorithms/HeapSort/HeapSort";
import BubbleFile from "../../resource/Bubble Sort.pdf";
import MergeSort from "../SwitchAnimation/SortingAlgorithms/MergeSort/MergeSort";

const BubbleExample = () => {
    const Code = Bubble;
    const title = "Bubble Sort";
    const algorithm = "bubble";
    const arr = [4, 8, 11, 13, 5];
    const { trace, description, blockNums } = BubbleSort(arr);

    const props = {
        title,
        algorithm,
        trace,
        description,
        blockNums,
        Code,
        file: BubbleFile,
    };

    return <ImplementationPseudo {...props} />;
};

const SelectionExample = () => {
    const Code = Selection;
    const title = "Selection Sort";
    const algorithm = "selection";
    const arr = [4, 8, 11, 13, 5];
    const { trace, description, blockNums } = SelectionSort(arr);

    const props = {
        title,
        algorithm,
        trace,
        description,
        blockNums,
        Code,
    };

    return <ImplementationPseudo {...props} />;
};

const InsertionExample = () => {
    const Code = Insertion;
    const title = "Insertion Sort";
    const algorithm = "insertion";
    const arr = [4, 13, 11, 8, 5];
    const { trace, description, blockNums } = InsertionSort(arr);

    const props = {
        title,
        algorithm,
        trace,
        description,
        blockNums,
        Code,
    };

    return <ImplementationPseudo {...props} />;
};

const QuickExample = () => {
    const Code = Quick;
    const title = "Quick Sort";
    const algorithm = "quick";
    const arr = [4, 8, 11, 13, 5];
    const { trace, description, blockNums } = QuickSort(arr);

    const props = {
        title,
        algorithm,
        trace,
        description,
        blockNums,
        Code,
    };

    return <ImplementationPseudo {...props} />;
};

const MergeExample = () => {
    const Code = Merge;
    const title = "Merge Sort";
    const algorithm = "merge";
    const arr = [4, 8, 11, 13, 5];
    const { trace, description, blockNums } = MergeSort(arr);

    const props = {
        title,
        algorithm,
        trace,
        description,
        blockNums,
        Code,
    };

    return <ImplementationPseudo {...props} />;
};

const HeapExample = () => {
    const Code = Heap;
    const title = "Heap Sort";
    const algorithm = "heap";
    const arr = [4, 8, 11, 13, 5];
    const { trace, description, blockNums } = HeapSort(arr);

    const props = {
        title,
        algorithm,
        trace,
        description,
        blockNums,
        Code,
    };

    return <ImplementationPseudo {...props} />;
};

export {
    BubbleExample,
    SelectionExample,
    InsertionExample,
    QuickExample,
    HeapExample,
    MergeExample,
};

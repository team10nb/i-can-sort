/*
    Author: Ruizi Han, Yani Huang

    Export corresponding implementation for sorting algorithms.
*/

import ImplementationAnimation from "./ImplementationAnimation";
import { Bubble, Selection, Insertion, Quick, Heap, Merge } from "./PseudoCode";
import BubbleSort from "../SwitchAnimation/SortingAlgorithms/BubbleSort/BubbleSort";
import SelectionSort from "../SwitchAnimation/SortingAlgorithms/SelectionSort/SelectionSort";
import InsertionSort from "../SwitchAnimation/SortingAlgorithms/InsertionSort/InsertionSort";
import QuickSort from "../SwitchAnimation/SortingAlgorithms/QuickSort/QuickSort";
import HeapSort from "../SwitchAnimation/SortingAlgorithms/HeapSort/HeapSort";
import MergeSort from "../SwitchAnimation/SortingAlgorithms/MergeSort/MergeSort";
import BubbleFile from "../../resource/bubble.pdf";
import SelectionFile from "../../resource/selection.pdf";
import InsertionFile from "../../resource/insertion.pdf";
import QuickFile from "../../resource/quick.pdf";
import MergeFile from "../../resource/merge.pdf";
import HeapFile from "../../resource/heap.pdf";

const BubbleImplementation = () => {
    const Code = Bubble;
    const title = "Bubble Sort";
    const algorithm = "bubble";
    const sort = BubbleSort;

    const props = {
        title,
        algorithm,
        sort,
        Code,
        file: BubbleFile,
    };

    return <ImplementationAnimation {...props} />;
};

const SelectionImplementation = () => {
    const Code = Selection;
    const title = "Selection Sort";
    const algorithm = "selection";
    const sort = SelectionSort;

    const props = {
        title,
        algorithm,
        sort,
        Code,
        file: SelectionFile,
    };

    return <ImplementationAnimation {...props} />;
};

const InsertionImplementation = () => {
    const Code = Insertion;
    const title = "Insertion Sort";
    const algorithm = "insertion";
    const sort = InsertionSort;

    const props = {
        title,
        algorithm,
        sort,
        Code,
        file: InsertionFile,
    };

    return <ImplementationAnimation {...props} />;
};

const QuickImplementation = () => {
    const Code = Quick;
    const title = "Quick Sort";
    const algorithm = "quick";
    const sort = QuickSort;

    const props = {
        title,
        algorithm,
        sort,
        Code,
        file: QuickFile,
    };

    return <ImplementationAnimation {...props} />;
};

const MergeImplementation = () => {
    const Code = Merge;
    const title = "Merge Sort";
    const algorithm = "merge";
    const sort = MergeSort;

    const props = {
        title,
        algorithm,
        sort,
        Code,
        file: MergeFile,
    };

    return <ImplementationAnimation {...props} />;
};

const HeapImplementation = () => {
    const Code = Heap;
    const title = "Heap Sort";
    const algorithm = "heap";
    const sort = HeapSort;

    const props = {
        title,
        algorithm,
        sort,
        Code,
        file: HeapFile,
    };

    return <ImplementationAnimation {...props} />;
};

export {
    BubbleImplementation,
    SelectionImplementation,
    InsertionImplementation,
    QuickImplementation,
    HeapImplementation,
    MergeImplementation,
};

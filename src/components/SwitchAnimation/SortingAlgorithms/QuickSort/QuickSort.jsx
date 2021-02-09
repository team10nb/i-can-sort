import React from 'react';
import { COLORS, patch, hardcopy, changeColor, swap } from "../Patch/Patch";
import {random} from "lodash";

const QuickSort = (arr) => {
  let patched = patch(arr);
  let description = ["Unsorted Array"];
  // Initial State
  let trace = [hardcopy(patched)];

  function choosePivot(start, end) {
    // randomly pick an element between start and end;
    return random(start, end);
  }

  function partition(array, start, end) {
    let i = start + 1;
    let j = start + 1;


    while (j <= end) {
        // Visualize: Compare item j with pivot
        changeColor(patched, j, COLORS.comparing);
        changeColor(patched, start, COLORS.comparing);
        trace.push(hardcopy(patched));
        description.push("Compare " + array[j].value + " with pivot " + array[start].value);
      if (array[j].value < array[start].value) {
        // Visualize: Mark item that is less than pivot
        changeColor(patched, j, COLORS.left);
        changeColor(patched, start, COLORS.pivot);
        trace.push(hardcopy(patched));
        description.push("Mark " + array[j].value + " as less than pivot " + array[start].value);

        swap(array, i, j);

        // Visualize: Move item to lesser list
        trace.push(hardcopy(patched));
        description.push("Move the smaller " + array[i].value + " to left side");
        i += 1;
      }else{

        changeColor(patched, j, COLORS.original);
      }
      j += 1;
    }

    changeColor(patched, start, COLORS.pivot);
    // Visualize: Mark center position
    let pivot = patched.splice(start, 1);
    patched.splice(i-1, 0, pivot[0]);
    trace.push(hardcopy(patched));
    description.push("All compared, move pivot to the right of smaller ones");


    changeColor(patched, i-1, COLORS.finished);
    for (let j = start; j < i-1; j++) {
      changeColor(patched, j, COLORS.original);
    }
    // Visualize: Now pivot is at the right position
    trace.push(hardcopy(patched));
    description.push("Now pivot is at the correct position");

    // return position of pivot
    return i - 1;
  }

  function recursiveQuickSort(array, start, end) {
    if (start >= end) {
      if (start === end) {
        // Visualize: Mark only item as sorted
        changeColor(patched, start, COLORS.finished);
        trace.push(hardcopy(patched));
        description.push("The only item is certainly sorted");
      }else {
        trace.push(hardcopy(patched));
        description.push("Fine, all sorted");
      }
      return null;
    }

    let pivot = choosePivot(start, end);

    // Visualize: Mark chosen pivot
    changeColor(patched, pivot, COLORS.pivot);
    trace.push(hardcopy(patched));
    description.push("Randomly choose a pivot");

    swap(array, start, pivot);

    // Visualize: Move chosen pivot to start
    trace.push(hardcopy(patched));
    description.push("Move the chosen pivot to the start of this section");

    pivot = partition(array, start, end);



    // Visualize: Move chosen pivot to start
    trace.push(hardcopy(patched));
    description.push("Ok, let's see the left section of this pivot");
    recursiveQuickSort(array, start, pivot - 1);

    // Visualize: Move chosen pivot to start
    trace.push(hardcopy(patched));
    description.push("Ok, let's see the right section of this pivot");
    recursiveQuickSort(array, pivot + 1, end);
  }

  recursiveQuickSort(patched, 0, arr.length - 1);

  trace.push(hardcopy(patched));
  description.push("Quick sort is finished, all sorted");
  return { trace: trace, description: description };
  
};


export const QuickSortDesc = {
  title: 'Quick Sort',
  description: (
    <div>
      <p>
        <a
          href="https://en.wikipedia.org/wiki/Quicksort"
          target="_blank"
          rel="noopener noreferrer"
        >
          Quick Sort
        </a>{' '}
        is an efficient, in-place sorting algorith that in practice is
        faster than MergeSort and HeapSort. However, it is not a stable
        sorting algorithm, meaning that the relative positioning of
        equal sort items is not preserved.Quicksort is a divide and
        conquer algorithm. Quicksort first divides a large array into
        two smaller sub-arrays: the low elements and the high elements.
        Quicksort can then recursively sort the sub-arrays. The steps
        are:
      </p>
      <ol>
        <li>
          Pick an element, called a pivot, from the array. This is
          usually done at random.
        </li>
        <li>Move pivot element to the start of the array.</li>
        <li>
          <em>Partitioning:</em> reorder the array so that all elements
          with values less than the pivot come before the pivot, while
          all elements with values greater than the pivot come after it
          (equal values can go either way). After this partitioning, the
          pivot is in its final position. This is called the{' '}
          <em>partition</em> operation.
        </li>
        <li>
          Recursively apply the above steps to the sub-array of elements
          with smaller values and separately to the sub-array of
          elements with greater values.
        </li>
      </ol>
      <p>
        The base case of the recursion is an array of size zero or one,
        which are sorted by definition.
      </p>
    </div>
  ),
  worstCase: (
    <span>
      O(<em>n</em>
      <sup>2</sup>)
    </span>
  ),
  avgCase: (
    <span>
      O(<em>n</em>log<em>n</em>)
    </span>
  ),
  bestCase: (
    <span>
      O(<em>n</em>log<em>n</em>)
    </span>
  ),
  space: (
    <span>
      O(log<em>n</em>)
    </span>
  )
};

export default QuickSort;

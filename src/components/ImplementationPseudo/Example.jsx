import ImplementationPseudo from './ImplementationPseudo';
import { Bubble } from './PseudoCode';
import BubbleSort from '../SwitchAnimation/SortingAlgorithms/BubbleSort/BubbleSort';

const BubbleExample = () => {
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
};
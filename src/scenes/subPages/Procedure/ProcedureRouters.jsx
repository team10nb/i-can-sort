//Register routes for procedure algorithms
import ProcedureBubble from './Bubble/Bubble';
import ProcedureSelection from './Selection/Selection';
import ProcedureInsertion from './Insertion/Insertion';
import ProcedureQuick from './Quick/Quick';
import ProcedureMerge from './Merge/Merge';
import ProcedureHeap from './Heap/Heap';

const ProcedureRouters = [
    {
       path: '/ProcedureSubPage/Bubble',
       component: ProcedureBubble,
     },
     {
       path: '/ProcedureSubPage/Selection',
       component: ProcedureSelection,
     },
     {
       path: '/ProcedureSubPage/Insertion',
       component: ProcedureInsertion,
     },
     {
        path: '/ProcedureSubPage/Quick',
        component: ProcedureQuick,
      },
      {
        path: '/ProcedureSubPage/Merge',
        component: ProcedureMerge,
      },
      {
        path: '/ProcedureSubPage/Heap',
        component: ProcedureHeap,
      },
   ]
   
export default ProcedureRouters;
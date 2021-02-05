//Register routes for procedure algorithms
import ProcedureBubble from './Bubble/Bubble';
import ProcedureSelection from './Selection/Selection';
import ProcedureInsertion from './Insertion/Insertion';

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
   ]
   
export default ProcedureRouters;
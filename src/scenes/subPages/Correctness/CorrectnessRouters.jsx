//Register routes for procedure algorithms
import CorrectnessTutorial from './CorrectnessTutorial';
import CorrectnessProof from './CorrectnessProof';

const CorrectnessRouters = [
    {
       path: '/Correctness/Tutorial',
       component: CorrectnessTutorial,
     },
     {
        path: '/Correctness/Proof',
        component: CorrectnessProof,
      },
   ]
   
export default CorrectnessRouters;

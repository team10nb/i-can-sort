//Register routes for procedure algorithms
import CorrectnessTutorial from './CorrectnessTutorial';
import CorrectnessProve from './CorrectnessProve';

const CorrectnessRouters = [
    {
       path: '/Correctness/Tutorial',
       component: CorrectnessTutorial,
     },
     {
        path: '/Correctness/Prove',
        component: CorrectnessProve,
      },
   ]
   
export default CorrectnessRouters;
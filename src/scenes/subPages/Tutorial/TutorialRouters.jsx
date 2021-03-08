//Register routes for procedure algorithms
import TutorialSwap from './Swap/Swap';
import TutorialLoop from './Loop/Loop';
import TutorialTerminology from './Terminology/Terminology';


const TutorialRouters = [
    {
       path: '/TutorialSubPage/Swap',
       component: TutorialSwap,
     },
     {
       path: '/TutorialSubPage/Loop',
       component: TutorialLoop,
     },
     {
       path: '/TutorialSubPage/Terminology',
       component: TutorialTerminology,
     },
   ]
   
export default TutorialRouters;
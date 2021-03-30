/*
    Author: Yuting Jiang, Yijie Lu

    Register routers for tutorial subpages
*/

import TutorialSwap from './Swap/Swap';
import TutorialLoop from './Loop/Loop';
import TutorialTerminology from './TutorialTerminology';


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
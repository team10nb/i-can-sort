
import ProcedureRouters from "./ProcedureRouters";
import ProcedureBubble from './Bubble/Bubble';
//
const Routers = [
    {
       path: '/ProcedureSubPage/Bubble',
       component: ProcedureBubble,
     },
     {
       path: '/ProcedureSubPage/Bubble',
       component: ProcedureBubble,
     },
     {
       path: '/ProcedureSubPage/Bubble',
       component: ProcedureBubble,
     },
   ]
   

test('should pass right routers', () => {

    expect(ProcedureRouters).toStrictEqual(Routers);

})
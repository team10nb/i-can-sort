
import ProcedureRouters from "./ProcedureRouters";
import ProcedureBubble from './Bubble/Bubble';
import Router from '../../../Routers';
import { render } from "@testing-library/react";
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

test('should link right to right routers', () => {

   const content = render(< Router {...Routers}/>);
   expect(content).toMatchSnapshot();

})
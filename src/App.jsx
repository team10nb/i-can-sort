import React from "react";
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import TutorialMainPage from './scenes/mainPages/Tutorial';
import TutorialRouters from './scenes/subPages/Tutorial/TutorialRouters';
import CorrectnessMainPage from './scenes/mainPages/Correctness';
import ProcedureMainPage from './scenes/mainPages/Procedure';
import ProcedureRouters from './scenes/subPages/Procedure/ProcedureRouters';
import CorrectnessRouters from './scenes/subPages/Correctness/CorrectnessRouters';

//Return routes
function Routers() {
    return(
        <Router >
            <div>
            <Switch>
            <Route path="/TutorialMainPage" component={TutorialMainPage} />
            {/* <Route path="/ProcedureMainPage" render={props => <ProcedureMainPage algoProcess="0" {...props}/>} /> */}
            <Route path="/ProcedureMainPage" component={ProcedureMainPage} />
            
            <Route path="/CorrectnessMainPage" component={CorrectnessMainPage} />
            <Route path="/TutorialSubPage"
                render={() => {
                    return(
                        <Switch>
                            {TutorialRouters.map((route, algorithm) => (
                                <Route
                                key={algorithm}
	                        	path={route.path}
	                        	component={route.component}
                                />
                            ))}
                        </Switch>
                    );
                }}
            ></Route>
           
            
            <Route path="/Correctness"
                render={() => {
                    return(
                        <Switch>
                            {CorrectnessRouters.map((route, algorithm) => (
                                <Route
                                key={algorithm}
	                        	path={route.path}
	                        	component={route.component}
                                />
                            ))}
                        </Switch>
                    );
                }}
            ></Route>

            <Route path="/ProcedureSubPage"
                render={() => {
                    return(
                        <Switch>
                            {ProcedureRouters.map((route, algorithm) => (
                                <Route
                                key={algorithm}
	                        	path={route.path}
	                        	component={route.component}
                                />
                            ))}
                        </Switch>
                    );
                }}
            ></Route>
            <Route path="/" component={ProcedureMainPage}/>
            </Switch>
            </div>
        </Router>
    );
}


export default function App() {
    return(<Routers/>);
}

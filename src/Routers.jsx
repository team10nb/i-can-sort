import React from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Tutorial from './scenes/Tutorial';
import Setting from './scenes/Setting';
import { Switch } from 'react-router-dom';
import Help from './scenes/Help';
import Exercise from './scenes/Exercise';
import CorrectnessMainPage from './scenes/mainPages/Correctness';
import ProcedureMainPage from './scenes/mainPages/Procedure';
import EfficiencyMainPage from './scenes/mainPages/Efficiency';
import ProcedureRouters from './scenes/subPages/Procedure/ProcedureRouters';

export default function Routers() {
    return(
        <Router >
            <div>
            <Switch>
            <Route path="/Tutorial" component={Tutorial} />
            <Route path="/Setting" component={Setting} />
            <Route path="/Help" component={Help} />
            {/* <Route path="/ProcedureMainPage" render={props => <ProcedureMainPage algoProcess="0" {...props}/>} /> */}
            <Route path="/ProcedureMainPage" component={ProcedureMainPage} />
            <Route path="/EfficiencyMainPage" component={EfficiencyMainPage} />
            <Route path="/CorrectnessMainPage" component={CorrectnessMainPage} />
            <Route path="/Exercise" component={Exercise} />
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
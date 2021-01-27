import React from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Tutorial from './scenes/Tutorial';
import Setting from './scenes/Setting';
import { Switch } from 'react-router-dom';
import Help from './scenes/Help';
import Exercise from './scenes/Exercise';
import SubScenes from './subScenes/SubScenes';
import ProcedureMainPage from './scenes/MainPages/Procedure';
import EfficiencyMainPage from './scenes/MainPages/Efficiency';
import CorrectnessMainPage from './scenes/MainPages/Correctness';

export default function Routers() {
    return(
        <Router >
            <div>
            <Switch>
            <Route path="/Tutorial" component={Tutorial} />
            <Route path="/Setting" component={Setting} />
            <Route path="/Help" component={Help} />
            <Route path="/ProcedureMainPage" component={ProcedureMainPage} />
            <Route path="/EfficiencyMainPage" component={EfficiencyMainPage} />
            <Route path="/CorrectnessMainPage" component={CorrectnessMainPage} />
            <Route path="/Exercise" component={Exercise} />
            <Route path="/Page" component={SubScenes} />
            <Route path="/" component={ProcedureMainPage} />
            </Switch>
            </div>
        </Router>
    );
}
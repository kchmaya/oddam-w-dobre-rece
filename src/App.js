import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/UserLog/Login';
import Register from './components/UserLog/Register';
import Logout from './components/UserLog/Logout';


function App() {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register}/>
                <Route exact path="/logout" component={Logout}/>
            </Switch>
        </HashRouter>
    );
}

export default App;

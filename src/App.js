import React, {Component} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Firebase from "./firebase/firebase";
import Home from './components/Home';
import Login from './components/UserLog/Login';
import Register from './components/UserLog/Register';
import Logout from './components/UserLog/Logout';
import Header from './components/Header';
import HeaderNav from './components/HeaderNav';
import HeaderLog from './components/HeaderLog'
import GiveThings from './components/GiveThingsForm/GiveThings';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            email: ''
        }
        this.authListener = this.authListener.bind(this);
    }

    componentDidMount() {
        this.authListener();
    }

    authListener() {
        Firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    user: user,
                    email: user.email
                });
            } else {
                this.setState({user: null});
            }
        })
    }

    render() {
        return (
            <HashRouter>
                <header>
                    {(this.state.user) ? <HeaderLog email={this.state.email}/> : <Header/> }
                    <HeaderNav/>
                </header>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/register' component={Register}/>
                    <Route exact path='/logout' component={Logout}/>
                    <Route exact path='/give_things' component={GiveThings}/>
                </Switch>
            </HashRouter>
        );
    }
}

export default App;
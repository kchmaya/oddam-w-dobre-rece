import React, {Component} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/UserLog/Login';
import Register from './components/UserLog/Register';
import Logout from './components/UserLog/Logout';
import Header from "./components/Header";
import Firebase from "./firebase/firebase";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
        }
        this.authListener = this.authListener.bind(this);
    }

    componentDidMount() {
        this.authListener();
    }

    authListener() {
        Firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({user});
            } else {
                this.setState({user: null});
            }
        })
    }

    render() {
        return (
            <HashRouter>
                <header>
                    <Header/>
                </header>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/register" component={Register}/>
                    <Route exact path="/logout" component={Logout}/>
                </Switch>
            </HashRouter>
        );
    }


}

export default App;
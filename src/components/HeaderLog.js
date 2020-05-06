import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Firebase from '../firebase/firebase';

class HeaderLog extends Component {

    logOut() {
        Firebase.auth().signOut().then((user) => {
            if (user) {
                this.setState({
                    user: null,
                }).catch((error) => {
                    console.log(error)
                });
            }
        })
    }

    render() {
        return (
            <section className='header'>
                <div className='header-login'>
                    <ul>
                        <li className='user-email'> Cześć, {this.props.email} </li>
                        <li>
                            <NavLink className='header-login-nav' to='/'>
                                Oddaj rzeczy
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className='header-login-nav' to='/logout' onClick={this.logOut}>
                                Wyloguj
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default HeaderLog;
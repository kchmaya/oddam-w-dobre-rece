import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class HeaderLog extends Component {
    render() {
        return (
            <section className='header'>
                <div className='header-login'>
                    <ul>
                        <li> Cześć, {this.props.email} </li>
                        <li>
                            <NavLink className='header-login-nav' to='/login'>
                                Oddaj rzeczy
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className='header-login-nav' to='/logout'>
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
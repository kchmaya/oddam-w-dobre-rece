import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <section className='header'>
                <div className='header-login'>
                    <ul>
                        <li>
                            <NavLink className='header-login-nav' to='/login'>
                                Zaloguj
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className='header-login-nav' to='/register'>
                                Załóż konto
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default Header;
import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Link} from 'react-scroll';

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
                <div className='header-menu'>
                    <ul>
                        <li>
                            <Link to='/'>
                                Start
                            </Link>
                        </li>
                        <li>
                            <Link to="">
                                O co chodzi?
                            </Link>
                        </li>
                        <li>
                            <Link to="">
                                O nas
                            </Link>
                        </li>
                        <li>
                            <Link to="">
                                Fundacja i organizacje
                            </Link>
                        </li>
                        <li>
                            <Link to="">
                                Kontakt
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default Header;

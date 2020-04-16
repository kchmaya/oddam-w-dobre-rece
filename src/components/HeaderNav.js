import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Link} from 'react-scroll';

class HeaderNav extends Component {
    render() {
        return (
            <section className='header-nav'>
                <div className='header-menu'>
                    <ul>
                        <li>
                            <NavLink className='start-btn' to='/'>
                                Start
                            </NavLink>
                        </li>
                        <li>
                            <Link activeClass='active' to='steps' spy={true} smooth={true} offset={-370} duration={500}>
                                O co chodzi?
                            </Link>
                        </li>
                        <li>
                            <Link activeClass='active' to='about' spy={true} smooth={true} offset={0} duration={500}>
                                O nas
                            </Link>
                        </li>
                        <li>
                            <Link activeClass='organisation' to='organisations' spy={true} smooth={true} offset={0}
                                  duration={500}>
                                Fundacja i organizacje
                            </Link>
                        </li>
                        <li>
                            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={50} duration={500}>
                                Kontakt
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default HeaderNav;
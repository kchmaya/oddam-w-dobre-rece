import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Logout extends Component {
    render() {
        return (
            <div className='logout-section'>
                <div className='logout-box'>
                    <p className='logout-text'> Wylogowanie nastąpiło <br/> pomyślnie! </p>
                    <img src={require('../../assets/Decoration.svg')} alt=''
                         className='logout-decoration'/>
                    <NavLink className='logout-btn' to='/'> Strona główna </NavLink>
                </div>
            </div>
        )
    }
}

export default Logout;
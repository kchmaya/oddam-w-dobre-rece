import React, {Component} from "react";
import {NavLink} from "react-router-dom";

class Logout extends Component {
    render() {
        return (
            <div className='login-container row'>
                <div className='col-xl-12 logout-title'>
                    <p> Wylogowanie nastąpiło <br/> pomyślnie! </p>
                    {/*<Decoration/>*/}
                </div>
                <div className='col-xl-12 logout-section'>
                    <NavLink className='logout-btn' to='/'> Strona główna </NavLink>
                </div>
            </div>
        )
    };
}

export default Logout;
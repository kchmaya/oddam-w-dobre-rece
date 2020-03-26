import React, {Component} from "react";
import {NavLink} from 'react-router-dom';
import Header from "../Header";

class Login extends Component {
    state = {
        email: "",
        password: "",
        errorEmail: "",
        errorPassword: ""
    };

    validateEmail = email => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleClick = event => {
        event.preventDefault();

        this.setState({
            errorEmail: "",
            errorPassword: ""
        });

        const email = this.state.email;
        const password = this.state.password;

        let emailOk = true;
        let passwordOk = true;

        if (!this.validateEmail(email)) {
            emailOk = false;
            this.setState(() => ({
                errorEmail: "Podany email jest nieprawidłowy!"
            }));
        }
        if (password.length < 6) {
            passwordOk = false;
            this.setState(() => ({
                errorPassword: "Podane hasło jest za krótkie!"
            }));
        }
        if (emailOk && passwordOk) {
            console.log("email:", emailOk);
            console.log("password:", passwordOk);
            return true;
        } else {
            console.log("email:", emailOk);
            console.log("password:", passwordOk);
            return false;
        }
    };

    render() {
        return (
            <section className='login-section'>
                <Header/>
                <div className='login-box'>
                    <div className='login-form-box'>
                        <h2 className='login-title'> Zaloguj się </h2>
                        <img src={require('../../assets/Decoration.svg')} alt=''
                             className='login-decoration'/>
                        <form className='login-form'>
                            <div className='login-form-inputs'>
                                <label> Email
                                    <input type="text"
                                           name="email"
                                           value={this.state.email}
                                           onChange={this.handleChange}/>
                                </label>
                                <p className='error-message' style={{color: "red"}}> {this.state.errorEmail} </p>
                                <label> Hasło
                                    <input type="password"
                                           name="password"
                                           value={this.state.password}
                                           onChange={this.handleChange}/>
                                </label>
                                <p className='error-message' style={{color: "red"}}>{this.state.errorPassword}</p>
                            </div>
                        </form>
                        <div className='login-form-btns'>
                            <NavLink to='/register' className='login-form-link'> Załóż konto </NavLink>
                            <button className='login-form-btn' onClick={this.handleClick}> Zaloguj się</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Login;
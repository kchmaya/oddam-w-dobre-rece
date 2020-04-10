import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import Firebase from "../../firebase/firebase";

class Register extends Component {
    state = {
        email: "",
        password: "",
        passwordRepeat: "",
        errorEmail: "",
        errorPassword: "",
        errorPasswordRepeat: ""
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

    handleSubmit = event => {
        event.preventDefault();

        this.setState({
            errorEmail: "",
            errorPassword: "",
            errorPasswordRepeat: ""
        });

        const email = this.state.email;
        const password = this.state.password;
        const passwordRepeat = this.state.passwordRepeat;

        let emailOk = true;
        let passwordOk = true;
        let passwordRepeatOk = true;

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
        if (password !== passwordRepeat) {
            passwordRepeatOk = false;
            this.setState(() => ({
                errorPasswordRepeat: "Podane hasła różnią się!"
            }));
        }
        if (emailOk && passwordOk && passwordRepeatOk) {
            Firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((u) => {
                    console.log('successfully signed up');
                })
                .catch((error) => {
                    console.log('error:' + error.toString());
                })
        } else {
            return false;
        }
    };

    render() {
        return (
            <section className='register-section'>
                <div className='register-box'>
                    <div className='register-form-box'>
                        <h2 className='register-title'> Załóż konto </h2>
                        <img src={require('../../assets/Decoration.svg')} alt=''
                             className='register-decoration'/>
                        <form className='register-form' onSubmit={this.handleSubmit}>
                            <div className='register-inputs'>
                                <label>Email
                                    <input type="text"
                                           name="email"
                                           value={this.state.email}
                                           onChange={this.handleChange}/>
                                </label>
                                <p className='error-message' style={{color: "red"}}> {this.state.errorEmail} </p>
                                <label>Hasło
                                    <input type="password"
                                           name="password"
                                           value={this.state.password}
                                           onChange={this.handleChange}/>
                                </label>
                                <p className='error-message' style={{color: "red"}}>{this.state.errorPassword}</p>
                                <label> Powtórz hasło
                                    <input type="password"
                                           name="passwordRepeat"
                                           value={this.state.passwordRepeat}
                                           onChange={this.handleChange}/>
                                </label>
                                <p className='error-message' style={{color: "red"}}>{this.state.errorPasswordRepeat}</p>
                            </div>
                        </form>
                        <div className='register-form-btns'>
                            <NavLink to='/login' className='register-form-link'>Zaloguj się</NavLink>
                            <button className='register-form-btn' type='submit' onClick={this.handleSubmit}>
                                Załóż konto
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Register;
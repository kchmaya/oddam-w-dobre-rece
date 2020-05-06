import React, {Component} from 'react';

class Contact extends Component {

    state = {
        name: '',
        email: '',
        message: '',
        errorName: '',
        errorEmail: '',
        errorText: '',
        successMessage: ''
    };

    validateEmail = email => {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    validateName = name => {
        let re = /^[a-zA-Z]{1,200}$/;
        return re.test(String(name).toString());
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();

        this.setState({
            errorName: '',
            errorEmail: '',
            errorText: '',
            successMessage: ''
        });

        const data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        };

        let nameOk = true;
        let emailOk = true;
        let textOk = true;

        if (!this.validateName(data.name)) {
            this.setState({
                errorName: 'Podane imię jest nieprawidłowe!'
            });
            nameOk = false;
        }
        if (!this.validateEmail(data.email)) {
            this.setState({
                errorEmail: 'Podany email jest nieprawidłowy'
            });
            emailOk = false;
        }
        if (data.message.length < 120) {
            this.setState({
                errorText: 'Pole wiadomość musi mieć conajmniej 120 znaków!'
            });
            textOk = false;
        }
        if (nameOk && emailOk && textOk) {
            this.setState({
                successMessage: 'Wiadomość została wysłana! Wkrótce się skontaktujemy.'
            });

            const url = 'https://fer-api.coderslab.pl/v1/portfolio/contact';

            return fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error('Blad sieci');
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        }
    };

    render() {
        return (
            <section className='contact-section' id='contact'>
                <div className='contact-form'>
                    <h2 className='contact-title'> Skontaktuj się z nami </h2>
                    <img src={require('../assets/Decoration.svg')} alt='' className='contact-decoration'/>
                    <p style={{color: 'green'}}> {this.state.successMessage} </p>
                    <form className='form' onSubmit={this.handleSubmit}>
                        <div className='form-personal'>
                            <label> Wpisz swoje imię
                                <input type='text' name='name' value={this.state.name}
                                       placeholder='name' onChange={this.handleChange}/>
                                <p style={{color: 'red'}}> {this.state.errorName} </p>
                            </label>
                            <label> Wpisz swój email
                                <input type='email' name='email' value={this.state.email}
                                       placeholder='email' onChange={this.handleChange}/>
                                <p style={{color: 'red'}}> {this.state.errorEmail} </p>
                            </label>
                        </div>
                        <label className='form-textarea'> Wpisz swoją wiadomość
                            <textarea name='message' value={this.state.message}
                                      onChange={this.handleChange}
                                      placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                                   incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                                   nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'>
                             </textarea>
                            <p style={{color: 'red'}}> {this.state.errorText} </p>
                        </label>
                        <button className='contact-form-btn' type='submit' value='Wyślij'> Wyślij</button>
                    </form>
                </div>
            </section>
        )
    }
}

export default Contact;
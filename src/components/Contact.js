import React, {Component} from 'react';

class Contact extends Component {
    render() {
        return (
            <section className='contact-section' id='contact'>
                <div className='contact-form'>
                    <h2 className='contact-title'> Skontaktuj się z nami </h2>
                    <img src={require('../assets/Decoration.svg')} alt='' className='contact-decoration'/>
                    <form className='form'>
                        <div className='form-personal'>
                                <label> Wpisz swoje imię
                                    <input placeholder='name'/>
                                </label>
                                <label> Wpisz swój email
                                    <input placeholder='email'/>
                                </label>
                        </div>
                        <label className='form-textarea'> Wpisz swoją wiadomość
                            <textarea placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.' maxLength='200'>
                             </textarea>
                        </label>
                        <button className='contact-form-btn' type="submit" value="Wyślij"> Wyślij</button>
                    </form>
                </div>
            </section>
        )
    }
}

export default Contact;
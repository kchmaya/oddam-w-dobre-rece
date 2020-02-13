import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <section className='footer'>
                <div className='footer-elements'>
                    <p className='footer-text'> Copyright by Coders Lab </p>
                    <img src={require('../assets/Facebook.svg')} alt='' className='footer-sm-icon'/>
                    <img src={require('../assets/Instagram.svg')} alt='' className='footer-sm-icon'/>
                </div>
            </section>
        )
    }
}

export default Footer;
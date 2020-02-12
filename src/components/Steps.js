import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Steps extends Component {
    render() {
        return (
            <section className='steps-section' id='steps'>
                <h2 className='steps-title'> Wystarczą 4 proste kroki </h2>
                <img src={require ('../assets/Decoration.svg')} alt='' className='steps-decoration'/>
                <div className='steps-columns'>
                    <div className='step'>
                        <img src={require('../assets/Icon-1.svg')} alt='' className='step-icon'/>
                        <p className='step-title'> Wybierz rzeczy </p>
                        <span className='dash'/>
                        <p className='step-text'> ubrania, zabawki, sprzęt i inne </p>
                    </div>
                    <div className='step'>
                        <img src={require('../assets/Icon-2.svg')} alt='' className='step-icon'/>
                        <p className='step-title'> Spakuj je </p>
                        <span className='dash'/>
                        <p className='step-text'> skorzystaj z worków na śmieci </p>
                    </div>
                    <div className='step'>
                        <img src={require('../assets/Icon-3.svg')} alt='' className='step-icon'/>
                        <p className='step-title'> Zdecyduj komu chcesz pomóc </p>
                        <span className='dash'/>
                        <p className='step-text'> wybierz zaufane miejsce </p>
                    </div>
                    <div className='step'>
                        <img src={require('../assets/Icon-4.svg')} alt='' className='step-icon'/>
                        <p className='step-title'> Zamów kuriera </p>
                        <span className='dash'/>
                        <p className='step-text'> kurier przyjedzie w dogodnym terminie </p>
                    </div>
                </div>
                <div className='steps-btn'>
                        <Link to='/login' className='steps-btn-link'> Oddaj <span>rzeczy</span> </Link>
                </div>
            </section>
        )
    }
}

export default Steps;
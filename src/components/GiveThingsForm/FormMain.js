import React, {Component} from 'react';

class GiveThingsSteps extends Component {
    render() {
        return (
            <section className='give-things-section'>
                <img src={require('../../assets/Form-Hero-Image.jpg')} alt='' className='give-things-img'/>
                <div className='give-things-main'>
                    <h1 className='give-things-title'> Oddaj rzeczy, których już nie chcesz POTRZEBUJĄCYM </h1>
                    <img src={require('../../assets/Decoration.svg')} alt='' className='decoration'/>
                    <h2 className='give-things-text'> Wystarczą 4 proste kroki: </h2>
                    <ul className='give-things-boxes'>
                        <li className='give-things-box'>
                            <div className='box-content'>
                                <p className='box-number'> 1 </p>
                                <p className='box-text'> Wybierz <br/> rzeczy </p>
                            </div>
                        </li>
                        <li className='give-things-box'>
                            <div className='box-content'>
                                <p className='box-number'> 2 </p>
                                <p className='box-text'> Spakuj je <br/> w worki </p>
                            </div>
                        </li>
                        <li className='give-things-box'>
                            <div className='box-content'>
                                <p className='box-number'> 3 </p>
                                <p className='box-text'> Wybierz <br/> fundację </p>
                            </div>
                        </li>
                        <li className='give-things-box'>
                            <div className='box-content'>
                                <p className='box-number'> 4 </p>
                                <p className='box-text'> Zamów <br/>kuriera </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default GiveThingsSteps;
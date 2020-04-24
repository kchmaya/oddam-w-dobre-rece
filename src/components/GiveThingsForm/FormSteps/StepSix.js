import React, {Component} from 'react';

class StepSix extends Component {
    render() {
        return (
            <section className='step-six-section'>
                <div className='step-six-content'>
                    <h1 className='step-six-title'> Dziękujemy za przesłanie formularza </h1>
                    <h1 className='step-six-title'> Na maila prześlemy wszelkie <br/> informacje o odbiorze. </h1>
                    <img src={require('../../../assets/Decoration.svg')} alt='' className='step-six-decoration'/>
                </div>
            </section>
        )
    }
}

export default StepSix;

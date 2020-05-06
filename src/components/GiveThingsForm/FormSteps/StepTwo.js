import React, {Component} from 'react';

class StepTwo extends Component {
    render() {
        return (
            <section className='step-two-section'>
                <p className='step-number'> Krok 2/4 </p>
                <h1 className='step-two-title'> Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy: </h1>
                <form className='step-two-select' onChange={this.props.setAmountOfBags}>
                    <label className='select-text'> Liczba 60l worków: </label>
                    <select className='nmb-of-bags' name='nmb-of-bags' id='bags-select'>
                        <option className='option' value=''> — wybierz — </option>
                        <option className='option' value='1'> 1 </option>
                        <option className='option' value='2'> 2 </option>
                        <option className='option' value='3'> 3 </option>
                        <option className='option' value='4'> 4 </option>
                        <option className='option' value='5'> 5 </option>
                    </select>
                </form>
            </section>
        )
    }
}

export default StepTwo;

import React, {Component} from 'react';

class StepFour extends Component {
    render() {
        return (
            <section className='step-four-section'>
                <p className='step-number'> Krok 4/4 </p>
                <h1 className='step-four-title'> Podaj adres oraz termin odbioru rzecz przez kuriera </h1>
                <form className='step-four-info'>
                    <div className='info-box'>
                        <legend className='info-title'> Adres odbioru: </legend>
                        <div className='info-details'>
                            <label> Ulica </label>
                            <input type='text' name='street' onChange={this.props.handleChange}/>
                        </div>
                        <div className='info-details'>
                            <label> Miasto </label>
                            <input type='text' name='city' onChange={this.props.handleChange}/>
                        </div>
                        <div className='info-details'>
                            <label> Kod pocztowy </label>
                            <input type='text' name='postCode' onChange={this.props.handleChange}/>
                        </div>
                        <div className='info-details'>
                            <label> Numer telefonu </label>
                            <input type='text' name='phoneNumber' onChange={this.props.handleChange}/>
                        </div>
                    </div>
                    <div className='info-box'>
                        <legend className='info-title'> Termin odbioru: </legend>
                        <div className='info-details'>
                            <label> Data </label>
                            <input type='text' name='date' onChange={this.props.handleChange}/>
                        </div>
                        <div className='info-details'>
                            <label> Godzina </label>
                            <input type='text' name='hour' onChange={this.props.handleChange}/>
                        </div>
                        <div className='info-details textarea'>
                            <label> Uwagi dla kuriera </label>
                            <textarea name='notes' onChange={this.props.handleChange}/>
                        </div>
                    </div>
                </form>
            </section>
        )
    }
}

export default StepFour;


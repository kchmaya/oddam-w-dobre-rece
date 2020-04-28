import React, {Component} from "react";

class StepOne extends Component {
    render() {
        return (
            <section className='step-one-section'>
                <p className='step-number'> Krok 1/4 </p>
                <h1 className='step-one-title'> Zaznacz, co chcesz oddać: </h1>
                <form className='step-one-checkbox'>
                    <input className='checkbox' type='radio' name='type-of-things'
                           value='ubrania, które nadają się do ponownego użycia'
                           onChange={this.props.handleChange}/>
                    <label className='checkbox-text'> ubrania, które nadają się do ponownego użycia </label>
                    <input className='checkbox' type='radio' name='type-of-things' value='ubrania, do wyrzucenia'
                           onChange={this.props.handleChange}/>
                    <label className='checkbox-text'> ubrania, do wyrzucenia </label>
                    <input className='checkbox' type='radio' name='type-of-things' value='zabawki'
                           onChange={this.props.handleChange}/>
                    <label className='checkbox-text'> zabawki </label>
                    <input className='checkbox' type='radio' name='type-of-things' value='książki'
                           onChange={this.props.handleChange}/>
                    <label className='checkbox-text'> książki </label>
                    <input className='checkbox' type='radio' name='type-of-things' value='inne'
                           onChange={this.props.handleChange}/>
                    <label className='checkbox-text'> Inne </label>
                </form>
            </section>
        )
    }
}

export default StepOne;

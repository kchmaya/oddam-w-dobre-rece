import React, {Component} from "react";

class StepOne extends Component {
    render() {
        return (
            <section className='step-one-section'>
                <p className='step-number'> Krok 1/4 </p>
                <h1 className='step-one-title'> Zaznacz, co chcesz oddać: </h1>
                <form className='step-one-checkbox'>
                    <label className='checkbox-text'>
                        <input className='checkbox' type='radio' name='type-of-things'
                               value='ubrania, które nadają się do ponownego użycia'
                               onChange={this.props.handleThingsChange}/>
                        <span> ubrania, które nadają się do ponownego użycia </span>
                    </label>
                    <label className='checkbox-text'>
                        <input className='checkbox' type='radio' name='type-of-things' value='ubrania, do wyrzucenia'
                               onChange={this.props.handleThingsChange}/>
                        <span> ubrania, do wyrzucenia </span>
                    </label>
                    <label className='checkbox-text'>
                        <input className='checkbox' type='radio' name='type-of-things' value='zabawki'
                               onChange={this.props.handleThingsChange}/>
                        <span> zabawki </span>
                    </label>
                    <label className='checkbox-text'>
                        <input className='checkbox' type='radio' name='type-of-things' value='książki'
                               onChange={this.props.handleThingsChange}/>
                        <span> książki </span>
                    </label>
                    <label className='checkbox-text'>
                        <input className='checkbox' type='radio' name='type-of-things' value='inne'
                               onChange={this.props.handleThingsChange}/>
                        <span> Inne </span>
                    </label>
                </form>
            </section>
        )
    }
}

export default StepOne;

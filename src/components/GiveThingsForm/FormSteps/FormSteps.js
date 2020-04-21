import React, {Component} from "react";
import StepOne from "./StepOne";

class FormSteps extends Component {
    render() {
        return (
            <section className='form-steps-section'>
                <StepOne/>
                <div className='step-btns'>
                    <button className='step-btn prev-btn'> Wstecz</button>
                    <button className='step-btn next-btn'> Dalej</button>
                </div>
            </section>
        )
    }
}

export default FormSteps;

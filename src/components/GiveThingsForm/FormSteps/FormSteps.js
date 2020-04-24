import React, {Component} from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from './StepThree'
import StepFour from './StepFour'


class FormSteps extends Component {
    render() {
        return (
            <section className='form-steps-section'>
                {/*<StepOne/>*/}
                {/*<StepTwo/>*/}
                {/*<StepThree/>*/}
                <StepFour/>
                <div className='step-btns'>
                    <button className='step-btn prev-btn'> Wstecz</button>
                    <button className='step-btn next-btn'> Dalej</button>
                </div>
            </section>
        )
    }
}

export default FormSteps;

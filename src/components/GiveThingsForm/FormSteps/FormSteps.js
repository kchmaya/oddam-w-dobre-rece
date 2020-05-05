import React, {Component} from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from './StepThree'
import StepFour from './StepFour'
import StepFive from "./StepFive";
import StepSix from "./StepSix";

class FormSteps extends Component {
    state = {
        typeOfThings: null,
        amountOfBags: '',
        location: '',
        whoYouHelp: [],
        additionalOrg: '',
        street: '',
        city: '',
        postCode: '',
        phoneNum: '',
        date: '',
        hour: '',
        notes: ''
    };

    handleBtn = (e, val) => {
        this.props.stepChanger(val);
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleThingsChange = e => {
        this.setState({
            typeOfThings: e.target.value
        })
    };

    setAmountOfBags = e => {
        this.setState({
            amountOfBags: e.target.value
        })
    };

    setLocation = e => {
        this.setState({
            location: e.target.value
        })
    }

    handleAddOrg = e => {
        this.setState({
            additionalOrg: e.target.value
        })
    };

    whoToHelp = (e) => {
        const target = e.target;
        let value = e.target.value;
        if (target.checked) {
            this.setState({
                whoYouHelp: [...this.state.whoYouHelp, value]
            })
        } else {
            this.state.whoYouHelp.slice(value, 1);
        }
    };

    handleNextBtn = () => {
        let {typeOfThings, amountOfBags, whoYouHelp, location, street, city, postCode, phoneNum, date, hour} = this.state;
        let {step} = this.props;
        let isStepThreeProper = !!(whoYouHelp && location);
        let isStepFourProper = !!(street && city && postCode && phoneNum && date && hour);
        let areStepsFinishedArr = [typeOfThings, amountOfBags, isStepThreeProper, isStepFourProper];
        for (let i = 1; i < 5; i++) {
            if (step === i) {
                return !areStepsFinishedArr[i - 1];
            }
        }
        return false;
    };

    render() {
        let {step} = this.props;
        let form;

        if (step === 1) {
            form = <StepOne handleThingsChange={this.handleThingsChange}/>
        }
        if (step === 2) {
            form = <StepTwo setAmountOfBags={this.setAmountOfBags}/>
        }
        if (step === 3) {
            form = <StepThree setLocation={this.setLocation} location={this.state.location}
                              whoToHelp={this.whoToHelp} handleAddOrg={this.handleAddOrg}
                              addOrg={this.state.additionalOrg}/>
        }
        if (step === 4) {
            form = <StepFour handleChange={this.handleChange}/>
        }
        if (step === 5) {
            form = <StepFive data={this.state}/>
        }
        if (step === 6) {
            form = <StepSix/>
        }
        return (
            <section className='form-steps-section'>
                {form}
                <div className='step-btns'>
                    {(this.props.step <= 5 && this.props.step > 1) ?
                        <button className='step-btn prev-btn' onClick={e => this.handleBtn(e, -1)}> Wstecz
                        </button> : null}
                    {this.props.step <= 5 ?
                        <button className='step-btn' onClick={e => this.handleBtn(e, 1)}
                                onSubmit={this.handleNextBtn}> {this.props.step === 5 ? "Potwierdź" : "Dalej"}
                        </button> : null}
                </div>
            </section>
        )
    }
}

export default FormSteps;

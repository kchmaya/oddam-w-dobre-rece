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
        howManyBags: null,
        whatCity: null,
        whoYouHelp: {},
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

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    whoToHelp = e => {
        let newWhoYouHelp = {...this.state.whoYouHelp};
        let name = e.target.name;
        newWhoYouHelp[name] = e.target.checked;
        this.setState({
            whoYouHelp: newWhoYouHelp
        });
    };

    whoYouHelpList = () => {
        let {whoYouHelp} = this.state;
        let whoWeHelpArr = [];
        Object.getOwnPropertyNames(whoYouHelp).forEach(function (val) {
            if (whoYouHelp[val]) {
                whoWeHelpArr.push(val);
            }
        });
        return whoWeHelpArr;
    };

    handleNextBtn = () => {
        let {typeOfThings, howManyBags, whatCity, street, city, postCode, phoneNum, date, hour} = this.state;
        let {step} = this.props;
        let isStepThreeProper = !!(this.whoYouHelpList().length > 0 && whatCity);
        let isStepFourProper = !!(street && city && postCode && phoneNum && date && hour);
        let areStepsFinishedArr = [typeOfThings, howManyBags, isStepThreeProper, isStepFourProper];
        for (let i = 1; i < 5; i++) {
            if (step === i) {
                return !areStepsFinishedArr[i - 1];
            }
        }
        return false;
    };

    render() {
        console.log(this.whoYouHelpList);
        let {step} = this.props;
        let form;

        if (step === 1) {
            form = <StepOne handleChange={this.handleChange}/>
        }
        if (step === 2) {
            form = <StepTwo handleChange={this.handleChange}/>
        }
        if (step === 3) {
            form = <StepThree handleChange={this.handleChange} whoToHelp={this.whoToHelp}
                              whoYouHelp={this.state.whoYouHelp} addOrg={this.state.additionalOrg}/>
        }
        if (step === 4) {
            form = <StepFour handleChange={this.handleChange}/>
        }
        if (step === 5) {
            form = <StepFive data={this.state} list={this.whoYouHelpList}/>
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
                        <button className='step-btn'
                            onClick={e => this.handleBtn(e, 1)}
                            onSubmit={this.handleNextBtn}> {this.props.step === 5 ? "Potwierdź" : "Dalej"}
                        </button> : null}
                </div>
            </section>
        )
    }
}

export default FormSteps;

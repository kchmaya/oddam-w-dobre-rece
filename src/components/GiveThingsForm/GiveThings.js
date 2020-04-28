import React, {Component} from 'react';
import Footer from "../Footer";
import Contact from "../Contact";
import FormMain from "./FormMain";
import FormPrompt from "./FormPrompt";
import FormSteps from "./FormSteps/FormSteps";

class GiveThings extends Component {
    state = {
        step: 1
    };
    stepChanger = (value) => {
        this.setState({
            step: this.state.step + value
        })
    };
    render() {
        return (
            <>
                <FormMain/>
                <FormPrompt step={this.state.step}/>
                <FormSteps step={this.state.step} stepChanger={this.stepChanger}/>
                <Contact/>
                <Footer/>
            </>
        )
    }
}

export default GiveThings;
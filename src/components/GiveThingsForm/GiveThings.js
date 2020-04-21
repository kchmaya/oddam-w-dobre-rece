import React, {Component} from 'react';
import Footer from "../Footer";
import Contact from "../Contact";
import FormMain from "./FormMain";
import FormPrompt from "./FormPrompt";
import FormSteps from "./FormSteps/FormSteps";

class GiveThings extends Component {
    render() {
        return (
            <>
                <FormMain/>
                <FormPrompt/>
                <FormSteps/>
                <Contact/>
                <Footer/>
            </>
        )
    }
}

export default GiveThings;
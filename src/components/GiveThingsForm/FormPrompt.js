import React, {Component} from 'react';

class FormPrompt extends Component {
    render() {
        let {step} = this.props;
        let prompt;

        if (step === 1) {
            prompt = <p className='prompt-info'> Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy
                wiedzieć komu najlepiej je przekazać. </p>
        }
        if (step === 2) {
            prompt = <p className='prompt-info'> Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję
                jak poprawnie spakować rzeczy znajdziesz TUTAJ. </p>
        }
        if (step === 3) {
            prompt = <p className='prompt-info'> Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji
                w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy. </p>
        }
        if (step === 4) {
            prompt = <p className='prompt-info'> 'Podaj adres oraz termin odbioru rzeczy. </p>
        }
        if (step > 4) {
            return null;
        }

        return (
            <section className='form-prompt'>
                <h1 className='prompt-exclam'> Ważne! </h1>
                {prompt}
            </section>
        )
    }
}

export default FormPrompt;
import React, {Component} from 'react';

class StepThree extends Component {
    render() {
        return (
            <section className='step-three-section'>
                <p className='step-number'> Krok 3/4 </p>
                <h1 className='step-three-title'> Lokalizacja: </h1>
                <form>
                    <select className='city-select' name='city-select'
                            value={this.props.location} onChange={this.props.setLocation}>
                        <option className='option' value=''> — wybierz —</option>
                        <option className='option' value='Poznań'> Poznań</option>
                        <option className='option' value='Warszawa'> Warszawa</option>
                        <option className='option' value='Kraków'> Kraków</option>
                        <option className='option' value='Wrocław'> Wrocław</option>
                        <option className='option' value='Katowice'> Katowice</option>
                    </select>
                    <p className='help-select-title'> Komu chcesz pomóc? </p>
                    <label className='help-select'>
                        <input type='checkbox' name='dzieciom'
                               value='dzieciom' onChange={this.props.whoToHelp}/>
                        <span className='step-three-check'> dzieciom </span>
                    </label>
                    <label className='help-select'>
                        <input type='checkbox' name='samotnym matkom'
                               value='samotnym matkom' onChange={this.props.whoToHelp}/>
                        <span className='step-three-check'> samotnym matkom </span>
                    </label>
                    <label className='help-select'>
                        <input type='checkbox' name='bezdomnym'
                               value='bezdomnym' onChange={this.props.whoToHelp}/>
                        <span className='step-three-check'> bezdomnym </span>
                    </label>
                    <br/>
                    <label className='help-select'>
                        <input type='checkbox' name='niepełnosprawnym'
                               value='niepełnosprawnym' onChange={this.props.whoToHelp}/>
                        <span className='step-three-check'> niepełnosprawnym </span>
                    </label>
                    <label className='help-select'>
                        <input type='checkbox' name='osobom starszym'
                               value='osobom starszym' onChange={this.props.whoToHelp}/>
                        <span className='step-three-check'> osobom starszym </span>
                    </label>
                    <br/>
                    <label className='help-option-title'> Wpisz nazwę konkretnej organizacji (opcjonalne) <br/>
                        <input className='help-select-option' type='text' name='additionalOrganization'
                               value={this.props.addOrg} onChange={this.props.handleAddOrg}/>
                    </label>
                </form>
            </section>
        )
    }
}

export default StepThree;

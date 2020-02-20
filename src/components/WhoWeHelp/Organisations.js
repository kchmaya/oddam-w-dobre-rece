import React, {Component} from 'react';
import Fundations from "./Fundations";
import NonGovOrganisations from "./NonGovOrganisations";
import LocalOrganisations from "./LocalOrganisations";

class Organisations extends Component {
    state = {
        showContent: 'fundations'
    };

    handleClick = (event) => {
        event.target.classList.add('active-content');
        if (event.target.classList.contains('fundations')) {
            event.target.nextElementSibling.classList.remove('active-content');
            event.target.nextElementSibling.nextElementSibling.classList.remove('active-content');
            this.setState({
                showContent: 'fundations'
            });
        }
        if (event.target.classList.contains('non-gov-organisations')) {
            event.target.nextElementSibling.classList.remove('active-content');
            event.target.previousElementSibling.classList.remove('active-content');
            this.setState({
                showContent: 'non-gov-organisation'
            });
        }
        if (event.target.classList.contains('local-organisations')) {
            event.target.previousElementSibling.classList.remove('active-content');
            event.target.previousElementSibling.previousElementSibling.classList.remove('active-content');
            this.setState({
                showContent: 'local-organisations'
            });
        }
    };

    content = () => {
        if (this.state.showContent === 'fundations') {
            return <Fundations/>
        } else if (this.state.showContent === 'non-gov-organisation') {
            return <NonGovOrganisations/>
        } else if (this.state.showContent === 'local-organisations') {
            return <LocalOrganisations/>
        }
    };

    render() {

        return (
            <section className='organisation-section' id='organisation'>
                <div className='organisation-header'>
                    <h2 className='organisation-title'> Komu pomagamy? </h2>
                    <img src={require('../../assets/Decoration.svg')} alt='' className='organisation-decoration'/>
                    <nav className='organisation-choice'>
                        <li onClick={this.handleClick} className='fundations active-content'> Fundacjom </li>
                        <li onClick={this.handleClick} className='non-gov-organisations'> Organizacjom pozarządowym </li>
                        <li onClick={this.handleClick} className='local-organisations'> Lokalnym zbiórkom </li>
                    </nav>
                    <p className='organisation-description'> Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut laboreet dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation. </p>
                </div>
                <div> {this.content(this.state)} </div>
            </section>
        )
    }
}

export default Organisations;
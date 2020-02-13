import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Organisations extends Component {
    render() {
        return (
            <section className=''>
                <h2> Komu pomagamy? </h2>
                <img src={require ('../assets/Decoration.svg')} alt='' className='-decoration'/>
                <ul className='main-section-btns'>
                    <li>
                        <Link to='/' className=''> Fundacjom </Link>
                    </li>
                    <li>
                        <Link to='/' className=''> Organizacjom <span> pozarządowym </span> </Link>
                    </li>
                    <li>
                        <Link to='/' className=''> Lokalnym <span> zbiórkom </span> </Link>
                    </li>
                </ul>
                <p></p>
                <div className='pagination'></div>

            </section>
        )
    }
}

export default Organisations;
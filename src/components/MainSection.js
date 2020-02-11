import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class MainSection extends Component {
    render() {
        return (
            <section className='main-section'>
                <img src={require ('../assets/Home-Hero-Image.jpg')} alt='' className='main-section-img'/>
                <div className='main-section-text'>
                    <h1 className='main-section-title'> Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce </h1>
                    <ul className='main-section-btns'>
                        <li>
                            <Link to='' className='btn-link'> Oddaj rzeczy </Link>
                        </li>
                        <li>
                            <Link to='' className='btn-link'> Zorganizuj zbiórkę </Link>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default MainSection;
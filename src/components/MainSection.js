import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class MainSection extends Component {
    user = this.props;
    render() {
        return (
            <section className='main-section'>
                <img src={require ('../assets/Home-Hero-Image.jpg')} alt='' className='main-section-img'/>
                <div className='main-section-text'>
                    <h1 className='main-section-title'> Zacznij pomagać!
                        <span>Oddaj niechciane rzeczy w zaufane ręce </span>
                    </h1>
                    <img src={require ('../assets/Decoration.svg')} alt='' className='decoration'/>
                    <ul className='main-section-btns'>
                        <li>
                            <Link to='/login' className='btn-link'> Oddaj <span>rzeczy</span> </Link>
                        </li>
                        <li>
                            <Link to='/login' className='btn-link'> Zorganizuj <span>zbiórkę</span> </Link>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default MainSection;
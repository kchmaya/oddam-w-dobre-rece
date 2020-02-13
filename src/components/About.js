import React, {Component} from 'react';

class About extends Component {
    render() {
        return (
            <section className='about-section' id='about'>
                <div className='about-description'>
                    <h2 className='about-tile'> O nas </h2>
                    <img src={require ('../assets/Decoration.svg')} alt='' className='about-decoration'/>
                    <p className='about-text'> Nori grape silver beet broccoli kombu beet greens fava bean potato
                        quandong celery. Bunya nuts black-eyed pea prairie turnip leek
                        lentil turnip greens parsnip. </p>
                    <img src={require ('../assets/Signature.svg')} alt='' className='about-sign'/>
                </div>
                <img src={require ('../assets/People2.jpg')} alt='' className='about-img'/>
            </section>
        )
    }
}

export default About;

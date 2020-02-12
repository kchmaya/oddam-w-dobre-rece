import React, {Component} from 'react';

class ThreeColumns extends Component {
    render() {
        return (
            <section className='three-columns-section'>
                <div className='column'>
                    <h2 className='column-numbers'> 10 </h2>
                    <p className='column-subtitle'> Oddanych worków </p>
                    <p className='column-description'> Lorem ipsum dolor sit amet, consectetur adipisc
                        Pellentesque vel enim a elit viverra elementuma. Aliquam erat voluptat </p>
                </div>
                <div className='column'>
                    <h2 className='column-numbers'> 5 </h2>
                    <p className='column-subtitle'> Wspartych organizacji </p>
                    <p className='column-description'> Lorem ipsum dolor sit amet, consectetur adipisc
                        Pellentesque vel enim a elit viverra elementuma. Aliquam erat voluptat </p>
                </div>
                <div className='column'>
                    <h2 className='column-numbers'> 7 </h2>
                    <p className='column-subtitle'> Zorganizowanych zbiórek </p>
                    <p className='column-description'> Lorem ipsum dolor sit amet, consectetur adipisc
                        Pellentesque vel enim a elit viverra elementuma. Aliquam erat voluptat </p>
                </div>
            </section>

        )
    }
}

export default ThreeColumns;
import React, {Component} from 'react';
import Header from './Header';
import MainSection from './MainSection';
import ThreeColumns from './ThreeColumns';
import Steps from './Steps';
import About from './About';
import Organisations from './Organisations';
import Contact from './Contact';
import Footer from './Footer';


class Home extends Component {
    render() {
        return (
            <div>
                <p>HomePage</p>   */
                <Header />
                <MainSection />
                <ThreeColumns />
                <Steps />
                <About />
                <Organisations />
                <Contact />
                <Footer />
            </div>
        );
    }
}

export default Home;
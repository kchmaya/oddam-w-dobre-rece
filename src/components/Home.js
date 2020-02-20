import React, {Component} from 'react';
import Header from './Header';
import MainSection from './MainSection';
import ThreeColumns from './ThreeColumns';
import Steps from './Steps';
import About from './About';
import Organisations from './WhoWeHelp/Organisations';
import Contact from './Contact';
import Footer from './Footer';


class Home extends Component {
    render() {
        return (
            <>
                <Header />
                <MainSection />
                <ThreeColumns />
                <Steps />
                <About />
                <Organisations />
                <Contact />
                <Footer />
            </>
        );
    }
}

export default Home;
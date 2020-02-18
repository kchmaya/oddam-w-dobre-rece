import React, {Component} from 'react';
import {HashRouter, NavLink, Switch, Route} from "react-router-dom";

const Fundations = () => {

    const fundationsInfo = [
        {
            name: `Fundacja "Lorem Ipsum 1"`,
            description: "  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
            additional: "Vestibulum vel leo lacus."
        },
        {
            name: `Fundacja "Lorem Ipsum 2"`,
            description: "  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
            additional: "Vestibulum vel leo lacus."
        },
        {
            name: `Fundacja "Lorem Ipsum 3"`,
            description: "  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
            additional: "Vestibulum vel leo lacus."
        },
        {
            name: `Fundacja "Lorem Ipsum 4"`,
            description: "  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
            additional: "Vestibulum vel leo lacus."
        },
        {
            name: `Fundacja "Lorem Ipsum 5"`,
            description: "  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
            additional: "Vestibulum vel leo lacus."
        },
        {
            name: `Fundacja "Lorem Ipsum 6"`,
            description: "  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
            additional: "Vestibulum vel leo lacus."
        },
        {
            name: `Fundacja "Lorem Ipsum 7"`,
            description: "  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
            additional: "Vestibulum vel leo lacus."
        },
        {
            name: `Fundacja "Lorem Ipsum 8"`,
            description: "  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
            additional: "Vestibulum vel leo lacus."
        },
        {
            name: `Fundacja "Lorem Ipsum 9"`,
            description: "  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
            additional: "Vestibulum vel leo lacus."
        },
    ];

    return (
        fundationsInfo.map((data, index) => {
            return <div key={index}>
                <h4>{data.name}</h4>
                <p>{data.description}</p>
                <p>{data.additional}</p>
            </div>
        })
    )
};

const NonGovOrganisations = () => {

    const organisationsInfo = [
        {
            name: `Organizacja "Lorem Ipsum 1"`,
            description: "Sed molestie sit amet nisi ac venenatis. Suspendisse potenti.",
            additional: "Nam laoreet consectetur nunc"
        },
        {
            name: `Organizacja "Lorem Ipsum 2"`,
            description: " Vestibulum nec pretium ante. Donec nec massa eu arcu dapibus placerat aliquet id lacus.",
            additional: "Vestibulum vel leo lacus."
        },
        {
            name: `Organizacja "Lorem Ipsum 3"`,
            description: "  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
            additional: "Vestibulum vel leo lacus."
        },
        {
            name: `Organizacja "Lorem Ipsum 4"`,
            description: "  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
            additional: "Vestibulum vel leo lacus."
        },
        {
            name: `Organizacja "Lorem Ipsum 5"`,
            description: "  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
            additional: "Vestibulum vel leo lacus."
        },
        {
            name: `Organizacja "Lorem Ipsum 6"`,
            description: "  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
            additional: "Vestibulum vel leo lacus."
        }
    ];

    return (
        organisationsInfo.map((data, index) => {
            return <div key={index}>
                <h4>{data.name}</h4>
                <p>{data.description}</p>
                <p>{data.additional}</p>
            </div>
        })
    )
};

const LocalOrganisations = () => {

    const localOrganisationsInfo = [
        {
            name: `Zbiórka "Lorem Ipsum 1"`,
            description: "  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
            additional: "Vestibulum vel leo lacus."
        },
        {
            name: `Zbiórka "Lorem Ipsum 2"`,
            description: "  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
            additional: "Vestibulum vel leo lacus."
        },
        {
            name: `Zbiórka "Lorem Ipsum 3"`,
            description: "  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
            additional: "Vestibulum vel leo lacus."
        },
    ];
    return (
        localOrganisationsInfo.map((data, index) => {
            return <div key={index}>
                <h4>{data.name}</h4>
                <p>{data.description}</p>
                <p>{data.additional}</p>
            </div>
        })
    )
};

class Organisations extends Component {
    state = {
        showContent: false
    };

    handleClick = () => {
        this.setState({
            showContent: true
        });
        console.log('show')
    };

    render() {
        return (
            <section className='organisation-section' id='organisation'>
                <div className='organisation-header'>
                    <h2 className='organisation-title'> Komu pomagamy? </h2>
                    <img src={require('../assets/Decoration.svg')} alt='' className='organisation-decoration'/>
                    <ul className='organisation-choice'>
                        <li className='organisation-link'> Fundacjom
                            <NavLink to='/fundations' className={this.state.showContent ? 'active-content' : ''}
                                     activeClassName={'active-content'}/>
                        </li>
                        <li className='organisation-link'> Organizacjom <span> pozarządowym </span>
                            <NavLink to='/non_gov_organisations' activeClassName={'active-content'}
                                     onClick={this.handleClick}/>
                        </li>
                        <li className='organisation-link'> Lokalnym <span> zbiórkom </span>
                            <NavLink to='/local_organisations' activeClassName={'active-content'}
                                     onClick={this.handleClick}/>
                        </li>
                    </ul>
                    <p className='organisation-description'> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut laboreet dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation. </p>
                </div>

                <HashRouter>
                    <>
                        <Switch>
                            <Route exact path='/' component={() =>
                                <Fundations showContent={this.showContent}/>}/>
                            <Route path='/fundations' component={() => <Fundations />}/>
                            <Route path='/non_gov_organisations' component={() => <NonGovOrganisations />}/>
                            <Route path='/local_organisations' component={() => <LocalOrganisations />}/>
                        </Switch>
                    </>
                </HashRouter>
            </section>
        )
    }
}

export default Organisations;


// class Content extends Component {
//     render() {
//         let content = (
//             <Fundations/>
//         );
//         if (!this.props.showContent) {
//             content = null;
//         }
//         return (
//             content
//         )
//     }
// }
//
// class Organisations extends Component {
//     state = {
//         showContent: false
//     };
//
//     render() {
//         const handleClick = (e) => {
//             e.preventDefault();
//             this.setState({
//                 showContent: true
//             });
//             console.log('showed')
//         };
//
//         return (
//             <section className='organisation-section' id='organisation'>
//                 <div className='organisation-header'>
//                     <h2 className='organisation-title'> Komu pomagamy? </h2>
//                     <img src={require('../assets/Decoration.svg')} alt='' className='organisation-decoration'/>
//                     <ul className='organisation-choice'>
//                         <li onClick={handleClick}> Fundacjom</li>
//                         <li onClick={handleClick}
//                             className='organisation-link'> Organizacjom <span> pozarządowym </span></li>
//                         <li onClick={handleClick}
//                             className='organisation-link'> Lokalnym <span> zbiórkom </span></li>
//                     </ul>
//                     <p className='organisation-description'> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//                         sed do eiusmod tempor incididunt ut laboreet dolore magna aliqua. Ut enim ad minim veniam, quis
//                         nostrud exercitation. </p>
//                 </div>
//                 <Content showContent={this.state.showContent}/>
//             </section>
//         )
//     }
// }
//
// export default Organisations;

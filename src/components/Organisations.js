import React, {Component} from 'react';
import {Link} from "react-router-dom";


class Organisations extends Component {
    state = {
        data: {
            'organisations': [
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
            ],

            'foundations': [
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
            ],

            'localCollections': [
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

            ],
        },

        currentType: "organisations",
        organisationPage: 0,
    };

    changePage = (num) => {
        this.setState({organisationsPage: num})
    };

    createPageButtons = (num) => {
        if (num < 2) {
            return null;
        } else {
            let buttons = [];
            for (let i = 0; i < num; i++) {
                buttons.push(<button key={i} className={(this.state.organisationsPage === i) ? "active" : "passive"}
                                     onClick={() => {this.changePage(i)}}>{i + 1}</button>)
            }
            return buttons;
        }
    };

    render() {
        const data=this.state.data;
        const type=this.state.currentType;
        const pageNum = Math.ceil(data[type].length / 3);
        return (
            <section className='organisation-section' id='organisation'>
                <h2 className='organisation-title'> Komu pomagamy? </h2>
                <img src={require('../assets/Decoration.svg')} alt='' className='organisation-decoration'/>
                <ul className='organisation-choice'>
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
                <div className='page-num'>{this.createPageButtons(pageNum)}</div>

            </section>
        )
    }
}

export default Organisations;
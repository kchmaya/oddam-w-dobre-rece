import React, {Component} from 'react';

class StepFive extends Component {
    render() {
        const {data} = this.props;
        const {list} = this.props;
        const listSorted = [];
        for (let i = 0; i < list.length; i++) {
            if (i < list.length - 1) {
                listSorted.push(list[i] + ', ');
            } else {
                listSorted.push(list[i]);
            }
        }
        return (
            <section className='step-five-section'>
                <h1 className='step-five-title'> Podsumowanie Twojej darowizny </h1>
                <h2 className='info-title'> Oddajesz: </h2>
                <div className='step-five-info'>
                    <div className='things-info'>
                        <img src={require('../../../assets/Icon-1.svg')} className='step-five-icon' alt=''/>
                        <p className='things-data'>
                            {this.props.howManyBags > 1 ? data.howManyBags + ' worki' : data.howManyBags + ' worek'},
                            {data.typeOfThings}, {listSorted}{data.additionalOrg.length > 1 ? ', ' + data.additionalOrg : ''}
                        </p>
                    </div>
                    <div className='things-info'>
                        <img src={require('../../../assets/Icon-4.svg')} className='step-five-icon' alt=''/>
                        <p className='things-data'> dla lokalizacji: {data.whatCity} </p>
                    </div>
                </div>
                <div className='location-info'>
                    <div className='location-info-box'>
                        <h2 className='info-title'> Adres odbioru: </h2>
                        <div className='location-details'>
                            <p className='location-title'> Ulica </p>
                            <p className='location-data'> {data.street} </p>
                        </div>
                        <div className='location-details'>
                            <p className='location-title'> Miasto </p>
                            <p className='location-data'> {data.city} </p>
                        </div>
                        <div className='location-details'>
                            <p className='location-title'> Kod pocztowy </p>
                            <p className='location-data'> {data.postCode} </p>
                        </div>
                        <div className='location-details'>
                            <p className='location-title'> Numer telefonu </p>
                            <p className='location-data'> {data.phoneNumber} </p>
                        </div>
                    </div>
                    <div className='location-info-box'>
                        <h2 className='info-title'> Termin odbioru: </h2>
                        <div className='location-details'>
                            <p className='location-title'> Data </p>
                            <p className='location-data'> {data.date} </p>
                        </div>
                        <div className='location-details'>
                            <p className='location-title'> Godzina </p>
                            <p className='location-data'> {data.hour} </p>
                        </div>
                        <div className='location-details textarea'>
                            <p className='location-title'> Uwagi dla kuriera </p>
                            <p className='location-data'> {data.notes} </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default StepFive;
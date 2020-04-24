import React, {Component} from 'react';

class StepFive extends Component {
    render() {
        // const {data, list} = this.props;
        // const listSorted = [];
        // for (let i = 0; i < list.length; i++) {
        //     if (i < list.length - 1) {
        //         listSorted.push(list[i] + ', ');
        //     } else {
        //         listSorted.push(list[i]);
        //     }
        // }
        return (
            <section className='step-five-section'>
                <h1 className='step-five-title'> Podsumowanie Twojej darowizny </h1>
                <h2 className='info-title'> Oddajesz: </h2>
                <div className='step-five-info'>
                    <div className='things-info'>
                        <img src={require('../../../assets/Icon-1.svg')} className='step-five-icon'/>
                        <p className='things-data'> </p>
                        {/*<p>{data.howManyBags > 1 ? data.howManyBags + ' worki' : data.howManyBags + ' worek'}, {data.whatAreYouGiving}, {listSorted}{data.additionalOrganization.length > 1 ? ', ' + data.additionalOrganization : ''} </p>*/}
                    </div>
                    <div className='things-info'>
                        <img src={require('../../../assets/Icon-4.svg')} className='step-five-icon'/>
                        <p className='things-data'> </p>
                        {/*<p>dla lokalizacji: {data.whatCity}</p>*/}
                    </div>
                </div>
                <div className='location-info'>
                    <div className='location-info-box'>
                        <h2 className='info-title'> Adres odbioru:</h2>
                        <div className='location-details'>
                            <p className='location-title'> Ulica </p>
                            {/*<span>{data.street}</span>*/}
                            <p className='location-data'> </p>
                        </div>
                        <div className='location-details'>
                            <p className='location-title'> Miasto </p>
                            <p className='location-data'> </p>
                            {/*<span>{data.city}</span>*/}
                        </div>
                        <div className='location-details'>
                            <p className='location-title'> Kod pocztowy </p>
                            <p className='location-data'> </p>
                            {/*<span>{data.postCode}</span>*/}
                        </div>
                        <div className='location-details'>
                            <p className='location-title'> Numer telefonu </p>
                            <p className='location-data'> </p>
                            {/*<span>{data.phoneNumber}</span>*/}
                        </div>
                    </div>
                    <div className='location-info-box'>
                        <h2 className='info-title'> Termin odbioru: </h2>
                        <div className='location-details'>
                            <p className='location-title'> Data </p>
                            <p className='location-data'> </p>
                            {/*<span>{data.date}</span>*/}
                        </div>
                        <div className='location-details'>
                            <p className='location-title'> Godzina </p>
                            <p className='location-data'> </p>
                            {/*<span>{data.hour}</span>*/}
                        </div>
                        <div className='location-details textarea'>
                            <p className='location-title'> Uwagi dla kuriera </p>
                            <p className='location-data'>  </p>
                            {/*<span>{data.notes}</span>*/}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default StepFive;
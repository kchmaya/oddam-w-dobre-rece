import React from 'react';

const Content = ({currentItems}) => {
    return (
        currentItems.map((data, index) => {
            return (
                <div key={index} className='items-box'>
                    <div className='items-left-cln'>
                        <h4 className='item-title'> {data.name} </h4>
                        <p className='item-description'> {data.description} </p>
                    </div>
                    <p className='item-additional'> {data.additional} </p>
                </div>
            )
        })
    )
};

export default Content;
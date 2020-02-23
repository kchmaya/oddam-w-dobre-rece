import React from "react";

const Pagination = ({itemsPerPage, totalItems, paginate}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    // const handleClick = () => {
    //     add
    //     if ( active )
    //
    //   this.setState()
    // };

    if (pageNumbers.length < 2) {
        return ' '
    } else {
        return (
            <nav>
                <ul className='pagination'>
                    {pageNumbers.map(number => (
                        <li key={number} className='pagination-button'>
                            <span key={number} onClick={() => paginate(number)}> {number} </span>
                        </li>
                    ))}
                </ul>
            </nav>
        );
    }
};

export default Pagination;





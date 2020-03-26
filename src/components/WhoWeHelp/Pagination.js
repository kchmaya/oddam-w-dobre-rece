import React from "react";

const Pagination = ({itemsPerPage, totalItems, paginate, currentPage}) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    if (pageNumbers.length < 2) {
        return ''
    } else {
        return (
            <nav>
                <ul className='pagination'>
                    {pageNumbers.map(number => (
                        <li key={number}
                            className={`${currentPage === number ? 'pagination-button active-page' : 'pagination-button'}`}
                            onClick={() => paginate(number)}> {number} </li>
                    ))}
                </ul>
            </nav>
        );
    }
};

export default Pagination;
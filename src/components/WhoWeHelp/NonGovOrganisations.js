import React, {useState} from 'react';
import Pagination from './Pagination';
import Content from './Content';

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

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(3);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = organisationsInfo.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div>
            <Content currentItems={currentItems}/>
            <Pagination itemsPerPage={itemsPerPage}
                        totalItems={organisationsInfo.length}
                        paginate={paginate}/>
        </div>
    )
};

export default NonGovOrganisations;
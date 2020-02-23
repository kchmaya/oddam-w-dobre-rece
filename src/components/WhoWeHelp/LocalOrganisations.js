import React, {useState} from 'react';
import Content from './Content';
import Pagination from './Pagination';

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

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(3);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = localOrganisationsInfo.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div>
            <Content currentItems={currentItems}/>
            <Pagination itemsPerPage={itemsPerPage}
                        totalItems={localOrganisationsInfo.length}
                        paginate={paginate}/>
        </div>
    )
};

export default LocalOrganisations;
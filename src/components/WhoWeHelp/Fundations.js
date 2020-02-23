import React, {useState} from 'react';
import Content from './Content';
import Pagination from './Pagination';

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

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(3);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = fundationsInfo.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <>
            <Content currentItems={currentItems}/>
            <Pagination itemsPerPage={itemsPerPage}
                        totalItems={fundationsInfo.length}
                        paginate={paginate}/>
        </>
    )
};

export default Fundations;
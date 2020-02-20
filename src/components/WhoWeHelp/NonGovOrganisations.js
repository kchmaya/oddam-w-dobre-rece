import React, {useState} from "react";
import Pagination from "./Pagination";
import NonGovOrgContent from "./Content/NonGovOrgContent";

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
    const [postsPerPage] = useState(3);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = organisationsInfo.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div>
            <NonGovOrgContent currentPosts={currentPosts}/>
            <Pagination postsPerPage={postsPerPage}
                        totalPosts={organisationsInfo.length}
                        paginate={paginate}/>
        </div>
    )
};

export default NonGovOrganisations;
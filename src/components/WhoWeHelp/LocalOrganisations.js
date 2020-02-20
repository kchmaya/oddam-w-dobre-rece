import React, {useState} from "react";
import LocalOrgContent from "./Content/LocalOrgContent";
import Pagination from "./Pagination";

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
    const [postsPerPage] = useState(3);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = localOrganisationsInfo.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div>
            <LocalOrgContent currentPosts={currentPosts}/>
            <Pagination postsPerPage={postsPerPage}
                        totalPosts={localOrganisationsInfo.length}
                        paginate={paginate}/>
        </div>
    )
};

export default LocalOrganisations;
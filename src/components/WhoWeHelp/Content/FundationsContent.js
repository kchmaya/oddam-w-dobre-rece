import React from "react";

const FundationsContent = ({currentPosts}) => {
    return (
        currentPosts.map((data, index) => {
            return (
                <div key={index}>
                    <h4>{data.name}</h4>
                    <p>{data.description}</p>
                    <p>{data.additional}</p>
                </div>
            )
        })
    )
};

export default FundationsContent;
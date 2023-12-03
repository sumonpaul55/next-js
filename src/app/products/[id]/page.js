import React from 'react';

const DynamicPage = ({ params, searchParams }) => {
    // console.log(searchParams)
    return (
        <div>
            <h2>this is dynamic page {params.id} and {searchParams.name}</h2>
        </div>
    );
};

export default DynamicPage;
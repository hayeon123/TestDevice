import React from 'react';
import { Link } from 'react-router-dom';

const LinkCell = ({url, id}) => {
    const path = `${url}/${id}`
    return (
        <Link to={path}>{id}</Link>
    );
};

export default LinkCell;
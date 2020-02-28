import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <h1>Pintereach</h1>
            <Link to="/">Dashboard</Link>
            <Link to="/add">Add</Link>
        </div>
    )
};

export default Header;
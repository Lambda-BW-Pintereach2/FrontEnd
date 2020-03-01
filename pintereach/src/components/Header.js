import React from 'react';
import { Link } from 'react-router-dom';


const Header = (props) => {
    return (
        <div>
            <h1>Pintereach</h1>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
            <Link to="/">Add</Link>
            <Link to="/">Dashboard</Link>
            <Link to="/login" onClick={props.logout}>Logout</Link>

        </div>
    )
};

export default Header;
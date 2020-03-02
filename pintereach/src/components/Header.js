import React from 'react';
import { Link } from 'react-router-dom';


const Header = (props) => {
    return (
        <div>
            <h1>Pintereach</h1>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
            <Link to="/add">Add</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/login" onClick={() => localStorage.removeItem("token")}>Logout</Link>

        </div>
    )
};

export default Header;
import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <div>
            <header>
                <nav>
                    <Link to='/'>Register</Link>
                    <Link to='/'>Login</Link>
                    <Link to='/'>Logout</Link>
                </nav>
            </header>
        </div>
    )
}

export default Header
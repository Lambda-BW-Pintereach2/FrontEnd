import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setLoggedIn } from '../actions/UserActions';


const Header = (props) => {
    const userLoggin = useSelector(state => state.loggedIn)
    const dispatch = useDispatch()
    return (
        <div>
            {console.log("Is the user logged in", userLoggin)}
            {userLoggin ? (
                <div>
                    <span><h1>Pintereach</h1>Welcome {props.username}</span>
                    <Link to="/add">Add</Link>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/login"
                        onClick={
                            () => {
                                localStorage.removeItem("token")
                                dispatch(setLoggedIn(false))
                            }
                        }>Logout</Link>
                </div>
            ) : (
                    <div>
                        <h1>Pintereach</h1>
                        <Link to="/signup">Signup</Link>
                        <Link to="/login">Login</Link>
                        {/* <Link to="/add">Add</Link>
                        <Link to="/dashboard">Dashboard</Link> */}
                    </div>
                )
            }
        </div>

    )

};

export default Header;
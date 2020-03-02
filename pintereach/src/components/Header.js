import React from 'react';
import { Link, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setLoggedIn } from '../actions/UserActions';
import styled from 'styled-components';


const HeaderStyle= styled.div `
    background: #C0C0C0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: row wrap;
    padding: .5rem 2rem;
`;

const HeaderLogo= styled.h1 `
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    align-content: center;
    margin: 0rem;
`;

const LinkContainer = styled.div  `
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-flow: row no-wrap;

    a {
        text-decoration: none;
        color: white;
        padding: .5rem;
    }
`;


const Header = (props) => {
    const userLoggin = useSelector(state => state.loggedIn)
    const dispatch = useDispatch()
    return (
        <div>
            {console.log(userLoggin)}
            {userLoggin ? (
                <div>
                    <span><h1>Pintereach</h1>Welcome{props.username}</span>
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
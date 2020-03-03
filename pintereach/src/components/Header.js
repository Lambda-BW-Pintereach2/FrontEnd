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

    @media only screen and (max-width: 768px) {
        padding: 1rem 2rem .5rem 2rem;
        flex-direction: column;
        justify-content: center;
    }
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

        :hover {
            color: #FF0000;
            font-weight: bold;
        }
    }
`;

const SpanStyle=styled.span `
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    width: 15rem;
    font-weight: bold;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
    }

`;

const SpanWelcome = styled.div `
    font-size: .75rem;
`;


const Header = (props) => {
    const userLoggin = useSelector(state => state.loggedIn)
    const dispatch = useDispatch()
    return (
        <div>
            {console.log(userLoggin)}
            {userLoggin ? (
                <HeaderStyle>
                    <SpanStyle><HeaderLogo>Pintereach</HeaderLogo><SpanWelcome>Welcome,{props.username}</SpanWelcome></SpanStyle>
                    <LinkContainer>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/login"
                        onClick={
                            () => {
                                localStorage.removeItem("token")
                                dispatch(setLoggedIn(false))
                            }
                        }>Logout</Link>
                    </LinkContainer>
                </HeaderStyle>
            ) : (
                    <HeaderStyle>
                        <HeaderLogo>Pintereach</HeaderLogo>
                        <LinkContainer>
                        <Link to="/signup">Signup</Link>
                        <Link to="/login">Login</Link>
                        {/* <Link to="/add">Add</Link>
                        <Link to="/dashboard">Dashboard</Link> */}
                        </LinkContainer>
                    </HeaderStyle>
                )
            }
        </div>

    )

};

export default Header;
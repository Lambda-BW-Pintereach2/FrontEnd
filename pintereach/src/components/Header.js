import React from 'react';
import { Link, Route } from 'react-router-dom';
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




const Header = () => {
    return (
        <HeaderStyle>
            <HeaderLogo>Pintereach</HeaderLogo>
            <LinkContainer>
                <Link to="/">Home</Link>
                <Link to="/logout">Log Out</Link>
            </LinkContainer>
        </HeaderStyle>
    )
};

export default Header;
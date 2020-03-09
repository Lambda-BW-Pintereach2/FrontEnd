import React, { useState } from 'react';
import Articles from './Articles';
// import Add from './Add';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const DashboardStyle = styled.div `
    padding-top: 2rem;
    margin: 0rem;
`;

const ButtonStyle= styled.button  `
    width: 8rem;
    border-radius: .5rem;
    background: #000000;
    margin-bottom: 2rem;
    
    a {
        color: white;
        font-weight: bold;
        text-decoration: none;
    }
`;

const Dashboard = () => {
    const [articles, setArticles] = useState([]);
    
    
    return (
        <DashboardStyle className="dashboard">
            <ButtonStyle className="add-button">
                <Link to="/add">Add Article</Link>
            </ButtonStyle>
            <Articles articles={articles} />
        </DashboardStyle>
    );
};

export default Dashboard;
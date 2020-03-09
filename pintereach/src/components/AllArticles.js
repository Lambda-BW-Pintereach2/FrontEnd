import React from 'react';
// import { Card, CardBody, CardTitle, CardHeader, CardText, CardImg, CardLink, CardDeck, CardColumns, Col, Container, Row } from 'reactstrap';
import styled from 'styled-components';

const ArticleContainer = styled.div `
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-flow: row wrap;
`;

const ArticleStyle = styled.div `
    border-radius: .5rem;
    padding: 1rem;
    width: 15rem;
    height: auto;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin: .25rem;
`;

const ArticleTitle = styled.h1 `
    font-size: 1.5rem;
`;

// const ArticleImage = styled.img `
//     width: 100%;
//     height: auto;
// `;


const AllArticles = (props) => {
    console.log("AllArticles props", props);

    return (
        <ArticleContainer className="article-list">
                <ArticleStyle  className="article">                                        
                    <ArticleTitle>{props.name}</ArticleTitle>
                    <a href={props.url}>Visit Site</a> 
                </ArticleStyle>
        </ArticleContainer>
    )
};

export default AllArticles;
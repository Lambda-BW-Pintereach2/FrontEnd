import React, { useState } from 'react';
import ArticleForm from './ArticleForm';
import Articles from './Articles';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AddStyle = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 2rem;
    margin: 0rem;
`;

const ButtonStyle= styled.button  `
    width: 8rem;
    border-radius: .5rem;
    background: #000000;
    margin-bottom: 2rem;
    color: white;
    a {
        color: white;
        font-weight: bold;
        text-decoration: none;
    }
`;

const Add = () => {
    const [addArticle, setAddArticle] = useState([
        
]);

    const addNewArticle = article => {
        const newArticle = {
            id: "",
            article_label: article.article_label,
            url: article.url
        };

        setAddArticle([...addArticle, newArticle]);
    };

    return (
        <AddStyle className="add-container">
            <ButtonStyle className="all-button"><Link to='/dashboard'>Back to All</Link></ButtonStyle>
            <h2>Add an article</h2>
            <div>
                <ArticleForm addNewArticle={addNewArticle} addArticle={addArticle} />
            </div>
            <Articles articles={addArticle} />
        </AddStyle>
    )
};

export default Add;
import React, { useState, useEffect } from 'react';
import ArticleForm from './ArticleForm';
import Articles from './Articles';
import AllArticles from './AllArticles';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const AddStyle = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 2rem;
    margin: 0rem;
`;

const AllStyle = styled.div `
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-flow: row wrap;
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
    const [addArticle, setAddArticle] = useState([]);
    const [allArticles, setAllArticles] = useState([]);
    


    const addNewArticle = article => {
        const newArticle = {
            id: Date.now(),
            name: article.name,
            url: article.url
        };

        setAddArticle([...addArticle, newArticle]);
    };

    useEffect(() => {
        const allArticlesContainer = () => {
            axios.get('https://rickandmortyapi.com/api/character/')
                .then(response => {
                console.log('response', response)
                setAllArticles(response.data.results)
                })
                .catch(error => {
                console.log("error!", error)
                })
        }
        allArticlesContainer();
    }, []);


    
    return (
        <div>
            <AddStyle className="add-container">
                {/* <ButtonStyle className="all-button"><Link to='/dashboard'>Back to All</Link></ButtonStyle> */}
                <h2>Add an article</h2>
                <div>
                    <ArticleForm addNewArticle={addNewArticle} addArticle={addArticle} allArticles={allArticles} />
                </div>
                <div>
                    <Articles key={addArticle.id} articles={addArticle} />
                </div>
            </AddStyle>
            <AllStyle>
                {allArticles.map(each =>(
                    <div>
                        <AllArticles key={each.id} articles={allArticles} name={each.name} url={each.url}/>
                    </div>
                ))}
            </AllStyle>
        </div>
    )
};

export default Add;
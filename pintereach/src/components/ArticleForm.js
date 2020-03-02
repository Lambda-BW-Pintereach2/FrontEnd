import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

const FormStyle= styled.form  `
    display: flex;
    flex-direction: column;
`;

const LabelStyle= styled.label `
    text-align: right;
`;

const InputStyle= styled.input `
    text-align: left;
    margin-left: 1rem;
    width: 15rem;
`;

const ButtonStyle= styled.button  `
    width: 4rem;
    border-radius: .5rem;
    background: #FF0000;
    margin-bottom: 2rem;
    align-self: center;
    
    a {
        color: white;
        font-weight: bold;
        text-decoration: none;
    }
`;

const ArticleForm = (props) => {
    console.log('ArticleForm props', props);
    
    const dispatch = useDispatch()
    const newArticles = useSelector(state => state.article)

    const handleChanges = event => {
        // setNewArticles({ ...newArticles, [event.target.name]: event.target.value });
        event.preventDefault()
        dispatch({
            type: "FORMCHANGE",
            name: event.target.name,
            value: event.target.value
        })
    };

    const submitForm = event => {
        event.preventDefault();
        props.addNewArticle(newArticles);
        dispatch({
            type: "RESETFORM"
        });
    };

    return (
        <form onSubmit={submitForm}>
            <br />
            <br />
            <label htmlFor="article">Article:</label>
            <input
                type="text"
                placeholder="Enter an article title"
                id="article"
                name="article"
                value={newArticles.article}
                onChange={handleChanges}
            />
            <br />
            <label htmlFor="description">Description:</label>
            <input
                type="text"
                placeholder="Enter an article description"
                id="description"
                name="description"
                value={newArticles.description}
                onChange={handleChanges}
            />
            <br />
            <label htmlFor="url">Link:</label>
            <input
                type="url"
                placeholder="Paste article link"
                id="url"
                name="url"
                value={newArticles.url}
                onChange={handleChanges}
            />
            {console.log(newArticles)}
            <br />
            <label htmlFor="image">Image:</label>
            <input
                type="url"
                placeholder="Paste image address"
                id="image"
                name="image"
                value={newArticles.image}
                onChange={handleChanges}
            />
            <br />
            <button type="submit">Add</button>
        </form>
    )

};

export default ArticleForm;
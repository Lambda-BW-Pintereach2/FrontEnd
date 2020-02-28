import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
    const [newArticles, setNewArticles] = useState({
        article: "",
        description: "",
        image: "",
        url: ""
    });

    const handleChanges = event => {
        setNewArticles({...newArticles, [event.target.name]: event.target.value});
    };

    const submitForm = event => {
        event.preventDefault();
        props.addNewArticle(newArticles);
        setNewArticles({article:"", description: "", image: "", url: ""});
    };

    
    return (
        <div>
            <FormStyle onSubmit={submitForm}>
                <LabelStyle htmlFor="article">Article:
                    <InputStyle
                        type="text"
                        placeholder="Enter an article title"
                        id="article"
                        name="article"
                        value={newArticles.article}
                        onChange={handleChanges}
                    />
                </LabelStyle>
                <LabelStyle htmlFor="description">Description: 
                    <InputStyle
                        type="text"
                        placeholder="Enter an article description"
                        id="description"
                        name="description"
                        value={newArticles.description}
                        onChange={handleChanges}
                    />
                </LabelStyle>
                <LabelStyle htmlFor="url">Link: 
                    <InputStyle
                        type="url"
                        placeholder="Paste article link"
                        id="url"
                        name="url"
                        value={newArticles.url}
                        onChange={handleChanges}
                    />
                </LabelStyle>
                <LabelStyle htmlFor="image">Image: 
                    <InputStyle
                        type="url"
                        placeholder="Paste image address"
                        id="image"
                        name="image"
                        value={newArticles.image}
                        onChange={handleChanges}
                    />
                </LabelStyle>
                <ButtonStyle type="submit">Add</ButtonStyle>
            </FormStyle>
        </div>
    )
};

export default ArticleForm;
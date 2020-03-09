import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const FormStyle= styled.form  `
    display: flex;
    flex-direction: column;
`;

const LabelStyle= styled.label `
    text-align: right;
    margin: 0rem;
`;

const InputStyle= styled.input `
    text-align: left;
    margin-left: 1rem;
    width: 15rem;

    :invalid {
        border: 2px solid red;
    }

    :valid {
        border: 2px solid black;
    }
`;

// const LabelInputContainer = styled.div `
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-flow: row no-wrap;
// `;

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
    const [newArticles, setNewArticles] = useState([{}]);

    const handleChanges= (event) => {
        setNewArticles({...newArticles, [event.target.name]: event.target.value});
    };

    const submitForm = event => {
        event.preventDefault();
        props.addNewArticle(newArticles);
        setNewArticles({ name: "", url: ""});
    };

    // useEffect(() => {
    //     allArticles.map(all => {

    //     })
    // }, [])


    

    return (
        <div>
            <FormStyle onSubmit={submitForm}>
                <br></br>
                <br></br>
                <LabelStyle htmlFor="name">Article:
                    <InputStyle required
                        type="text"
                        placeholder="Enter an article title"
                        id="name"
                        name="name"
                        value={newArticles.name}
                        onChange={handleChanges}
                    />
                </LabelStyle>
                <br></br>
                <LabelStyle htmlFor="url">Link: 
                    <InputStyle required
                        type="url"
                        placeholder="Paste article link"
                        id="url"
                        name="url"
                        value={newArticles.url}
                        onChange={handleChanges}
                    />
                </LabelStyle>
                <br></br>
                <br></br>
                <ButtonStyle type="submit">Add</ButtonStyle>
            </FormStyle>
        </div>
    );

};

export default ArticleForm;
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addArticle } from '../redux/actions/UserActions';
import styled from 'styled-components';


const LabelStyle= styled.label `
    text-align: right;
    margin: 0rem;
`;

const InputStyle= styled.input `
    text-align: left;
    margin-left: 1rem;
    width: 15rem;
`;

const FormStyle = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row no-wrap;
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
    const dispatch = useDispatch()
    const newArticles = useSelector(state => state.article)

    const handleChanges = event => {
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
            type: "ADD_ARTICLE",
            payload: event.article
        })
        dispatch({
            type: "RESETFORM"
        });
    };

    return (
        <FormStyle onSubmit={submitForm}>
            <br></br>
            <br></br>
            <LabelStyle htmlFor="article">Article:
                <InputStyle
                    type="text"
                    placeholder="Enter an article title"
                    id="article_label"
                    name="article_label"
                    value={newArticles.article_label}
                    onChange={handleChanges}
                />
            </LabelStyle>
            {/* <br></br>
            <LabelStyle htmlFor="description">Description:
                <InputStyle
                    type="text"
                    placeholder="Enter an article description"
                    id="description"
                    name="description"
                    value={newArticles.description}
                    onChange={handleChanges}
                />
            </LabelStyle> */}
            <br></br>
            <LabelStyle>Link:
                <InputStyle
                    type="url"
                    placeholder="Paste article link"
                    id="url"
                    name="url"
                    value={newArticles.url}
                    onChange={handleChanges}
                />
            </LabelStyle>
            <br></br>
            {console.log(newArticles)}
            {/* <LabelStyle htmlFor="image">Image:
                <InputStyle
                    type="url"
                    placeholder="Paste image address"
                    id="image"
                    name="image"
                    value={newArticles.image}
                    onChange={handleChanges}
                />
            </LabelStyle>
            <br></br> */}
            <ButtonStyle type="submit">Add</ButtonStyle>
        </FormStyle>
    )

};

export default ArticleForm;
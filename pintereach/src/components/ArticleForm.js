import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const ArticleForm = (props) => {
    console.log('ArticleForm props', props);
    // const [newArticles, setNewArticles] = useState({
    //     artitle: "",
    //     description: "",
    //     image: "",
    //     url: ""
    // });

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
            <label htmlFor="article">Article:</label>
            <input
                type="text"
                placeholder="Enter an article title"
                id="article"
                name="article"
                value={newArticles.article}
                onChange={handleChanges}
            /><label htmlFor="description">Description:</label>
            <input
                type="text"
                placeholder="Enter an article description"
                id="description"
                name="description"
                value={newArticles.description}
                onChange={handleChanges}
            />
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
            <label htmlFor="image">Image:</label>
            <input
                type="url"
                placeholder="Paste image address"
                id="image"
                name="image"
                value={newArticles.image}
                onChange={handleChanges}
            />
            <button type="submit">Add</button>
        </form>
    )
};

export default ArticleForm;
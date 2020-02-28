import React, { useState } from 'react';

const ArticleForm = (props) => {
    console.log('ArticleForm props', props);
    const [newArticles, setNewArticles] = useState({
        artitle: "",
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
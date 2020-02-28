import React, { useState } from 'react';
import ArticleForm from './ArticleForm';
import testdata from '../testdata';

const Add = () => {
    const [articles, setArticles] = useState(testdata);

    const addNewArticle = article => {
        const newArticle = {
            id: Date.now(),
            article: article.article,
            description: article.description,
            image: article.image,
            url: article.url
        };

        setArticles([...articles, newArticle]);
    };
    return (
        <div>
            <ArticleForm addNewArticle={addNewArticle} />
        </div>
    )
};

export default Add;
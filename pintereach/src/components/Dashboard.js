import React, { useState } from 'react';
import testdata from '../testdata';
import Articles from './Articles';

const Dashboard = () => {
    // const [boards, setBoards] = useState(testdata);
    const [articles, setArticles] = useState(testdata);

    // const addNewBoard = board => {
    //     const newBoard = {
    //         id: Date.now(),
    //         title: board.title
    //     };

    //     setBoards([...boards, newBoard]);
    // };

    // const addNewArticle = article => {
    //     const newArticle = {
    //         id: Date.now(),
    //         article: article.article,
    //         description: article.description,
    //         image: article.image,
    //         url: article.url
    //     };

    //     setArticles([...articles, newArticle]);
    // };


    return (
        <div className="my-boards">
            <h1>My Articles</h1>
            <Articles articles={articles} />    
        </div>
    );
};

export default Dashboard;
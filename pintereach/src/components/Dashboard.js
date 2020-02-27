import React, { useState } from 'react';
import { Container, Row } from 'reactstrap';
import BoardForm from './BoardForm';
import Boards from './Boards';
import testdata from '../testdata';
import ArticleForm from './ArticleForm';
import Articles from './Articles';

const Dashboard = () => {
    const [boards, setBoards] = useState(testdata);
    const [articles, setArticles] = useState(testdata);

    const addNewBoard = board => {
        const newBoard = {
            id: Date.now(),
            title: board.title
        };

        setBoards([...boards, newBoard]);
    };

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
        <div className="my-boards">
            <h1>My Articles</h1>
            <BoardForm addNewBoard={addNewBoard} />
            <Boards boards={boards} addNewArticle={addNewArticle} articles={articles} />
            <ArticleForm addNewArticle={addNewArticle} boards={boards} />
            <Container>
                <Row>
                    <Articles articles={articles} />    
                </Row>
            </Container>
        </div>
    );
};

export default Dashboard;
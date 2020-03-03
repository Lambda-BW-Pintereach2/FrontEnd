import React from 'react';
// import { Card, Button, CardHeader, CardFooter, CardBody,
//     CardTitle, CardText, Col } from 'reactstrap';
import ArticleForm from './ArticleForm';
import Articles from './Articles';
import styled from 'styled-components';

const BoardContainer = styled.div `
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-flow: row wrap;
`;

const BoardStyle = styled.div  `
    border-radius: .25rem;
    background: whitesmoke;
    display: flex;
    justify-content: flex-start;
    padding: 1rem 10rem 5rem 1rem;
`;

const BoardTitle= styled.h1 `
    font-size: 2rem;
    font-family: 'Helvetica', sans-serif;
    font-weight: lighter;
    color: darkgrey;
`;

const Boards = (props) => {
    return (
        <BoardContainer className="board-list">
            {props.boards.map(board => (
                <BoardStyle className="board" key={board.id}>
                    <div>
                        <BoardTitle>{board.title}</BoardTitle>
                    </div>
                </BoardStyle>
             ))}    
        </BoardContainer>
    );
};
    

export default Boards;
import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap';
import ArticleForm from './ArticleForm';
import Articles from './Articles';

const Boards = (props) => {
    return (
        <div className="board-list">
            {props.boards.map(board => (
                <Card className="board" key={board.id}>
                    <CardBody>
                        <CardTitle>{board.title}</CardTitle>
                    </CardBody>
                </Card>
            ))}
             
        </div>
    );
};
    

export default Boards;
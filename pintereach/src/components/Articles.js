import React from 'react';
import { Card, CardBody, CardTitle, CardHeader, CardText, CardImg, CardLink, CardDeck, CardColumns, Col, Container, Row } from 'reactstrap';

const Articles = (props) => {
    return (
        <div className="article-list">
            
                    {props.articles.map(article => (
                        
                            
                                <Col xs="6" md="4" xl="3">
                                    <Card  className="article" key={article.id}>
                                            <CardBody>
                                                <CardImg top width="100%" src={article.image}/>
                                                <CardTitle tag="h3">{article.article}</CardTitle>
                                                <CardText>{article.description}</CardText>
                                                <CardLink href={article.url}>Visit Site</CardLink>
                                            </CardBody>
                                    </Card>
                                </Col>
                            
                        
                    ))}

        </div>
    )
};

export default Articles;
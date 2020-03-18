import React, { Component } from 'react';
import { Container, Col, Row, Media, Card, ListGroup } from 'react-bootstrap';
import blogImg from '../assets/blogImg.gif';


export default class Blog extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="9">
                        <Media className="m-5">
                            <img 
                                width={150}
                                height={150}
                                className="mr-3"
                                src={blogImg} alt="photo"                                
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>
                                Lorem ipsum nulla amet: risus auctor tempus quam in porttitor proin eros mauris lorem: et malesuada maecenas: tellus vitae amet metus auctor congue porta nulla eu urna lorem congue porttitor, risus maecenas odio, quisque, rutrum ipsum, risus quam amet justo
                                </p>
                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img 
                                width={150}
                                height={150}
                                className="mr-3"
                                src={blogImg} alt="photo"                                
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>
                                Lorem ipsum nulla amet: risus auctor tempus quam in porttitor proin eros mauris lorem: et malesuada maecenas: tellus vitae amet metus auctor congue porta nulla eu urna lorem congue porttitor, risus maecenas odio, quisque, rutrum ipsum, risus quam amet justo
                                </p>
                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img 
                                width={150}
                                height={150}
                                className="mr-3"
                                src={blogImg} alt="photo"                                
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>
                                Lorem ipsum nulla amet: risus auctor tempus quam in porttitor proin eros mauris lorem: et malesuada maecenas: tellus vitae amet metus auctor congue porta nulla eu urna lorem congue porttitor, risus maecenas odio, quisque, rutrum ipsum, risus quam amet justo
                                </p>
                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img 
                                width={150}
                                height={150}
                                className="mr-3"
                                src={blogImg} alt="photo"                                
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>
                                Lorem ipsum nulla amet: risus auctor tempus quam in porttitor proin eros mauris lorem: et malesuada maecenas: tellus vitae amet metus auctor congue porta nulla eu urna lorem congue porttitor, risus maecenas odio, quisque, rutrum ipsum, risus quam amet justo
                                </p>
                            </Media.Body>
                        </Media>
                    </Col>
                    <Col md="3">
                        <h5 className="text-center mt-5">Categories</h5>
                        <Card>
                            <ListGroup.Item>Html/Css</ListGroup.Item>
                            <ListGroup.Item>JavaScript</ListGroup.Item>
                            <ListGroup.Item>Node.js</ListGroup.Item>
                            <ListGroup.Item>React</ListGroup.Item>
                            <ListGroup.Item>Alexander Paleev</ListGroup.Item>
                        </Card>

                        <Card className="mt-3" bg="light">
                            <Card.Body>
                                <Card.Title>Side widget</Card.Title>
                                <Card.Text>Lorem ipsum porttitor rutrum lorem sem bibendum pellentesque bibendum et — sem ut nibh nec mattis leo mauris sapien eu ut non lectus vitae quam enim, bibendum congue bibendum quam sagittis</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

import React, { Component } from 'react';
import CarouselBox from '../Component/CarouselBox';
import { Container, CardDeck, Card, Button } from 'react-bootstrap';

export default class Home extends Component {
    render() {
        return (
            <>
                <CarouselBox />
                <Container>
                    <h2 className="text-center m-4">Our team</h2>
                    <CardDeck className="m-4">
                        <Card bg="light" border="primary" text="success">
                            <Card.Img 
                                height={330}
                                variant="top"
                                src="https://pristor.ru/wp-content/uploads/2017/02/%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D1%82%D0%B5%D0%BB%D0%B5%D1%84%D0%BE%D0%BD%D0%B0-%D0%BD%D0%B0-%D0%B7%D0%B0%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D1%83-%D0%B4%D0%BB%D1%8F-%D0%B4%D0%B5%D0%B2%D0%BE%D1%87%D0%B5%D0%BA-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B5-%D0%B8-%D0%BF%D1%80%D0%B8%D0%BA%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-3.jpg" alt="flower"
                            />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                Lorem ipsum leo porta malesuada elementum sodales lorem maecenas eros metus justo
                                </Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>
                        <Card bg="light" border="primary" text="success">
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                Lorem ipsum leo porta malesuada elementum sodales lorem maecenas eros metus justo
                                </Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                            <Card.Img 
                                height={330}
                                variant="bottom"
                                src="https://pristor.ru/wp-content/uploads/2018/06/%D0%9A%D0%BB%D0%B0%D1%81%D1%81%D0%BD%D1%8B%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%BF%D0%B0%D1%86%D0%B0%D0%BD%D0%BE%D0%B2-%D0%B8-%D0%BF%D0%B0%D1%80%D0%BD%D0%B5%D0%B9-%D0%BD%D0%B0-%D1%82%D0%B5%D0%BB%D0%B5%D1%84%D0%BE%D0%BD-%D0%BD%D0%B0-%D0%B7%D0%B0%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D1%83-%D1%81%D0%B1%D0%BE%D1%80%D0%BA%D0%B0-2.jpg" alt="flower"
                            />
                        </Card>
                        <Card bg="light" border="primary" text="success">
                            <Card.Img 
                                height={330}
                                variant="top"
                                src="https://bipbap.ru/wp-content/uploads/2017/04/blue-jelly-candy-thumb.jpg" alt="flower"
                            />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                Lorem ipsum leo porta malesuada elementum sodales lorem maecenas eros metus justo
                                </Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>                    
                </Container>
            </>
        )
    }
}

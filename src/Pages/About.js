import React, { Component } from 'react';
import { Container, Nav, Row, Col, Tab } from 'react-bootstrap';

import about01 from '../assets/about01.jpg';
import about02 from '../assets/about02.jpg';
import about03 from '../assets/about03.jpg';
import about04 from '../assets/about04.jpg';
import about05 from '../assets/about05.jpg';


export default class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="left-tabs-exampl" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Programming</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-3">
                                <Tab.Pane eventKey="first">
                                    <img width={600} height={350} src={about01} alt="cat" />
                                    <p>
                                    Lorem ipsum magna urna pharetra congue curabitur tempus lorem risus curabitur non commodo bibendum. Justo cursus non integer duis donec nec eu odio bibendum cursus sagittis porta tempus fusce, nulla donec, sed enim gravida in, lectus. Arcu non enim malesuada ipsum pharetra massa ut morbi ligula malesuada massa. Mattis: malesuada elementum et — sodales risus in eros porta in amet a metus. Arcu sodales proin gravida, porta orci nam sem massa a ornare — in sed curabitur: nam elementum a adipiscing. Sodales bibendum, metus, rutrum tellus nulla gravida duis sagittis cursus vivamus cursus sem sodales donec in pellentesque maecenas leo lorem — integer.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img width={600} height={350} src={about02} alt="cat" />
                                    <p>
                                    Lorem ipsum magna urna pharetra congue curabitur tempus lorem risus curabitur non commodo bibendum. Justo cursus non integer duis donec nec eu odio bibendum cursus sagittis porta tempus fusce, nulla donec, sed enim gravida in, lectus. Arcu non enim malesuada ipsum pharetra massa ut morbi ligula malesuada massa. Mattis: malesuada elementum et — sodales risus in eros porta in amet a metus. Arcu sodales proin gravida, porta orci nam sem massa a ornare — in sed curabitur: nam elementum a adipiscing. Sodales bibendum, metus, rutrum tellus nulla gravida duis sagittis cursus vivamus cursus sem sodales donec in pellentesque maecenas leo lorem — integer.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img width={600} height={350} src={about03} alt="cat" />
                                    <p>
                                    Lorem ipsum magna urna pharetra congue curabitur tempus lorem risus curabitur non commodo bibendum. Justo cursus non integer duis donec nec eu odio bibendum cursus sagittis porta tempus fusce, nulla donec, sed enim gravida in, lectus. Arcu non enim malesuada ipsum pharetra massa ut morbi ligula malesuada massa. Mattis: malesuada elementum et — sodales risus in eros porta in amet a metus. Arcu sodales proin gravida, porta orci nam sem massa a ornare — in sed curabitur: nam elementum a adipiscing. Sodales bibendum, metus, rutrum tellus nulla gravida duis sagittis cursus vivamus cursus sem sodales donec in pellentesque maecenas leo lorem — integer.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <img width={600} height={350} src={about04} alt="cat" />
                                    <p>
                                    Lorem ipsum magna urna pharetra congue curabitur tempus lorem risus curabitur non commodo bibendum. Justo cursus non integer duis donec nec eu odio bibendum cursus sagittis porta tempus fusce, nulla donec, sed enim gravida in, lectus. Arcu non enim malesuada ipsum pharetra massa ut morbi ligula malesuada massa. Mattis: malesuada elementum et — sodales risus in eros porta in amet a metus. Arcu sodales proin gravida, porta orci nam sem massa a ornare — in sed curabitur: nam elementum a adipiscing. Sodales bibendum, metus, rutrum tellus nulla gravida duis sagittis cursus vivamus cursus sem sodales donec in pellentesque maecenas leo lorem — integer.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <img width={600} height={350} src={about05} alt="cat" />
                                    <p>
                                    Lorem ipsum magna urna pharetra congue curabitur tempus lorem risus curabitur non commodo bibendum. Justo cursus non integer duis donec nec eu odio bibendum cursus sagittis porta tempus fusce, nulla donec, sed enim gravida in, lectus. Arcu non enim malesuada ipsum pharetra massa ut morbi ligula malesuada massa. Mattis: malesuada elementum et — sodales risus in eros porta in amet a metus. Arcu sodales proin gravida, porta orci nam sem massa a ornare — in sed curabitur: nam elementum a adipiscing. Sodales bibendum, metus, rutrum tellus nulla gravida duis sagittis cursus vivamus cursus sem sodales donec in pellentesque maecenas leo lorem — integer.
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}

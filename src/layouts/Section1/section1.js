/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import 'animate.css'
import './style.css'
import IMAGES from '../../configs/images'

export default class Section1 extends React.Component {
    render() {
        return (
            <Container id="section" className="container-section">
                <Row className="d-flex flex-row-reverse">
                    <Col md="6" className="animated fadeInRight">
                        <img src={IMAGES.landing} alt="" className="img-fluid mb-4" />
                    </Col>
                    <Col md="6" className="section-section animated fadeInLeft">
                        <Row>
                            <Col md="10">
                                <p className="title">Get started</p>
                            </Col>
                        </Row>
                        <p className="subtitle">To get started you'll need an API key. They're free for development, open-source, and non-commercial use and you can get one over here.</p>
                        <p className="subtitle">Also, we're assuming you know how to make web requests in your chosen programming language. We've included some crude ways to do this in our examples below if you need a place to start. Alternatively, you can use one of our client libraries.</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

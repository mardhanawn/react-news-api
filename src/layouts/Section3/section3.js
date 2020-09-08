/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import 'animate.css'
import './style.css'
import IMAGES from '../../configs/images'

export default class Section3 extends React.Component {
    render() {
        return (
            <Container id="section" className="container-section">
                <Row className="d-flex flex-row-reverse">
                    <Col md="6" className="section-section animated fadeInLeft">
                        <Row>
                            <Col md="10">
                                <p className="title">Documentation</p>
                            </Col>
                        </Row>
                        <p className="subtitle">News API is a simple HTTP REST API for searching and retrieving live articles from all over the web. It can help you answer questions like:</p>
                        <p className="subtitle">What top stories is TechCrunch running right now? What new articles were published about the next iPhone today? Has my company or product been mentioned or reviewed by any blogs recently?</p>
                    </Col>
                    <Col md="6" className="animated fadeInRight">
                        <img src={IMAGES.landing} alt="" className="img-fluid mb-4" />
                    </Col>
                </Row>
            </Container>
        )
    }
}

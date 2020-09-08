import React, { Fragment } from 'react'
import { Container, Col, Row } from 'reactstrap'

import TopHeadlines from '../TopHeadlines'
import Everything from '../Everything'
import Sources from '../Sources'

import './style.css'

export default class News extends React.Component {
    render() {
        return(
            <Fragment >
                <Container fluid={true} className="container-news">
                    <Row>
                        <Col md="12" className="d-block text-center wow animated fadeInUp">
                            <p className="title">Let's start looking for news</p>
                        </Col>
                        <TopHeadlines />
                        <Everything />
                        <Sources />
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

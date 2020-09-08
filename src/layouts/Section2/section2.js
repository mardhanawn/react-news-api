import React, { Fragment } from 'react'
import { Container, Col, Row } from 'reactstrap'

import './style.css'

export default class Section2 extends React.Component {
    render() {
        return(
            <Fragment >
                <Container fluid={true} className="container-section">
                    <Row>
                        <Col md="12" className="d-block text-center wow animated fadeInUp">
                            <p className="title">News API v2 migration guide</p>
                        </Col>
                        <Col md={{ size: 6, offset: 3 }} className="d-block text-center wow animated fadeInUp">
                            <p className="subtitle">This guide will explain the differences between v1 and v2 of News API, and demonstrate how to migrate from v1 to v2 in the easiest way. v1 will remain operational for the foreseeable future, so if v1 fulfils your requirements then there's no urgent need to migrate.</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

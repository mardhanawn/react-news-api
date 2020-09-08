/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Container, Row, Col} from 'reactstrap'

import './style.css'
import './responsive.css'
import Facebook from '../../assets/svg/facebook.svg'
import Instagram from '../../assets/svg/instagram.svg'
import Twitter from '../../assets/svg/twitter.svg'

export default class Footer extends React.Component {
    render() {
        return (
        <Container fluid={true} className="footer-break footer-bg-blue">
            <Row>
                <Col md={{ size: 4, offset: 2 }}>
                    <Row>
                        <Col className="mb-5">
                            <p className="text-footer-title footer-footer">News API Website</p>
                            <p className="text-sub-title footer-footer">Created by Ardhana</p>
                            <hr className="break-footer-title" />
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Col xs="6" md="2">
                            <p className="footer-footer-title">API</p>
                            <ul className="footer-links">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Blog</a></li>
                            </ul>
                        </Col>
                        <Col xs="6" md="2">
                            <p className="footer-footer-title">Menu</p>
                            <ul className="footer-links">
                                <li><a href="#">Doc</a></li>
                                <li><a href="#">Started</a></li>
                                <li><a href="#">API</a></li>
                            </ul>
                        </Col>
                        <Col xs="6" md="2">
                            <p className="footer-footer-title">Policies</p>
                            <ul className="footer-links">
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Privacy</a></li>
                                {/* <li><a href="#">Gift Card</a></li> */}
                            </ul>
                        </Col>
                        <Col xs="6" md="2">
                            <p className="footer-footer-title">Social</p>
                            <ul className="social-icons">
                                <a href="#"><img src={Facebook} className="mr-3" alt="social-media" /></a>
                                <a href="#"><img src={Twitter} className="mr-3" alt="social-media" /></a>
                                <a href="#"><img src={Instagram} className="mr-3" alt="social-media" /></a>
                            </ul>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        )
    }
}

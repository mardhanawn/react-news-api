import React, { Fragment } from 'react'
import { Container, Col, Row } from 'reactstrap'

import './style.css'

export default class Sources extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        fetch('https://newsapi.org/v2/sources?category=technology&language=en&apiKey=88457320a96b44fc82c11e9c0f244ac5')
          .then(response => response.json())
          .then(data => this.setState({ items: data.sources }))
    }

    render() {
        const { items } = this.state

        return(
            <Fragment >
                <Container fluid={true} className="container-card-news">
                    <p className="title-news d-block text-center">Sources</p>
                    <div>
                        <ul>
                            { items.map((source) =>
                            <Col md={{ size: 7, offset: 2 }} className="card-news wow animated fadeInLeft" key={source.name}>
                                <Row className="align-items-center" style={{ padding: '2rem' }}>
                                    <Col md={{ size: 12 }}>
                                        <p className="title-card-news">
                                            <a href={source.url}>
                                                {source.name}
                                            </a>
                                        </p>
                                        <p className="subtitle">{source.description}</p>
                                    </Col>
                                </Row>
                            </Col> ) }
                        </ul>
                    </div>
                </Container>
            </Fragment>
        )
    }
}

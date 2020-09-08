import React, { Fragment } from 'react'
import { Container, Col, Row } from 'reactstrap'

import './style.css'

export default class TopHeadlines extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        fetch('https://newsapi.org/v2/top-headlines?country=us&pageSize=5&apiKey=88457320a96b44fc82c11e9c0f244ac5')
          .then(response => response.json())
          .then(data => this.setState({ items: data.articles }))
    }

    render() {
        const { items } = this.state

        return(
            <Fragment >
                <Container fluid={true} className="container-card-news">
                    <p className="title-news d-block text-center">Top Headings</p>
                    <div>
                        <ul>
                            { items.map((article) =>
                            <Col md={{ size: 7, offset: 2 }} className="card-news wow animated fadeInLeft" key={article.title}>
                                <Row className="align-items-center" style={{ padding: '2rem' }}>
                                    <Col md={{ size: 12 }}>
                                        <p className="title-card-news">
                                            <a href={article.url}>
                                                {article.title}
                                            </a>
                                        </p>
                                        <p className="subtitle-published">Author : {article.author}</p>
                                        <p className="subtitle">{article.description}</p>
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

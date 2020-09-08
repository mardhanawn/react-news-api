import React, { Fragment } from 'react'

import HeaderLanding from '../../layouts/HeaderLanding'
import Section1 from '../../layouts/Section1'
import Section2 from '../../layouts/Section2'
import Section3 from '../../layouts/Section3'
import News from '../../layouts/News'
import Footer from '../../layouts/Footer'

export default class LandingPage extends React.Component {
    render() {
        return (
            <Fragment>
                <HeaderLanding />
                <Section1 />
                <Section2 />
                <Section3 />
                <News />
                <Footer />
            </Fragment>
        )
    }
}

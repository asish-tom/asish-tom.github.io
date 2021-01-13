/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import Navbar from "./Navbar"
import "../styles/mains.scss"
import Footer from "./Footer";

class Layout extends React.Component {
    render() {
        return (
            <main>
                <Navbar/>
                {this.props.children}
                <Footer />
            </main>
        )
    }
}

export default Layout

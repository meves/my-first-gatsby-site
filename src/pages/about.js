import * as React from "react"
import Layout from "../components/layout"

const AboutPage = () => {
    return (
        <Layout pageTtitle="About Me">
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
        </Layout>
    )
}

export const Head = () => <title>About Page</title> 

export default AboutPage
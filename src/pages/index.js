import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <Layout pageTtitle="Welcome to my Gatsby site!">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        src="../images/dog.jpeg"
        alt='CliffordClifford, a reddish-brown pitbull, dozing in a bean bag chair'
      />
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage
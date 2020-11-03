import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <h1>{data.site.siteMetadata.title}</h1>
  </Layout>
)

export default IndexPage
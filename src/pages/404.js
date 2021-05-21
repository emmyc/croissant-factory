import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h2>lost?</h2>
    <p>
      we can't find this page — apologies from factory management. retrace your
      steps and try again!
    </p>
  </Layout>
)

export default NotFoundPage

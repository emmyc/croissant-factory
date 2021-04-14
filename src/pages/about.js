import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function About({ data }) {
  return (
    <Layout>
      <SEO title="About" />
      <div className="about section" id="about">
        <h2>
          <span
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-duration="700"
            data-sal-easing="ease-in-out"
          >
            About Me.
          </span>
        </h2>
        <p
          data-sal="slide-up"
          data-sal-delay="500"
          data-sal-duration="700"
          data-sal-easing="ease-in-out"
          className="about-text"
        >
          you are a prisoner in a croissant factory and you love it!
          texttexttext
        </p>
      </div>
    </Layout>
  )
}

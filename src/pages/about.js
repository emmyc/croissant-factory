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
            more?
          </span>
        </h2>
        <p
          data-sal="slide-up"
          data-sal-delay="500"
          data-sal-duration="700"
          data-sal-easing="ease-in-out"
          className="about-text"
        >
          some text will go here when i find it in me to write about myself, or i might just remove this section entirely.
          i love music, poems, art, and a lot of other things, like my friends! i have a lot of feelings that i don't know how to express so they'll probably go here 
        </p>
      </div>
    </Layout>
  )
}

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"
import TagComponent from "../components/TagComponent"
import SEO from "../components/seo"
import { FaExternalLinkAlt, FaGithubAlt } from "react-icons/fa"

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  let postCounter = 0
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[
          `emmy cao`,
          `emmycao`,
          `ucla`,
          `portfolio`,
          `ux designer`,
          `front end`,
          `developer`,
          `engineer`,
        ]}
      />
      <div className="landing">
        <h1
          data-sal="slide-up"
          data-sal-delay="200"
          data-sal-duration="700"
          data-sal-easing="ease-in-out"
        >
          <span >welcome to the
            <br></br> croissant factory</span>
        </h1>
        <h3
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-duration="700"
          data-sal-easing="ease-in-out"
        >
          <span className="white"><b>emmy cao</b></span> • 曹玉琦 • she/they
        </h3>
        <div
          data-sal="slide-up"
          data-sal-delay="500"
          data-sal-duration="700"
          data-sal-easing="ease-in-out">
          <p className="marginTop20">I'm Emmy; contrary to (un)popular belief, I am not the owner of a family-owned croissant factory. Currently taking some time to figure it out — I'm interested in equity in tech and education, and research on tech as a social phenomenon.</p>
          <p className="marginTop20">I've been a small piece of many things much bigger than me — some include engineering at Facebook and Amazon, leading Creative Labs UCLA, and developing codeConnects and Qubit by Qubit.</p>
        </div>

      </div>
      <div className="work"
        data-sal="slide-up"
        data-sal-delay="700"
        data-sal-duration="700"
        data-sal-easing="ease-in-out">
        <h2>experiences</h2>
        <div class="experience">
          <h3><span className="white">Facebook</span> • Frontend Engineer Intern • Fall 2020</h3>
          <p>man should i even do this</p>

        </div>
      </div>

    </Layout>
  )
}
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            url
            github
            path
            title
            description
            tags
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1360) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

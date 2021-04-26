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
          <p className="marginTop20">I'm Emmy; contrary to (un)popular belief, I am not the owner of a family-owned <a href="/croissant-factory">croissant factory</a>.
          Currently taking some time to figure things out — I'm interested in equity in tech and education, and research on tech as a social phenomenon.</p>
          <p className="marginTop20">In the past I've been a small piece of many things much bigger than me — some include engineering at
          <span className="white"> Facebook </span> and <span className="white">Amazon</span>,
          leading &nbsp;<a href="https://www.creativelabsucla.com/">Creative Labs UCLA</a>, and developing <a href="https://codeconnects.org/">codeConnects</a>
          &nbsp; and &nbsp;<a href="https://www.qubitbyqubit.org/">Qubit by Qubit</a>.</p>
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

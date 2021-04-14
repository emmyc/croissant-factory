import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/main.scss"

export default function Blog({ data }) {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <Layout>
      <SEO title="notebook" />
      <div className="blog section">
        <h2>
          <span
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-duration="700"
            data-sal-easing="ease-in-out"
          >
            notebook.
          </span>
        </h2>
        <h4>
          a blog? not quite.
          a collection? something like that
        </h4>

        <div className="blog-preview-container">
          {posts
            .filter(
              post =>
                post.node.frontmatter.title.length > 0 &&
                post.node.frontmatter.tags.includes("blog")
            )
            .map(({ node: post }) => {
              return (
                <div
                  className="blog-preview"
                  key={post.id}
                  data-sal="slide-up"
                  data-sal-delay="500"
                  data-sal-duration="700"
                  data-sal-easing="ease-in-out"
                >
                  <Link
                    to={post.frontmatter.path}
                    className="blog-preview-card"
                  >
                    <div>
                      <h3> {post.frontmatter.title} </h3>
                      <p> {post.frontmatter.date} </p>
                    </div>
                    <p>{post.frontmatter.description}</p>
                  </Link>
                </div>
              )
            })}
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query indexQueryAndIndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
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

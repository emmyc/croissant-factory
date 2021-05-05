import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/main.scss"

export default function Notebook({ data }) {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <Layout>
      <SEO title="notebook" />
      <div className="blog section">
        <div
          data-sal="slide-up"
          data-sal-delay="400"
          data-sal-duration="1000"
          data-sal-easing="ease-in-out"
          className="page-header">
          <h2>
            <span>
              emmy's notebook
          </span>
          </h2>
          <h4>
            a blog? not quite. <br></br>
            a collection? something like that.
        </h4>
        </div>
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
                  data-sal="slide-up"
                  data-sal-delay="800"
                  data-sal-duration="1000"
                  data-sal-easing="ease-in-out">
                  <div
                    className="post-container"
                    key={post.id}
                  >
                    <Link
                      to={post.frontmatter.path}
                      className="blog-preview-card"
                    >
                      <div class="post-details">
                        <p className="date-text"> {post.frontmatter.date} </p>
                        <h3> {post.frontmatter.title} </h3>
                        <p className="description-text">{post.frontmatter.description}</p>
                      </div>
                      {/* <div className="post-excerpt">
                      <p className="excerpt-text"> {post.excerpt}</p>
                    </div> */}
                    </Link>
                  </div>
                  <hr></hr>
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
          excerpt(pruneLength: 2000)
          wordCount {
            words
          }
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            description
            tags
          }
        }
      }
    }
  }
`

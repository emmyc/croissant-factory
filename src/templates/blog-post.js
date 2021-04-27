import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import "../styles/blog.scss"

export default function Template({
  data, // this prop will be injected by the GraphQL query we'll write in a bit
}) {
  const { markdownRemark: post } = data // data.markdownRemark holds your post data
  return (
    <Layout>
      <div className="blog-post-container">
        <Helmet title={`notebook | ${post.frontmatter.title}`} />
        <div className="blog-post">
          <h3>{post.frontmatter.date}</h3>
          <h1>{post.frontmatter.title}</h1>
          <h4>{post.frontmatter.intro}</h4>
          <hr></hr>
          {/* {post.frontmatter.audio !== null ? <audio controls><source src={post.frontmatter.audio} type="audio/mpeg"></source></audio> : null} */}
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        description
        intro
        tags
      }
    }
  }
`

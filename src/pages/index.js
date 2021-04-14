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
        <h3
          data-sal="slide-up"
          data-sal-delay="100"
          data-sal-duration="700"
          data-sal-easing="ease-in-out"
        >
          emmy cao
        </h3>
        <h1
          data-sal="slide-up"
          data-sal-delay="200"
          data-sal-duration="700"
          data-sal-easing="ease-in-out"
        >
          <span >prisoner in a <br></br>croissant factory</span>
        </h1>
        <h4
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-duration="700"
          data-sal-easing="ease-in-out"
        >
          曹玉琦 • she/they
        </h4>
        <p className="marginTop20">you might know me from creative labs ucla, but if not you should check them out</p>
        <p className="marginTop20">i graduated from ucla with a major in cognitive science in 2021.</p>
        <p>i used to do some software engineering and design,
        but now i'm taking some time to figure things out.
        </p>
      </div>
      {/* <div className="projects section" id="projects">
        <h2>
          <span
            className="underline"
            data-sal="slide-up"
            data-sal-delay="700"
            data-sal-duration="700"
            data-sal-easing="ease-in-out"
          >
            Projects
          </span>
        </h2>
        <div className="projects-container marginTop60">
          {posts
            .filter(
              post =>
                post.node.frontmatter.title.length > 0 &&
                !post.node.frontmatter.tags.includes("blog")
            )
            .map(({ node: post }) => {
              postCounter++
              return (
                <div
                  className="project"
                  key={post.id}
                  data-sal="slide-up"
                  data-sal-delay="100"
                  data-sal-duration="700"
                  data-sal-easing="ease-in-out"
                >
                  <div className="project-card" key={post.id}>
                    <div className="project-image">
                      {post.frontmatter.thumbnail && (
                        <img
                          src={
                            post.frontmatter.thumbnail.childImageSharp.fluid.src
                          }
                        />
                      )}
                    </div>
                  </div>
                  <div className="project-text">
                    <div className="project-title">
                      <h3> {post.frontmatter.title} </h3>
                      {post.frontmatter.url && (
                        <a href={post.frontmatter.url} className="project-icon">
                          <FaExternalLinkAlt />
                        </a>
                      )}
                      {post.frontmatter.github && (
                        <a
                          href={post.frontmatter.github}
                          className="project-icon"
                        >
                          <FaGithubAlt />
                        </a>
                      )}
                    </div>
                    <p>{post.frontmatter.description}</p>
                    <div className="tags-container">
                      {post.frontmatter.tags.map(tag => {
                        return <TagComponent tag={tag} key={tag} />
                      })}
                    </div>
                  </div>
                </div>
              )
            })} 
        </div>
      </div>*/}
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

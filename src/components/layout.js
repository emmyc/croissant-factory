/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "../styles/defaults.scss"
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 950,
        padding: `0px 1.0875rem 1.45rem`,
        paddingTop: 0,
      }}
    >
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <footer>
        <div className="footer-text" id="footer">
          {/* <h2>
            <span>Contact</span>
          </h2>
          <p>
            that's it folks, you can reach me at {" "}
            <a href="mailto:emmycao@g.ucla.edu">emmycao@g.ucla.edu</a>.
           
          </p> */}
        </div>
        {/* <div className="socials">
          <a href="mailto:emmycao@g.ucla.edu">
            <FaEnvelopeSquare className="social-icon" />
          </a>
          <a href="https://www.facebook.com/cosmocows">
            <FaFacebookSquare className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/emmycao">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="https://www.github.com/emmyc">
            <FaGithubSquare className="social-icon" />
          </a>
        </div> */}
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

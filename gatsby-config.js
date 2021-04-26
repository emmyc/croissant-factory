module.exports = {
  siteMetadata: {
    title: `welcome to the croissant factory`,
    description: `the website of emmy cao (she/they)`,
    author: `@emmyc`,
  },
  plugins: [
    "gatsby-plugin-catch-links",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-remark",
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}



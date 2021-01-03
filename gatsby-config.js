/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Andy's Portfolio",
    description: "This is me trying to build my site using Gatsby",
  },
  /* Your site config here */
  plugins: [`gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/projects`,
      },
    },
    `gatsby-transformer-remark`,
],
}

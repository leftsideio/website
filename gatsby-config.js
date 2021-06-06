const path = require("path")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `Leftside`,
    description: `The official website of leftside.io`,
    author: `leftside.io`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`montserrat\:400`, `orbitron\:700`],
        display: "swap",
      },
    },
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-svgr",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        "@": path.join(__dirname, "src/"),
        "#": path.join(__dirname, "static/"),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `leftside.io`,
        short_name: `leftside`,
        start_url: `/`,
        background_color: `#fcfcfc`,
        theme_color: `#fcfcfc`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.svg`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

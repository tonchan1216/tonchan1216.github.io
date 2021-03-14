/* eslint-disable @typescript-eslint/no-var-requires */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `portfolio tonchan`,
    description: `The personal website of tonchan1216`,
    author: `tonchan1216`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GitHub",
        fieldName: "github",
        url: "https://api.github.com/graphql",
        headers: {
          // Learn about environment variables: https://gatsby.dev/env-vars
          Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
        },
        // Additional options to pass to node-fetch
        fetchOptions: {},
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: "gatsby-source-graphcms",
      options: {
        // Your GraphCMS API endpoint. Available from your project settings.
        endpoint: process.env.GRAPHCMS_ENDPOINT,
        // A PAT (Permanent Auth Token) for your project. Required if your project is not available publicly, or you want to scope access to a specific content stage (i.e. draft content).
        token: process.env.GRAPHCMS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-source-qiita`,
      options: {
        accessToken: process.env.QIITA_ACCESS_TOKEN,
        userName: process.env.QIITA_USERNAME,
        // (optional)
        // Default is false.
        fetchPrivate: false,
        // (optional)
        // String Array.
        // Default is [].
        excludedPostIds: [],
      },
    },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://zenn.dev/tonchan1216/feed`,
        name: `Zenn`,
        // Optional
        // Read parser document: https://github.com/bobby-brennan/rss-parser#readme
        // parserOption: {
        // customFields: {
        // item: ["itunes:duration"],
        // },
        // },
      },
    },
  ],
}

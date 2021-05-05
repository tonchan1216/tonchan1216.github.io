/* eslint-disable @typescript-eslint/no-var-requires */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `portfolio tonchan`,
    description: `The personal website of tonchan1216`,
    author: `tonchan1216`,
    lang: `ja`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet-async`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The personal website of tonchan1216`,
        short_name: `portfolio tonchan`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
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
    {
      resolve: `gatsby-plugin-sass`,
      // options: {
      // outputStyle: "compressed", // nested, expanded, compact, compressed,
      // },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [process.env.GA_ID],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        // gtagConfig: {
        // optimize_id: "OPT_CONTAINER_ID",
        // anonymize_ip: true,
        // cookie_expires: 0,
        // },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/404/**"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        // ignore: [], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
        purgeCSSOptions: {
          // https://purgecss.com/configuration.html#options
          // safelist: [], // Don't remove this selector
        },
      },
    },
    {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: "static",
      },
    },
  ],
}

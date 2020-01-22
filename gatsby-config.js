require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'Travel Corp.',
    description:
      'Explore awesome worldwide tours. Enjoy your holidays in unique ways.',
    author: 'John Doe',
    twitterUsername: '@john_doe',
    image: '/defaultBcg.jpeg',
    siteUrl: 'https://gatsby-travel-company-website.netlify.com',
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://gatsby-travel-company-website.netlify.com',
        sitemap:
          'https://gatsby-travel-company-website.netlify.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
  ],
}

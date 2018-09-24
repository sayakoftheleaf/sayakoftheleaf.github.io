module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `open sans\:300,600`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "<your-tracking-id-here>",
        head: true
      }
    },
  ],
  siteMetadata: {
    title: 'Sayak Chatterjee',
    description: 'Full stack devloper and android engineer',
    keywords: 'full stack, web developer, developer, android, android enginner, portfolio, personal website',
    url: 'https://www.absurdist.life'
  }
};

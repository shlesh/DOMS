module.exports = {
  siteMetadata: {
    title: `Department of Management Studies, IIIT Allahabad`,
    siteUrl: `https://mba.iiita.ac.in`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Department of Management Studies, IIIT Allahabad`,
        short_name: `DoMS`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: 'src/assets/favicon.png',
      },
    },
    {
      resolve: `gatsby-plugin-netlify-functions`,
      options: {
        functionsSrc: `${__dirname}/src/functions`,
        functionsOutput: `${__dirname}/functions`,
      },
    }, 
  ],
};

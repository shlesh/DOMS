module.exports = {
  siteMetadata: {
    title: `Department of Management Studies, IIIT Allahabad`,
    description: `Example project for the Gatsby Head API`,
    siteUrl: `https://mba.iiita.ac.in`,
    image: `/gatsby-icon.png`,
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
        icon: 'src/assets/logo.png',
      },
    },
  ],
};

module.exports = {
  // plugins: ['gatsby-plugin-mantine'],
  siteMetadata: {
    title: 'Quan',
    description: 'This is my personal site template.',
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Quicksand`,
            file: `https://fonts.googleapis.com/css2?family=Quicksand&display=swap`,
          },
          {
            name: `Dancing Script`,
            file: `https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap`,
          },
        ],
      },
    },
  ],
};

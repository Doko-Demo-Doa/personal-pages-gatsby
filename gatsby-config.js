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
  ],
};

module.exports = {
  siteMetadata: {
    title: 'Alvaro Medina',
    author: 'Alvaro Medina',
    description:
      'Sitio web en el que muestro mis habilidades en React y el futuro de este en mi carrera',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#000',
        theme_color: '#000',
        display: 'minimal-ui',
        icon: 'src/images/yoAlvaro.jpeg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}

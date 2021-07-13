module.exports = {
  plugins: ['gatsby-plugin-postcss', 'gatsby-plugin-dark-mode', 'gatsby-plugin-react-helmet'],
};

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

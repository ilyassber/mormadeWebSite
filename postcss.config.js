const plugins = {
  'tailwindcss': {},
  'autoprefixer': {},
}

if (process.env.NODE_ENV === 'production') {
  
  plugins['@fullhuman/postcss-purgecss'] = {
    content: [
      'pages/**/*.js',
      'pages/*.js',
      'components/**/**/*.js',
      'components/**/*.js',
      'components/*.js',
    ],
    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
  }
}
  
module.exports = {
  plugins,
}

  /*
  require("tailwindcss"),
  require("autoprefixer"),
  'tailwindcss',
  'autoprefixer',
  */
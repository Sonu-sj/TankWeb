var express = require("express");
var path = require('path');
var compression = require('compression')

var app = express();
app.use(compression());
app.use(express.static(__dirname + "/public"));

if (app.get('env') === 'development') {
  var webpackMiddleware = require("webpack-dev-middleware");
  var webpack = require('webpack');

  var config = require('./webpack.config');

  app.use(webpackMiddleware(webpack(config), {
    publicPath: "/public",

    headers: { "X-Custom-Webpack-Header": "yes" },

    stats: {
      colors: true
    }
  }));
}

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public','index.html'))
})

var PORT = process.env.PORT || 3000
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})
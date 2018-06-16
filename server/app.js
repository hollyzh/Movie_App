// LOAD ENV VARIABLES
require('dotenv').config({silent: true});

// CONSTANTS
const PORT = process.env.PORT || 8000;
const MONGO_URI='mongodb://localhost/movieApidb';

// PACKAGE REQUIRES
const express = require('express')
const morgan = require('morgan')
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const path = require('path')
const mongoose = require('mongoose');
mongoose.Promise = Promise;
// const cors = require('cors')
// require('dotenv').load()
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('../webpack.config')

// DB CONNECT
mongoose.connect(MONGO_URI, err => {
  console.log(err || `MongoDb connected to ${MONGO_URI}`);
})

// APP DECLARATION
const app = express();

// MIDDLEWARE
app.use(morgan('dev'))
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))
app.use(express.static('src'))
app.use(cookieParser())
// app.use(cors())
app.use((req, res, next) => {
  res.handle = (err, data) => res.status(err ? 400 : 200).send(err || data)
  next()
})

// WEBPACK CONFIGURATION
const compiler = webpack(webpackConfig)
app.use(webpackDevMiddleware(compiler, { publicPath: webpackConfig.output.publicPath, noInfo: true }))
app.use(webpackHotMiddleware(compiler))

// ROUTES
app.use('/api', require('./routes/api'))
app.use('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'))
})

// SERVER LISTEN
app.listen(PORT, (err) => {
  if (err) throw err;
  process.stdout.write(`Server listening at http://localhost:${PORT}`);
});

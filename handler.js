const serverless = require('serverless-http');
const express = require('express');
const aws = require('aws-sdk');
const logger = require('morgan')('dev');
const cors = require('cors');

require('dotenv').config({
  path: `./env/${process.env.NODE_ENV}.env`
});

const app = express();

const routes = require('./routes');

aws.config.logger = logger;
app.use(logger);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use('/', routes);

module.exports.handler = serverless(app);

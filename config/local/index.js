'use strict';
const setting = require('./setting');
const cache = require('./cache');
const app = require('./app');
module.exports = Object.assign({},
    app,
    cache,
    setting,
);
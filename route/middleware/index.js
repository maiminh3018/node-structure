'use strict';
const verify_token = require('./verify_token');
const verify_backend = require('./verify_admin');
/** Require middleware at here **/
const test = require('./test');

module.exports = {
    verify_token,
    verify_backend,

    /** Register Middleware at here **/
    test,

};
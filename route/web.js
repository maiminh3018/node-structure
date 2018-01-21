'use strict';
const middleware = require('./middleware');
const http = require('../app/http/web');
const express = require('express');
const app = express();
const router = express.Router();

router.use((req, res, next) => {
    middleware.test();
});
/*
 |--------------------------------------------------------------------------
 | Đăng ký route WEB
 |--------------------------------------------------------------------------
 |
 | Đăng kí route WEB tại đây.
 */

router.get('/', (req, res, next) => {
    http.admin.get();
    console.log('/web');
    next();
});
module.exports = router;
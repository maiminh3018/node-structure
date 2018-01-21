'use strict';
const middleware = require('./middleware');
const http = require('../app/http/api');
const express = require('express');
const app = express();
const router = express.Router();

router.use((req, res, next) => {
    middleware.verify_token(req, res, next);
});
/*
 |--------------------------------------------------------------------------
 | Đăng ký route API
 |--------------------------------------------------------------------------
 |
 | Đăng kí route API tại đây.
 | Thông thường route API trả dữ liệu thông qua response tại phần app,
 | do vậy việc gọi next() sẽ gây ra lỗi.
 */

router.get('/test1', (req, res) => {
    http.user.test1(req, res);
});
router.get('/test2', (req, res) => {
    http.user.test2(req, res);
});

module.exports = router;
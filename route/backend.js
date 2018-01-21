'use strict';
const middleware = require('./middleware');
const http = require('../app/http/backend');
const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    middleware.verify_backend(req, res, next);
    // Đăng kí middleware backend tại đây
    middleware.test();
});
/*
 |--------------------------------------------------------------------------
 | Đăng ký route backend
 |--------------------------------------------------------------------------
 |
 | Đăng kí route backend tại đây.
 */
router.get('/dashboard', (req, res, next) => {
    http.admin.get();
    console.log('/admin');
    next();
});





module.exports = router;
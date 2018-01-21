'use strict';
const api = require('./api');
const backend = require('./backend');
const web = require('./web');
const express = require('express');
const app = express();

app.use('/', web);
app.use('/api', api);
app.use('/admin', backend);

app.listen(process.env.APP_PORT, (err) => {
    console.log('Initialed Server at port ' + process.env.APP_PORT);
});
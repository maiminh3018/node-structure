const mysql = require('mysql');
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    localAddress: process.env.LOCAL_DOMAIN,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

exports.connection = connection;
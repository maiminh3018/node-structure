const jwt = require('jsonwebtoken');
const fs = require('fs');
const db = require('../../model/mysql');
const lib = require(CONFIG.app.lib_db_path);
// console.log(NODE_PATH)
// db.query('select * from ? where name != ',['1'], (error, results, fields) => {
//     if (error) throw error;
//     console.log(results);
// });
lib.all('jjob_users').then((data) => {
    console.log(data);
}, (error) => {
    console.log(error);
});


function handle(req, res, next) {
    const authorization = req.header('Authorization');
    if (authorization) {
        const token = authorization.replace(/(bearer) /i, '');
        const public_key = fs.readFileSync(process.env.OAUTH_PUBLIC_PATH);
        jwt.verify(token, public_key, {algorithms: ['RS256']}, (err, decoded) => {
            if (err) {
                res.sendStatus(401);
            } else {
                const token = decoded.jti;
                console.log(token + ' ' + decoded.jti);
                console.log(db);
                //TODO verify token here
                next();
            }
        });
    } else {
        res.sendStatus(401);
    }
}
module.exports = handle;
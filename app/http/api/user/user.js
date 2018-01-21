const db = require('../connection');
const q = require('q');

function test1(req ,res) {
    console.log('test1');
    res.sendStatus(200);
}
function test2(req, res) {
    db.query('SELECT * FROM jjob_users limit 3', (error, results, fields) => {
        if (error) throw error;
        let data = {};
        console.log('Connected!');
        results.forEach((v, k) => {
            // console.log(k + '-' + v.email);
            data[k] = v;
        });
        res.send(data);
    })
}

module.exports = {
    test1,
    test2
};
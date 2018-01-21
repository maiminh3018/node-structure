const db = require('../model/mysql');
const q = require('q');

function all(table, column = ['*']) {
    let defer = q.defer();
    let query = `select ${column.toString()} from ${table}`;
    db.query(query, (error, results, fields) => {
        if (error) defer.reject(error);
        defer.resolve(results);
    });
    return defer.promise;
}

function innerJoin(table1, table2, condition1, operator = '=', condition2, where_condition = 1, column = ['*'], orderBy = 'asc') {
    let defer = q.defer();
    // let select, from, escaped, condition1, condition2, operator, whereCondition, order;
    // select = column.toString();
    escaped = [where_condition];
    let query = `select ${column.toString()} 
                    from ${table1} 
                    inner join ${table2} 
                    on ${condition1} ${operator} ${condition2} 
                    where ? 
                    order by ${orderBy}`;
    db.query(query, escaped, (error, results, fields) => {
        if (error) defer.reject(error);
        defer.resolve(results);
    });
    return defer.promise;
}

function leftJoin(table1, table2, condition1, condition2) {

}

function rightJoin(table1, table2, condition1, condition2) {

}


module.exports = {
    all: all
};
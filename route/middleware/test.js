'use strict';

function test(option) {
    if (option) {
        console.log('option param: ' + option);
    } else {
        console.log('test output');
    }
}

module.exports = test;
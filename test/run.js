'use strict';

// It's a hack to use this here so eval will see it.
var scrab = require('../lib/scrab.js');

module.exports = function run(fn) {

    var body, i;

    body = fn.toString().replace(/^function \(\) {([\s\S]*)}$/,
        function (match, body) {
            return body;
        });

    console.log(body);

    for (i = 0; i < 3; i++) {
        console.log(' => ' + eval(body));
    }

    console.log('');

};

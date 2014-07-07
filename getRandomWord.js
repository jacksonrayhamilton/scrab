'use strict';

var _ = require('lodash'),
    properCase = require('./properCase'),
    dictionary = require('./dictionary');

module.exports = function getRandomWord(options) {

    var ret;

    options = options || {};

    ret = dictionary[_.random(0, dictionary.length - 1)];

    if (options.properize) {
        ret = properCase(ret);
    }

    return ret;
};

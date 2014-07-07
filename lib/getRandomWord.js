'use strict';

var _ = require('lodash'),
    properCase = require('./properCase'),
    dictionary = require('./dictionary'),
    prepositions = require('prepositions');

module.exports = function getRandomWord(options) {

    var ret;

    options = options || {};

    if (options.preposition) {
        ret = prepositions[_.random(0, prepositions.length - 1)];
    } else {
        ret = dictionary[_.random(0, dictionary.length - 1)];
    }

    if (options.properize) {
        ret = properCase(ret);
    }

    return ret;
};

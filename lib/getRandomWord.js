'use strict';

var _ = require('lodash'),
    properCase = require('./properCase'),
    dictionary = require('./dictionary.json'),
    prepositions = require('./prepositions.json'),
    conjunctions = require('./conjunctions.json');

function getRandomElement(array) {
    return array[_.random(0, array.length - 1)];
}

module.exports = function getRandomWord(options) {

    var ret;

    options = options || {};

    if (options.preposition) {
        ret = getRandomElement(prepositions);
    } else if (options.conjunction) {
        ret = getRandomElement(conjunctions);
    } else {
        ret = getRandomElement(dictionary);
    }

    if (options.properize) {
        ret = properCase(ret);
    }

    return ret;
};

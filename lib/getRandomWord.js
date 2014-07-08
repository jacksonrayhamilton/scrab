'use strict';

var _ = require('lodash'),
    getRandomElement = require('./getRandomElement'),
    scream = require('./scream'),
    capitalize = require('./capitalize'),
    dictionary = require('./dictionary.json'),
    prepositions = require('./prepositions.json'),
    conjunctions = require('./conjunctions.json'),
    defaults;

defaults = {
    capitalize: false,
    scream: false
};

module.exports = function getRandomWord(options) {

    var word;

    options = _.extend({}, defaults, options || {});

    if (options.preposition) {
        word = getRandomElement(prepositions);
    } else if (options.conjunction) {
        word = getRandomElement(conjunctions);
    } else {
        word = getRandomElement(dictionary);
    }

    if (options.scream) {
        word = scream(word);
    } else if (options.capitalize) {
        word = capitalize(word);
    }

    return word;

};

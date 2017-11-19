'use strict';

var _ = require('lodash'),
    getRandomElement = require('./getRandomElement'),
    scream = require('./scream'),
    capitalize = require('./capitalize'),
    wordlist = require('wordlist-english'),
    prepositions = require('./prepositions.json'),
    conjunctions = require('./conjunctions.json'),
    dictionary,
    defaults;

dictionary = {
    common: [].concat(
        wordlist['english/10']
    ),
    lesser: [].concat(
        wordlist['english/20'],
        wordlist['english/35']
    ),
    least: [].concat(
        wordlist['english/40'],
        wordlist['english/50']
    )
};

defaults = {
    capitalize: false,
    scream: false
};

module.exports = function getRandomWord(options) {

    var word, roll;

    options = _.extend({}, defaults, options || {});

    if (options.preposition) {
        word = getRandomElement(prepositions);
    } else if (options.conjunction) {
        word = getRandomElement(conjunctions);
    } else {
        roll = _.random(0, 99);
        if (roll === 99) {
            word = getRandomElement(dictionary.least);
        } else if (roll >= 90) {
            word = getRandomElement(dictionary.lesser);
        } else {
            word = getRandomElement(dictionary.common);
        }
    }

    if (options.scream) {
        word = scream(word);
    } else if (options.capitalize) {
        word = capitalize(word);
    }

    return word;

};

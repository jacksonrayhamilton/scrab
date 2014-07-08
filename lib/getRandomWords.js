'use strict';

var _ = require('lodash'),
    capitalize = require('./capitalize'),
    getRandomWord = require('./getRandomWord'),
    defaults;

defaults = {
    min: 2,
    max: 8,
    capitalizeFirst: false,
    sentence: false
};

module.exports = function getRandomWords(options) {

    var numWords, wordOptions, words, i, preposition, conjunction;

    if (typeof options === 'number') {
        numWords = options;
        wordOptions = {};
    } else {
        options = _.extend({}, defaults, options || {});
        wordOptions = options;
        numWords = _.random(options.min, options.max);
    }

    words = [];

    for (i = 0; i < numWords; i++) {

        if (options.sentence) {
            switch (_.random(0, 11)) {
            case 5:
                preposition = true;
                break;
            case 11:
                conjunction = true;
            }
        }

        if (options.prepositions !== undefined) {
            preposition = options.prepositions;
        }

        if (options.conjunctions !== undefined) {
            conjunction = options.conjunctions;
        }

        words.push(getRandomWord(_.extend({
            preposition: preposition,
            conjunction: conjunction
        }, wordOptions)));

    }

    if (typeof options === 'number') {
        return words;
    }

    if (options.capitalizeFirst) {
        if (words.length > 0) {
            words[0] = capitalize(words[0]);
        }
    }

    return words;
};

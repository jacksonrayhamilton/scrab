'use strict';

var _ = require('lodash'),
    properCase = require('./properCase'),
    getRandomWord = require('./getRandomWord');

module.exports = function getRandomSentence(options) {

    var min, max, numWords, i, words, ret;

    options = options || {};

    min = options.min;
    max = options.max;

    if (min === undefined && max === undefined) {
        min = 2;
        max = 9;
    } else if (min === undefined ^ max === undefined) {
        throw new Error(
            'min and max must be both defined, else neither defined');
    } else if (min < 0 || max < 0 || min > max) {
        throw new Error('min or max cannot be less than 0');
    } else if (min > max) {
        throw new Error('min cannot be greater than max');
    }

    numWords = _.random(min, max);

    words = [];
    for (i = 0; i < numWords; i++) {
        words.push(getRandomWord());
    }

    if (words.length === 0) {
        return '';
    }

    if (options.properize) {
        words = words.map(properCase);
    } else if (options.punctuate !== false) {
        if (words[0]) {
            words[0] = properCase(words[0]);
        }
    }

    ret = words.join(' ');

    if (options.punctuate !== false) {
        ret += '.';
    }

    return ret;
};

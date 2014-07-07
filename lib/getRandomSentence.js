'use strict';

var _ = require('lodash'),
    properCase = require('./properCase'),
    getRandomWord = require('./getRandomWord');

function maybeGetSeparator() {
    if (_.random(0, 5) === 5) {
        return [':', ';', ','][_.random(0, 2)];
    }
    return '';
}

function maybeTrueIf(condition) {
    return (condition && _.random(0, 3) === 3) ? true : false;
}

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
        words.push(getRandomWord({
            preposition: maybeTrueIf(options.prepositions !== false),
            conjunction: maybeTrueIf(options.conjunctions !== false),
        }));
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

    if (options.separate) {
        ret = words.reduce(function (soFar, word) {
            return soFar + maybeGetSeparator() + ' ' + word;
        });
    } else {
        ret = words.join(' ');
    }

    if (options.punctuate !== false) {
        ret += '.';
    }

    return ret;
};

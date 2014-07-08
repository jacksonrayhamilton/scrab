'use strict';

var _ = require('lodash'),
    getRandomPunctuation = require('./getRandomPunctuation'),
    getRandomWords = require('./getRandomWords'),
    defaults;

function maybeGetSeparator() {
    if (_.random(0, 5) === 5) {
        return getRandomPunctuation({
            middle: true
        });
    }
    return '';
}

defaults = {
    capitalizeFirst: true,
    punctuate: true,
    sentence: true
};

module.exports = function getRandomSentence(options) {

    var words, sentence;

    options = _.extend({}, defaults, options || {});

    words = getRandomWords(options);

    if (options.punctuate) {
        sentence = words.reduce(function (soFar, word) {
            return soFar + maybeGetSeparator() + ' ' + word;
        });
    } else {
        sentence = words.join(' ');
    }

    if (options.punctuate) {
        sentence += options.scream ? '!!!' : getRandomPunctuation({
            end: true
        });
    }

    return sentence;

};

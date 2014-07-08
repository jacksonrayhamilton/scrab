'use strict';

var getRandomElement = require('./getRandomElement'),
    middles, ends, all;

middles = [':', ';', ','];
ends = ['.', '!', '?'];
all = middles.concat(ends);

module.exports = function getRandomPunctuation(options) {
    if (options.middle) {
        return getRandomElement(middles);
    } else if (options.end) {
        return getRandomElement(ends);
    }
    return getRandomElement(all);
};

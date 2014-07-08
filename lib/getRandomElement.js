'use strict';

var _ = require('lodash');

module.exports = function getRandomElement(array) {
    return array[_.random(0, array.length - 1)];
};

'use strict';

module.exports = function random(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
};

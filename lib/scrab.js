var getRandomWord = require('./getRandomWord'),
    getRandomWords = require('./getRandomWords'),
    getRandomSentence = require('./getRandomSentence'),
    capitalize = require('./capitalize'),
    scream = require('./scream');

module.exports = {
    word: getRandomWord,
    words: getRandomWords,
    sentence: getRandomSentence,
    filters: {
        capitalize: capitalize,
        scream: scream
    }
};

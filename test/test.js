// These are tests! Really, I swear!

var scrab = require('../scrab.js'),
    i;

for (i = 0; i < 3; i++) {
    console.log(scrab.getRandomWord());
}

for (i = 0; i < 3; i++) {
    console.log(scrab.getRandomWord({
        properize: true
    }));
}

for (i = 0; i < 3; i++) {
    console.log(scrab.getRandomSentence());
}

for (i = 0; i < 3; i++) {
    console.log(scrab.getRandomSentence({
        min: 2,
        max: 3,
        punctuate: false,
        properize: true
    }));
}

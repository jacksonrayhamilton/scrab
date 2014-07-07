// These are tests! Really, I swear!

var scrab = require('../lib/scrab.js'),
    i;

for (i = 0; i < 3; i++) {
    console.log(scrab.word());
}

for (i = 0; i < 3; i++) {
    console.log(scrab.word({
        properize: true
    }));
}

for (i = 0; i < 3; i++) {
    console.log(scrab.sentence());
}

for (i = 0; i < 3; i++) {
    console.log(scrab.sentence({
        min: 2,
        max: 3,
        punctuate: false,
        properize: true
    }));
}

for (i = 0; i < 3; i++) {
    console.log(scrab.sentence({
        separate: true
    }));
}

for (i = 0; i < 3; i++) {
    console.log(scrab.sentence({
        prepositions: false,
        conjunctions: false
    }));
}

# scrab

A random word and sentence generation utility.

Usage:

```bash
npm install --save scrab
```

```javascript
var scrab = require('scrab');

console.log('My favorite word of all time is "' + scrab.word() + '".');
// => My favorite word of all time is "interpretation".

scrab.word({
    preposition: true
});
// => "off"
// => "down"

scrab.word({
    conjunction: true
});
// => "so"
// => "and"

// Capitalize the first letter of random words.
scrab.word({
    capitalize: true
});
// => "Contact"

// Get a bunch of random words.
scrab.words();
// => ["secret", "senility", "bedside", "corrupting", "was", "indicates"]

// Get totally random sentences.
scrab.sentence();
// => "Significance including budget; creates because where?"
// => "Bed perform justify emergency!""
// => "Lay: his; matter after while until.""

// Get sentences with specific criteria.
scrab.sentence({
    min: 2,
    max: 3,
    capitalize: true,
    punctuate: false
});
// => "Incline Supposedly Books"

// SCREAM!!!
scrab.sentence({
    scream: true
});
// => GRANTED DRUNKS; THEMSELVES DISCUSSES!!!
// => REPRODUCE LIMITED PROGRESSIVE SAVES, CONCRETE DOPING!!!
```

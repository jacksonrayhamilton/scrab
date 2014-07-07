# scrab

A random word and sentence generation utility.

Usage:

```bash
npm install --save scrab
```

```javascript
var scrab = require('scrab');

console.log('My favorite word of all time is "' + scrab.getRandomWord() + '".');
// => My favorite word of all time is "abcoulombs".

scrab.getRandomWord({
    preposition: true
});
// => "between"
// => "from"

scrab.getRandomWord({
    conjunction: true
});
// => "but"
// => "nor"

// Capitalize the first letter of random words.
scrab.getRandomWord({
    properize: true
});
// => "Orange"

// Get totally random sentences.
scrab.getRandomSentence();
// => "Unambivalently soapsudsy unisonant aduncous allotting axions deliciousness until agitates."

// Get sentences with specific criteria.
scrab.getRandomSentence({
    min: 2,
    max: 3,
    punctuate: false,
    properize: true
});
// => "Pitifullest Vaudevillians Hansom"

// Even include random grammar-things.
scrab.getRandomSentence({
    separate: true
});
// => "Though while prepurchases, verismos since: earlap; whimsied."

// Or do away with logic completely.
scrab.getRandomSentence({
    prepositions: false,
    conjunctions: false
});
// => "Fuglemen midlife frustratingly shtetl ferry."
```

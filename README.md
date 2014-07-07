# scrab

A random word and sentence generation utility.

Usage:

```bash
npm install --save scrab
```

```javascript
var scrab = require('scrab');

console.log('My favorite word of all time is "' + scrab.word() + '".');
// => My favorite word of all time is "abcoulombs".

scrab.word({
    preposition: true
});
// => "between"
// => "from"

scrab.word({
    conjunction: true
});
// => "but"
// => "nor"

// Capitalize the first letter of random words.
scrab.word({
    properize: true
});
// => "Orange"

// Get totally random sentences.
scrab.sentence();
// => "Unambivalently soapsudsy unisonant aduncous allotting axions deliciousness until agitates."

// Get sentences with specific criteria.
scrab.sentence({
    min: 2,
    max: 3,
    punctuate: false,
    properize: true
});
// => "Pitifullest Vaudevillians Hansom"

// Even include random grammar-things.
scrab.sentence({
    separate: true
});
// => "Though while prepurchases, verismos since: earlap; whimsied."

// Or do away with logic completely.
scrab.sentence({
    prepositions: false,
    conjunctions: false
});
// => "Fuglemen midlife frustratingly shtetl ferry."
```

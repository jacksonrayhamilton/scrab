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

// Capitalize the first letter of random words.
scrab.getRandomWord({
    properize: true
});
// => "Orange"

// Get totally random sentences.
scrab.getRandomSentence();
// => "Afterpieces nonvital gothicized spermatophyte coelenterate wardens."

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
// => "Pyrolyzed precipices: humbugged, reinstalls, uralites mortgager; hound achieved."
```

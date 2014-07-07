# scrab

And random word and sentence generation utility.

Usage:

```bash
npm install --save scrab
```

```javascript
var scrab = require('scrab');

console.log('My favorite word of all time is "' + scrab.getRandomWord() + '".');
// => My favorite word of all time is "abcoulombs".

// Capitalize the first letter of the word.
scrab.getRandomWord({
    properize: true
});
// => "Orange"

// Get a random sentence.
scrab.getRandomSentence();
// => "Afterpieces nonvital gothicized spermatophyte coelenterate wardens."

// Get a setence with specific criteria.
scrab.getRandomSentence({
    min: 2,
    max: 9,
    punctuate: false,
    properize: true
});
// => "Pitifullest Vaudevillians Hansom"
```

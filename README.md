# scrab

A random word and sentence generation utility.

Usage:

```bash
npm install --save scrab
```

```javascript
var scrab = require('scrab');

console.log('My favorite word of all time is "' + scrab.word() + '".');
// => My favorite word of all time is "aristocrat".

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
// => "Arsenal"

// Get a bunch of random words.
scrab.words();
// => ["conveyable", "rattlings", "Marlowe", "indemnify"]

// Get totally random sentences.
scrab.sentence();
// => "Godliness outside excluding across; beyond before, among; beyond!"
// => "Evocation, shrillness; rioters, Katy honeycombs?"
// => "Krupp overclocking topdressings above."
// => "Unregulated installer thermoplastic wiggly lipreader?"

// Get sentences with specific criteria.
scrab.sentence({
    min: 2,
    max: 3,
    capitalize: true,
    punctuate: false
});
// => "Pitifullest Vaudevillians Hansom"

// SCREAM!!!
scrab.sentence({
    scream: true
});
// => FLATT WINTER AFTER SO!!!
// => EMBLEMATIC EXTERNALIZE TWISTY; POLYANDRY: TO OFF ABOARD!!!
```

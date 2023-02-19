// Count words in a string
'use strict'

const Words = (s) => {

  let wordsInS = 0;

  if (s === '') return wordsInS;

  if (s.length > 1) wordsInS++;

  for (const c of s) {

      if (c === ' ') wordsInS++

  }

  return wordsInS;
};

require('../Tests/words.js')(Words);

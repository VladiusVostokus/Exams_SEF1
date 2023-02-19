// Count words in a string

Words = (s) => {

  wordsInS = 0;

  if (s === '') return wordsInS;

  if (s.length > 1) wordsInS++;

  for (c of s) {

      if (c === ' ') wordsInS++
      
  }

  return wordsInS;
};

require('../Tests/words.js')(Words);

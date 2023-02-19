// Count words in a string
'use strict'

const Words = (arrayOfWords) => {

  if (arrayOfWords.length === 0) return 0;
  
  const str = arrayOfWords.split(' ');

  const countOfWords = str.length;

  return countOfWords;

};

require('../Tests/words.js')(Words);

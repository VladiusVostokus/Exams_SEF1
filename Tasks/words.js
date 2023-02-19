// Count words in a string
'use strict'

const Words = (s) => {

  if (s.length === 0) return 0;
  
  const str = s.split(' ');

  return str.length;
  
};

require('../Tests/words.js')(Words);

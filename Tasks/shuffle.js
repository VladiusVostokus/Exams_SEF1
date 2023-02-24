// Shuffle an array
'use strict'

const shuffle = (...List) => {

  const [arr] = List;

  arr.sort(() => Math.random());

  return arr;
  
};

require('../Tests/shuffle.js')(shuffle);

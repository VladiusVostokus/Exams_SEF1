// Shuffle an array
'use strict'

const shuffle = (List) => {

  const arr = [...List];

  const fn = () => Math.random();

  arr.sort(fn);

  return arr;
  
};

require('../Tests/shuffle.js')(shuffle);

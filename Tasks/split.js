// Split an array into two parts
'use strict'

const splitArray = (index, array) => {

  const begin = array.slice(0, index);

  const len = array.length;

  const arr = array.slice(index, len);

  return [begin, arr];

};

require('../Tests/split.js')(splitArray);

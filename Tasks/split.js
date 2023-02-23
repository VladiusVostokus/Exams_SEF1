// Split an array into two parts
'use strict'

const splitArray = (index, array) => {

  const arr1 = array.slice(0, index);

  const len = array.length

  const arr2 = array.slice(index, len);

  return [arr1, arr2];

};

require('../Tests/split.js')(splitArray);

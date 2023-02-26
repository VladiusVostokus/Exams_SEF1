// Get one random element from an array
'use strict';

const sample = (arr) => {

  const max = arr.length - 1;

  const element = Math.floor((Math.random() * max));

  const result = arr[element];

  return result;

};

require('../Tests/sample.js')(sample);

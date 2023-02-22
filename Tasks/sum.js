// Sum all numbers from an array
'use strict'

const sum = (arr) => {

  if (arr.length === 0) return 0;
  let newSum = 0;

  for (const elem of arr) {

    if (typeof elem === 'number') {

      newSum += elem;

    }
  }

  return newSum;
  
};

require('../Tests/sum.js')(sum);

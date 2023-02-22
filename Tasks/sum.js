// Sum all numbers from an array
'use strict'

const sum = (s) => {

  if (s.length === 0) return 0;
  let newSum = 0;

  for (const i of s) {

    if (typeof i === 'number') {

      newSum += i;

    }
  }

  return newSum;
  
};

require('../Tests/sum.js')(sum);

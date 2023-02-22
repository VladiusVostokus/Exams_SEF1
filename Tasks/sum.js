// Sum all numbers from an array
'use strict'

const sum = (s) => {

  if (s.length === 0) return 0;

  const ssum = [0];

  for (const i of s) {

    let t = typeof i;

    if (t === 'number') {

      const new_Sum = ssum[ssum.length - 1] + i;
      ssum.push(new_Sum);

    }
  }

  return ssum[ssum.length - 1];
  
};

require('../Tests/sum.js')(sum);

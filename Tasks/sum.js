// Sum all numbers from an array

const sum = (s = {}) => {

  ssum = [0];
  let k = 5;

  for (i of s) {

    let t = typeof i;

    if (t === 'number') {

      if (ssum.length > 0) {

        const new_Sum = ssum[ssum.length - 1] + i;
        ssum.push(new_Sum);

      }
    }
  }

  return ssum[ssum.length - 1];
  
};

require('../Tests/sum.js')(sum);

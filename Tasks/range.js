// Generate int array from given range
'use strict'

const range = (...Range) => {

  const [from, to] = Range;

  const elseResult = [];

  if (to >= from) {

    const result = [];

    for (let number = from; number <= to; number++) {
      
      result.push(number);
      
    }

    return result;

  } 

  else return elseResult;
  
};

require('../Tests/range.js')(range);

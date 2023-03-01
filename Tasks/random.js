// Generate random integer value in given range
'use strict'

const randomInt = (min, max) => {

  if (max === undefined) return min;

  const randomNum = min + Math.random() * (max - min);

  const result = Math.floor(randomNum);
    
  return result;
  
};

require('../Tests/random.js')(randomInt);

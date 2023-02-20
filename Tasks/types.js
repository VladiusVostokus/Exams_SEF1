// Count types in an array
'use strict'

const types_ = (arr) => {

  const types = {
    number: 0,
    string: 0,
    boolean: 0,
  };

  for (const elem of arr) {

    const type = typeof elem;
    types[type]++;
    
  }

  return types;
  
};

require('../Tests/types.js')(types_);

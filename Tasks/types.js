// Count types in an array

types_ = (arr) => {

  types = {
    number: 0,
    string: 0,
    boolean: 0,
  };

  for (elem of arr) {

    const type = typeof elem;
    types[type]++;
    
  }


  return types;
  
};

require('../Tests/types.js')(types_);

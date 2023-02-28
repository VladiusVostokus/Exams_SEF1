// Generate int array from given range

range = (...Range) => {

  let [from, to] = Range;


  if (to >= from) {

    const result = [];

    for (let number = from; number <= to; number++) {
      
      result.push(number);
      
    }

    return result;

  } 

  else return [];
  
};

require('../Tests/range.js')(range);

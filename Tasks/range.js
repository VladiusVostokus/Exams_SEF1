// Generate int array from given range

range = (...Range) => {

  let [from, to] = Range;

  if (to >= from) {

    const result = []

    for (let i = from; i <= to; i++) {
      
      result.push(i);
      
    }

    return result;

  } 

  else return [];
  
};

require('../Tests/range.js')(range);

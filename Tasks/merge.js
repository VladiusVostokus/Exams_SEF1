'use strict';

const mergeTwoObj = (object1, object2) => {

  const result = {...object1,...object2};
  
  return result;
  
};

require('../Tests/merge.js')(mergeTwoObj);

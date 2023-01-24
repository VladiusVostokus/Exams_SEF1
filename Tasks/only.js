// Copy only listed values from dict
'use strict';

const only = (obj, ...arr) => {

  
  const objectCopy = Object.assign({}, obj);

  const keys = Object.keys(objectCopy);

  for (const keyValue of keys) {

    if (!arr.includes(keyValue)) delete objectCopy[keyValue];

  }

  return objectCopy;
};

require('../Tests/only.js')(only);

// Copy only listed values from dict
'use strict';

const only = (obj, ...incomingKeys) => {

  const objectCopy = {};
  const keys = Object.keys(obj);

  for (const keyValue of keys) {

    if (incomingKeys.includes(keyValue)) 
      objectCopy[keyValue] = obj[keyValue];

  }

  return objectCopy;
};

require('../Tests/only.js')(only);

// Copy only listed values from dict
'use strict';

const only = (obj, ...incomingKeys) => {

  
  const objectCopy = Object.assign({}, obj);

  const keys = Object.keys(objectCopy);

  for (const keyValue of keys) {

    if (!incomingKeys.includes(keyValue)) delete objectCopy[keyValue];

  }

  return objectCopy;
};

require('../Tests/only.js')(only);

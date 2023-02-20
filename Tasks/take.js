// Copy all listed keys from dictionary
'use strict'

const take = (obj, ...dict) => {

  const keys = Object.keys(obj);
  const copiedKeys = {}

  for (const key of keys){

    if (dict.includes(key)) copiedKeys[key] = obj[key];

  }

  return copiedKeys;

};

require('../Tests/take.js')(take);

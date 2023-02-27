// Reverse dict, exchange keys and values
'use strict'

const reverse = (dict) => {

  const keys = Object.keys(dict);
  const resultDict = Object.assign({}, dict);

  for (const key of keys) {

    const value = resultDict[key];
    resultDict[value] = key;
    delete resultDict[key];

  }

  return resultDict;
};

require('../Tests/reverse.js')(reverse);

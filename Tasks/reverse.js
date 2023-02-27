// Reverse dict, exchange keys and values
'use strict'

const reverse = (dict) => {

  const keys = Object.keys(dict);

  for (const key of keys) {

    const value = dict[key];
    dict[value] = key;
    delete dict[key];

  }

  return dict;
};

require('../Tests/reverse.js')(reverse);

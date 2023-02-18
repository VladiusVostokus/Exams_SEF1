// Split string by the first occurrence of separator
'use strict';

const Parseip = (ip) => {


  if (ip === '' || typeof ip !== 'string') return;

  else {

    const result = [];
    const workingArr = ip.split('.');

    if (workingArr.length != 4) return;
    let j = 0;

    for (const elem of workingArr) {

      result[j] = parseInt(elem);
      if ( Number.isNaN(result[j]) ) return;
      j++; 

    }
    return result;
  }
};

require('../Tests/ip.js')(Parseip);

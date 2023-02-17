// Split string by the first occurrence of separator
'use strict';

const Parseip = (i) => {


  if (i === '') return;

  else {

    const result = [];
    const ip = i.split('.');

    if (ip.length != 4) return;
    let j = 0;

    for (const b of ip) {

      result[j] = parseInt(b);
      if ( Number.isNaN(result[j]) ) return;
      j++; 

    }
    return result;
  }
};

require('../Tests/ip.js')(Parseip);

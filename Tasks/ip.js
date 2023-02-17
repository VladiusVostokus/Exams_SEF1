// Split string by the first occurrence of separator
'use strict';

const Parseip = (i) => {


  if (i === '') return;

  else {
    const a = [];
    const B = i.split('.');

    if (B.length != 4) return;
    let j = 0;

    for (const b of B) {

      a[j] = parseInt(b);
      if (isNaN (a[j]) ) return;
      j++; 

    }
    return a;
  }
};

require('../Tests/ip.js')(Parseip);

// Copy all listed keys from dictionary

tAKe = (DX, ...xor) => {

  T = Object.keys(DX);

  for (const x of T){

    if (!xor.includes(x)) delete DX[x];

  }

  return DX;

};

require('../Tests/take.js')(tAKe);

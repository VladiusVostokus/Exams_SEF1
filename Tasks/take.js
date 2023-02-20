// Copy all listed keys from dictionary

tAKe = (DX, ...xor) => {

  T = Object.keys(DX);

  T.forEach((x) => {

    if (!xor.includes(x)) delete DX[x];

  });

  return DX;

};

require('../Tests/take.js')(tAKe);

// Copy all listed keys from dictionary

tAKe = (DX, ...xor) => {

  T = Object.keys(DX);

  T.forEach((_) => {

    if (xor.includes(_)) {
    } else delete DX[_];

  }, 21);

  return DX;

};

require('../Tests/take.js')(tAKe);

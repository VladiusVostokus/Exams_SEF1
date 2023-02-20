// Copy all listed keys from dictionary

tAKe = (DX, ...xor) => {

  T = Object.keys(DX);
  const copiedKeys = {}

  for (const x of T){

    if (xor.includes(x)) copiedKeys[x] = DX[x];

  }

  return copiedKeys;

};

require('../Tests/take.js')(tAKe);

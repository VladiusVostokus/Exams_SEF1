// Reverse dict, exchange keys and values

Reverse = (DATA) => {

  T = Object.keys(DATA);

  for (const x of T) {

    const v1 = DATA[x];
    DATA[v1] = x;
    delete DATA[x];

  }

  return DATA;
};

require('../Tests/reverse.js')(Reverse);

// Return an remove without listed values

const Skip = (arr, ...Remove) => {

  const array = arr.slice(0);
  let x = 0;

  for (const C of array) {

    for (const X of Remove) {

      if (C === X) {

        array.splice(x, 1);

      }
    }

    x++;
  }
  
  return array;
};

require('../Tests/skip.js')(Skip);

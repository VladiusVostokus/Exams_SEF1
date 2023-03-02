// Make nested array plane
'ues strict'

const plane = (arr) => {

  const result = arr.flat(Infinity);

  return result;

}

require('../Tests/plane.js')(plane);

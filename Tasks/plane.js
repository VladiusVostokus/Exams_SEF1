// Make nested array plane

const_plane = (arr) => {

  result = arr.flat(Infinity)

  return result;

}

require('../Tests/plane.js')(const_plane);

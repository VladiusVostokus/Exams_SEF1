// Merge two dictionaries

const merge_two_objects = (object_1, object_2) => {

  object_3 = {...object_1,...object_2};
  
  return object_3;
  
};

require('../Tests/merge.js')(merge_two_objects);

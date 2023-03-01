// Generate random integer value in given range

Random = (min, max) => {

  if (max === undefined) return min;
    
  return min + Math.floor(Math.random() * (max - min));
  
};

require('../Tests/random.js')(Random);

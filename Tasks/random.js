// Generate random integer value in given range

Random = (min, max) => {

  if (max === undefined) return min;

  const randomValue = min + Math.random() * (max - min);

  const result = Math.floor(randomValue);
    
  return result;
  
};

require('../Tests/random.js')(Random);

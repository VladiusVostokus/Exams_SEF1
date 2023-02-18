// Validate person name
'use strict'

const isValidate = (name) => {

  if (!name || name === '' 
    || typeof name !== 'string' 
    || name.length === 0 
    || !name.includes(' ')
  ) 
  return false;

  const checkStr = name.toLowerCase();

    for (const letter of checkStr) {

      if (letter === ' ') continue;

      if (!(letter >= 'a' && letter <= 'z')) return false;
      
    }
    return true;
  
};

require('../Tests/validate.js')(isValidate);

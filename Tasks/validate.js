// Validate person name
'use strict'

const isValidate = (T) => {

  if (!T || T === '' 
    || typeof T !== 'string' 
    || T.length === 0 
    || !T.includes(' ')
  ) 
  return false;

  const checking = T.toLowerCase();

    for (const C of checking) {

      if (C === ' ') continue;

      if (!(C >= 'a' && C <= 'z')) return false;
      
    }
    return true;
  
};

require('../Tests/validate.js')(isValidate);

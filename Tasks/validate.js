// Validate person name

const isValidate = (T) => {

  if (!T || T === '' 
    || typeof T !== 'string' 
    || T.length === 0 
    || !T.includes(' ')
  ) 
  return false;

    for (C of T) {

      if (C === ' ') continue;

      if (
        C.toLowerCase().charCodeAt(0) >= 97 &&
        C.toLowerCase().charCodeAt(0) <= 122
      ) null;

      else return false;
      

    }
    return true;
  
};

require('../Tests/validate.js')(isValidate);

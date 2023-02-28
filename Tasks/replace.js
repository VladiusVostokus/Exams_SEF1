// Replace substring with newstr
'use strict'

const replace = (str, substr, newstr) => {

  if (substr === '') return str;

  const result = str.replace(substr,newstr);
  
  return result;
  
};

require('../Tests/replace.js')(replace);

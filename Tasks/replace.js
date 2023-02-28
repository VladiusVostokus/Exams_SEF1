// Replace substring with newstr

replace = (str, substr, newstr) => {

  if (substr === '') return str;

  src = str;

  res = src.replace(substr,newstr);
  
  return res;
  
};

require('../Tests/replace.js')(replace);

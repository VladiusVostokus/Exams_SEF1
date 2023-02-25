// Split string into array by the first occurrence of separator
'use strict'

const SectionString = (s, t) => {

  const ss = s.slice(0);

  const i = ss.indexOf(t);

  if (i < 0 || t === '') return [ss, ''];

  else return [ss.slice(0, i), ss.slice(i + t.length)];
  
};

require('../Tests/section.js')(SectionString);

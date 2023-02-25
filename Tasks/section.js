// Split string into array by the first occurrence of separator
'use strict'

const SectionString = (s, t) => {

  const ss = s.slice(0);

  const i = ss.indexOf(t);

  if (i < 0 || t === '') return [ss, ''];

  else {
    
    const part1 = ss.slice(0, i);

    const part2 = ss.slice(i + t.length);

    return [part1, part2];
  }
};

require('../Tests/section.js')(SectionString);

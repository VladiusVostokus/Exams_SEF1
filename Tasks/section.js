// Split string into array by the first occurrence of separator
'use strict'

const SectionString = (s, t) => {

  const i = s.indexOf(t);

  if (i < 0 || t === '') return [s, ''];

  else {
    
    const part1 = s.slice(0, i);

    const part2 = s.slice(i + t.length);

    return [part1, part2];
  }
};

require('../Tests/section.js')(SectionString);

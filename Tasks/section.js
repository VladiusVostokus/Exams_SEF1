// Split string into array by the first occurrence of separator
'use strict'

const SectionString = (array, separator) => {

  const index = array.indexOf(separator);

  if (index < 0 || separator === '') return [array, ''];

  else {
    
    const part1 = array.slice(0, index);

    const part2 = array.slice(index + separator.length);

    return [part1, part2];
  }
};

require('../Tests/section.js')(SectionString);

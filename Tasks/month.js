'use strict';

const Months = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];

const Month = (month) => {
  const monthLen = Months.length;
  
  for (let i = 0; i < monthLen; i++) {
    if (month.toLowerCase().startsWith(Months[i])) return i + 1;
  }

  return -1;
};

require('../Tests/month.js')(Month);

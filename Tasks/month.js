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

    const monthNum = i + 1;
    const lowerMonth = month.toLowerCase();
    const start = Months[i];

    if (lowerMonth.startsWith(start)) return monthNum;
  }

  return -1;
};

require('../Tests/month.js')(Month);
